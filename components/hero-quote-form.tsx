'use client'

import { useState } from 'react'
import { Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function HeroQuoteForm() {
  const reduce = useReducedMotion()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot — bots fill hidden fields, humans never see them
    if (data.get('company')) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email') || '',
          message: data.get('message'),
          source: 'Homepage Hero',
        }),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong'
      )
    }
  }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      className="w-full max-w-md lg:ml-auto rounded-2xl border border-white/15 bg-secondary/90 backdrop-blur-md shadow-2xl p-6 sm:p-8"
    >
      <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight text-center leading-none">
        Get a Free Quote
      </h2>
      <p className="mt-3 text-sm text-white/60 text-center leading-relaxed">
        Tell us what&apos;s going on and where you&apos;re parked. We&apos;ll get
        right back to you.
      </p>

      {status === 'success' ? (
        <div
          role="status"
          className="mt-8 flex flex-col items-center text-center gap-3 py-6"
        >
          <CheckCircle2 className="h-10 w-10 text-primary" />
          <p className="text-white font-semibold">Request sent.</p>
          <p className="text-sm text-white/60 leading-relaxed">
            James will reach out shortly. Need help right now? Call{' '}
            <a
              href="tel:512-968-5258"
              className="text-primary font-semibold underline underline-offset-2"
            >
              512-968-5258
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="hero-name"
                className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1.5"
              >
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                id="hero-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="John Smith"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="hero-phone"
                className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1.5"
              >
                Phone <span className="text-primary">*</span>
              </label>
              <input
                id="hero-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(512) 555-1234"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="hero-email"
              className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1.5"
            >
              Email <span className="text-white/40 normal-case">(optional)</span>
            </label>
            <input
              id="hero-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="hero-message"
              className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1.5"
            >
              What&apos;s going on? <span className="text-primary">*</span>
            </label>
            <textarea
              id="hero-message"
              name="message"
              required
              rows={3}
              placeholder="A/C not cooling, water leak, no power — and where your RV is parked."
              className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2.5"
            >
              <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
              <p className="text-xs text-white/80 leading-relaxed">
                {errorMessage}. Please call{' '}
                <a
                  href="tel:512-968-5258"
                  className="text-primary font-semibold underline underline-offset-2"
                >
                  512-968-5258
                </a>{' '}
                instead.
              </p>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={status === 'submitting'}
            className="w-full btn-red-gradient text-white font-semibold text-base disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </span>
            ) : (
              'Send Request'
            )}
          </Button>

          <p className="text-center text-xs text-white/50 leading-relaxed">
            Prefer to talk? Call{' '}
            <a
              href="tel:512-968-5258"
              className="text-white/80 font-semibold hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Phone className="h-3 w-3" />
              512-968-5258
            </a>
          </p>
        </form>
      )}
    </motion.div>
  )
}
