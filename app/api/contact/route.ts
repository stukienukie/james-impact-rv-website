import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// TODO: add RESEND_API_KEY to .env.local

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, email, phone, rvType, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Impact RV Repair Website <onboarding@resend.dev>',
      to: 'james@impactrvrepair.com',
      replyTo: email,
      subject: `New Service Request from ${name}`,
      html: `
        <h2>New Service Request — Impact RV Repair</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>RV Type:</strong> ${rvType || 'Not specified'}</p>
        <hr />
        <p><strong>Issue Description:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
