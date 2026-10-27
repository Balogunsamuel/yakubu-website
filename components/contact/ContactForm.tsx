'use client'

import { useState } from 'react'
import { Send, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'tax-services', label: 'Tax Services' },
  { value: 'finance-management', label: 'Finance Management' },
  { value: 'business-management', label: 'Business Management' },
  { value: 'business-centre', label: 'Business Centre (Printing, Typing, etc.)' },
  { value: 'online-registration', label: 'Online Registration Assistance' },
  { value: 'other', label: 'Other' },
]

interface FormData {
  name: string
  phone: string
  service: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', phone: '', service: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-bullet-green/30 bg-bullet-green/10 p-6 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-bullet-green" />
        <h3 className="mt-4 text-lg font-semibold text-white">Message Sent!</h3>
        <p className="mt-2 text-grey-300">
          Thank you for contacting us. We&apos;ll get back to you shortly.
        </p>
        <Button
          onClick={() => setStatus('idle')}
          variant="outline"
          className="mt-4"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Security Notice */}
      <div className="rounded-lg border border-brand-teal/30 bg-brand-teal/10 p-4">
        <p className="text-sm text-grey-300">
          <strong className="text-white">Important:</strong> Please do not send IDs, tax records, or
          financial documents through this form. We&apos;ll tell you how to share them securely
          after we contact you.
        </p>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
          Your Name <span className="text-brand-red">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-navy-lighter bg-navy px-4 py-3 text-white placeholder-grey-500 transition-colors focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
          placeholder="Enter your full name"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
          Phone Number <span className="text-brand-red">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-navy-lighter bg-navy px-4 py-3 text-white placeholder-grey-500 transition-colors focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
          placeholder="e.g. 08034526819"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-white">
          Service Needed <span className="text-brand-red">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-navy-lighter bg-navy px-4 py-3 text-white transition-colors focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
          Message <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full rounded-lg border border-navy-lighter bg-navy px-4 py-3 text-white placeholder-grey-500 transition-colors focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-red-light">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          {errorMessage || 'Something went wrong. Please try again.'}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            Send Message <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
