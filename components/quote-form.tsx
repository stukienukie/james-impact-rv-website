'use client'

import { useId, useState } from 'react'
import { Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 shadow-sm focus:border-white focus:outline-none focus:ring-4 focus:ring-white/40 transition-all'

const labelClass =
  'block text-sm font-bold uppercase tracking-wider text-white mb-2'

interface QuoteFormProps {
  /** Tagged onto the lead so James can see which page it came from. */
  source?: string
  /** Adds the RV type field — used on the contact page where there's more room. */
  showRvType?: boolean
  className?: string
}

export function QuoteForm({
  source = 'Website',
  showRvType = false,
  className,
}: QuoteFormProps) {
  const reduce = useReducedMotion()
  // Both pages could render this twice; useId keeps label/input pairs unique.
  const uid = useId()
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
          rvType: data.get('rvType') || '',
          message: data.get('message'),
          source,
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
      className={cn(
        'quote-card-gradient w-full max-w-lg rounded-2xl border border-white/20 p-7 sm:p-9',
        className
      )}
    >
      <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight text-center leading-[0.95]">
        Get a Quote
      </h2>
      <p className="mt-4 text-base text-white/85 text-center leading-relaxed font-medium">
        Tell us what&apos;s going on and where you&apos;re parked.
        <span className="block mt-1 text-white/70">
          You hear back from us instantly and go straight into our system — no
          customer at Impact RV Repair gets forgotten.
        </span>
      </p>

      {status === 'success' ? (
        <div
          role="status"
          className="mt-8 flex flex-col items-center text-center gap-4 py-8"
        >
          <CheckCircle2 className="h-12 w-12 text-white" />
          <p className="text-2xl font-bold text-white font-[family-name:var(--font-barlow-condensed)] uppercase tracking-tight">
            Request Sent
          </p>
          <p className="text-base text-white/85 leading-relaxed">
            James will reach out shortly. Need help right now? Call{' '}
            <a
              href="tel:512-968-5258"
              className="text-white font-bold underline underline-offset-4 decoration-2"
            >
              512-968-5258
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor={`${uid}-name`} className={labelClass}>
                Full Name <span className="text-white/70">*</span>
              </label>
              <input
                id={`${uid}-name`}
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="John Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={`${uid}-phone`} className={labelClass}>
                Phone <span className="text-white/70">*</span>
              </label>
              <input
                id={`${uid}-phone`}
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(512) 555-1234"
                className={inputClass}
              />
            </div>
          </div>

          <div className={showRvType ? 'grid sm:grid-cols-2 gap-5' : undefined}>
            <div>
              <label htmlFor={`${uid}-email`} className={labelClass}>
                Email{' '}
                <span className="text-white/55 normal-case tracking-normal font-semibold">
                  (optional)
                </span>
              </label>
              <input
                id={`${uid}-email`}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            {showRvType && (
              <div>
                <label htmlFor={`${uid}-rv-type`} className={labelClass}>
                  RV Type{' '}
                  <span className="text-white/55 normal-case tracking-normal font-semibold">
                    (optional)
                  </span>
                </label>
                <input
                  id={`${uid}-rv-type`}
                  name="rvType"
                  type="text"
                  placeholder="Class A, travel trailer..."
                  className={inputClass}
                />
              </div>
            )}
          </div>

          <div>
            <label htmlFor={`${uid}-message`} className={labelClass}>
              What&apos;s Going On? <span className="text-white/70">*</span>
            </label>
            <textarea
              id={`${uid}-message`}
              name="message"
              required
              rows={3}
              placeholder="A/C not cooling, water leak, no power — and where your RV is parked."
              className={`${inputClass} resize-none`}
            />
          </div>

          {status === 'error' && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-lg border border-white/30 bg-black/25 px-4 py-3"
            >
              <AlertCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
              <p className="text-sm text-white leading-relaxed font-medium">
                {errorMessage}. Please call{' '}
                <a
                  href="tel:512-968-5258"
                  className="font-bold underline underline-offset-4 decoration-2"
                >
                  512-968-5258
                </a>{' '}
                instead.
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-quote-dark w-full h-14 rounded-lg font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase tracking-wide disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </span>
            ) : (
              'Get My Quote'
            )}
          </Button>

          <p className="text-center text-sm text-white/75 leading-relaxed font-medium">
            Prefer to talk? Call{' '}
            <a
              href="tel:512-968-5258"
              className="text-white font-bold hover:text-white/80 transition-colors inline-flex items-center gap-1.5 underline underline-offset-4 decoration-2 decoration-white/40"
            >
              <Phone className="h-4 w-4" />
              512-968-5258
            </a>
          </p>
        </form>
      )}
    </motion.div>
  )
}
