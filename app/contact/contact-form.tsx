'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const rvTypes = [
  { value: 'class-a', label: 'Class A' },
  { value: 'class-b', label: 'Class B' },
  { value: 'class-c', label: 'Class C' },
  { value: 'travel-trailer', label: 'Travel Trailer' },
  { value: 'fifth-wheel', label: 'Fifth Wheel' },
  { value: 'toy-hauler', label: 'Toy Hauler' },
  { value: 'other', label: 'Other' },
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [rvType, setRvType] = useState('')
  const [validationError, setValidationError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidationError('')

    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') as string).trim()
    const email = (data.get('email') as string).trim()
    const phone = (data.get('phone') as string).trim()
    const message = (data.get('message') as string).trim()

    if (!name || !email || !phone || !message) {
      setValidationError('All fields are required.')
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setValidationError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, rvType, message }),
      })
      if (!res.ok) throw new Error('Non-OK response')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold text-card-foreground uppercase">
          Thanks!
        </h3>
        <p className="mt-2 text-muted-foreground">
          James will be in touch within 24 hours.
        </p>
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Already a customer? Let others know how it went.</p>
          <a
            href="/review"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Star className="h-4 w-4 fill-primary" />
            Rate your experience
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="bg-background text-base"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(512) 555-0123"
            className="bg-background text-base"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="bg-background text-base"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="rv-type">RV Type</Label>
        <Select value={rvType} onValueChange={setRvType}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select your RV type" />
          </SelectTrigger>
          <SelectContent>
            {rvTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Describe the issue</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us what's going on with your RV..."
          className="bg-background resize-none text-base"
        />
      </div>

      {validationError && (
        <p className="text-sm text-destructive flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {validationError}
        </p>
      )}

      {status === 'error' && (
        <p className="text-sm text-destructive flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong. Please call{' '}
          <a href="tel:512-968-5258" className="underline font-medium">
            512-968-5258
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
        size="lg"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Request a Visit'}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Prefer to call?{' '}
        <a
          href="tel:512-968-5258"
          className="text-primary hover:underline font-medium"
        >
          Dial 512-968-5258
        </a>
      </p>
    </form>
  )
}
