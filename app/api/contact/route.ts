import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Sender must be on a domain verified in Resend. `onboarding@resend.dev` only
// delivers to the Resend account owner, so leads silently vanish in production.
const FROM_ADDRESS =
  process.env.CONTACT_FROM_EMAIL || 'Impact RV Repair <leads@impactrvrepair.com>'
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL || 'james@impactrvrepair.com'

// Optional GoHighLevel inbound webhook. Unset = silent no-op, so the form keeps
// working before the GHL account exists.
const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Simple in-memory rate limit. Resets on cold start, which is fine — it exists
// to blunt bot floods, not to be an audit-grade counter.
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const submissions = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (submissions.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  )
  recent.push(now)
  submissions.set(ip, recent)

  if (submissions.size > 5000) submissions.clear()

  return recent.length > RATE_LIMIT_MAX
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function clean(value: unknown, maxLength = 2000): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please call 512-968-5258' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Honeypot — bots fill it, humans never see it. Fake success so they don't retry.
    if (clean(body.company, 100)) {
      return NextResponse.json({ success: true })
    }

    const name = clean(body.name, 100)
    const phone = clean(body.phone, 30)
    const email = clean(body.email, 200)
    const rvType = clean(body.rvType, 100)
    const message = clean(body.message)
    const source = clean(body.source, 60) || 'Website'

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and a short message are required' },
        { status: 400 }
      )
    }

    if (email && !EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: 'That email address does not look valid' },
        { status: 400 }
      )
    }

    // GoHighLevel is the system of record for leads — notifications are built
    // as GHL automations, so the email below is only a fallback. The submission
    // counts as captured if EITHER leg succeeds; we only fail the request when
    // both do, which would mean the lead is genuinely lost.
    let leadCaptured = false

    if (GHL_WEBHOOK_URL) {
      try {
        const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          // Always send all six keys, empty string when blank. GHL builds its
          // field mapping from the payload shape, so an omitted key on a
          // partial submission would silently drop that field in the CRM.
          body: JSON.stringify({
            full_name: name,
            phone,
            email,
            rv_type: rvType,
            message,
            source,
          }),
          signal: AbortSignal.timeout(5000),
        })

        leadCaptured = ghlResponse.ok

        if (!ghlResponse.ok) {
          console.error('GHL webhook rejected the lead:', ghlResponse.status)
        }
      } catch (webhookError) {
        console.error('GHL webhook failed:', webhookError)
      }
    }

    // Best-effort email. A missing RESEND_API_KEY or unverified sending domain
    // must not surface as a failure to the customer when GHL already has the
    // lead — that would tell real prospects the form is broken.
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: FROM_ADDRESS,
        to: TO_ADDRESS,
        ...(email ? { replyTo: email } : {}),
        subject: `New Service Request from ${name} (${source})`,
        html: `
          <h2>New Service Request — Impact RV Repair</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>
          <p><strong>Email:</strong> ${email ? escapeHtml(email) : 'Not provided'}</p>
          <p><strong>RV Type:</strong> ${rvType ? escapeHtml(rvType) : 'Not specified'}</p>
          <p><strong>Came from:</strong> ${escapeHtml(source)}</p>
          <hr />
          <p><strong>Issue Description:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        `,
      })

      leadCaptured = true
    } catch (emailError) {
      console.error('Resend email failed:', emailError)
    }

    if (!leadCaptured) {
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
