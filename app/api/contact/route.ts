import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { siteConfig } from '@/data/siteConfig'

interface ContactFormData {
  name: string
  phone: string
  service: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.phone || !body.service || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic phone validation
    const phoneRegex = /^[\d\s+()-]{8,20}$/
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      )
    }

    // Check for Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Initialize Resend inside the handler to avoid build-time errors
    const resend = new Resend(process.env.RESEND_API_KEY)
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} Website <onboarding@resend.dev>`,
      to: toEmail,
      reply_to: toEmail,
      subject: `New Contact Form Submission - ${body.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(body.service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(body.message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This message was sent from the ${siteConfig.name} website contact form.</small></p>
      `,
      text: `
New Contact Form Submission

Name: ${body.name}
Phone: ${body.phone}
Service: ${body.service}

Message:
${body.message}

---
This message was sent from the ${siteConfig.name} website contact form.
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
