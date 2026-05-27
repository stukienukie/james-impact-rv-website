import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, email, message, rating } = body

    if (!name || !message || !rating) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Impact RV Repair Website <onboarding@resend.dev>',
      to: 'james@impactrvrepair.com',
      replyTo: email || 'noreply@impactrvrepair.com',
      subject: `Private Feedback — ${rating}-Star Rating from ${name}`,
      html: `
        <h2>Private Customer Feedback — Impact RV Repair</h2>
        <p><strong>Rating:</strong> ${'⭐'.repeat(rating)} (${rating}/5)</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <hr />
        <p><strong>What could we have done better?</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p style="color:#888;font-size:12px;">This feedback was submitted privately and was NOT posted to Google.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Feedback form error:', error)
    return NextResponse.json({ error: 'Failed to send feedback' }, { status: 500 })
  }
}
