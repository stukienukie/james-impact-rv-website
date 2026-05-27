'use client'

import { useState } from 'react'
import { Star, ExternalLink, ArrowLeft, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=Impact+RV+Repair+Kyle+TX+Reviews#lrd=0xaf94c15e2b16d41d:0x327626e732f50717,3,,,,'

type Step = 'rating' | 'positive' | 'negative' | 'submitted'

export function ReviewFunnel() {
  const [step, setStep] = useState<Step>('rating')
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function handleStarClick(star: number) {
    setRating(star)
    if (star >= 4) {
      setStep('positive')
    } else {
      setStep('negative')
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !message.trim()) {
      setError('Please fill in your name and feedback.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, rating }),
      })
      if (!res.ok) throw new Error('Failed')
      setStep('submitted')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const displayRating = hovered || rating

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">

        {/* Step 1 — Star Rating */}
        {step === 'rating' && (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Star className="h-8 w-8 text-primary fill-primary/20" />
            </div>
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-tight">
              How&apos;d we do?
            </h1>
            <p className="mt-3 text-muted-foreground">
              Tap a star to rate your experience. Takes 30 seconds.
            </p>

            <div className="mt-8 flex justify-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className="group transition-transform duration-150 hover:scale-110 active:scale-95"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  <Star
                    className={cn(
                      'h-12 w-12 transition-colors duration-150',
                      star <= displayRating
                        ? 'text-accent fill-accent'
                        : 'text-border fill-muted group-hover:text-accent/60'
                    )}
                  />
                </button>
              ))}
            </div>

            {displayRating > 0 && (
              <p className="mt-4 text-sm text-muted-foreground">
                {displayRating === 5 && 'Excellent!'}
                {displayRating === 4 && 'Great!'}
                {displayRating === 3 && 'Fair'}
                {displayRating === 2 && 'Below expectations'}
                {displayRating === 1 && 'Poor'}
              </p>
            )}
          </div>
        )}

        {/* Step 2a — Positive (4-5 stars) */}
        {step === 'positive' && (
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    'h-8 w-8',
                    star <= rating ? 'text-accent fill-accent' : 'text-border fill-muted'
                  )}
                />
              ))}
            </div>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-tight">
              You made our day!
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              That means a lot. If you have a moment, leaving a Google review helps other RV
              owners find us — and it goes a long way for a small business.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 btn-red-gradient text-white font-semibold w-full sm:w-auto"
            >
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Leave a Google Review
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>

            <button
              onClick={() => { setStep('rating'); setRating(0) }}
              className="mt-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto"
            >
              <ArrowLeft className="h-3 w-3" />
              Go back
            </button>
          </div>
        )}

        {/* Step 2b — Private Feedback (1-3 stars) */}
        {step === 'negative' && (
          <div>
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    'h-7 w-7',
                    star <= rating ? 'text-accent fill-accent' : 'text-border fill-muted'
                  )}
                />
              ))}
            </div>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight text-center">
              We&apos;re sorry to hear that.
            </h2>
            <p className="mt-2 text-muted-foreground text-center text-sm leading-relaxed">
              Your feedback goes directly to James and stays private. Tell us what happened
              and we&apos;ll make it right.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email <span className="text-muted-foreground text-xs">(optional)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="So we can follow up"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  What could we have done better? <span className="text-primary">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what happened..."
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="btn-red-gradient text-white font-semibold flex-1"
                >
                  {submitting ? 'Sending...' : 'Send Feedback'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => { setStep('rating'); setRating(0) }}
                  className="border-border hover:border-primary"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Go back
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3 — Submitted confirmation */}
        {step === 'submitted' && (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-tight">
              Feedback received.
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              James will review your feedback personally and reach out if you left your email.
              We appreciate you helping us do better.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-8 border-border hover:border-primary"
            >
              <a href="/">Back to Home</a>
            </Button>
          </div>
        )}

      </div>
    </div>
  )
}
