import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from './Button'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    // EmailJS placeholder — replace with emailjs.sendForm(...) when keys are configured
    window.setTimeout(() => {
      setStatus('sent')
      form.reset()
    }, 900)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-xl shadow-navy/5 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Company" name="company" />
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-navy">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl border border-navy/10 bg-mist px-4 py-3 text-sm outline-none transition focus:border-green"
          placeholder="Tell us about your project or inquiry"
        />
      </label>
      <Button type="submit" className="mt-6 w-full sm:w-auto" size="lg">
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent' : 'Send Message'}
      </Button>
      {status === 'sent' && (
        <p className="mt-3 text-sm text-green-dark">
          Thank you. Our team will respond within one business day. (EmailJS placeholder)
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-sm font-medium text-navy">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-11 w-full rounded-2xl border border-navy/10 bg-mist px-4 text-sm outline-none transition focus:border-green"
      />
    </label>
  )
}
