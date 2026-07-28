'use client'

import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'

const trustBadges = [
  { label: 'Fully Mobile Shop' },
  { label: '12 Years Experience' },
  { label: '4.8 Google Rating' },
  { label: 'Emergencies First' },
]

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
}

export function HeroContent() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="w-full max-w-2xl"
      variants={reduce ? undefined : container}
      initial={reduce ? false : 'hidden'}
      animate="show"
    >
      <motion.h1
        variants={reduce ? undefined : item}
        className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight text-balance leading-none"
      >
        Mobile RV Repair{' '}
        <span className="text-primary">Delivered With Integrity.</span>
      </motion.h1>

      <motion.p
        variants={reduce ? undefined : item}
        className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed"
      >
        We come to your campsite, driveway, or storage lot. A/C down, water leak, no power?
        Emergency calls are always first in line. Serving Kyle, TX and 50 miles around.
      </motion.p>

      <motion.div
        variants={reduce ? undefined : item}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Button
          asChild
          size="lg"
          className="btn-red-gradient text-white font-semibold text-base active:scale-[0.98]"
        >
          <a href="tel:512-968-5258" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Call 512-968-5258
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2 border-white/70 text-white bg-transparent hover:bg-white/10 hover:border-white font-semibold text-base active:scale-[0.98] transition-all"
        >
          <Link href="/services" className="flex items-center gap-2">
            See Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        variants={reduce ? undefined : item}
        className="mt-10 grid grid-cols-2 gap-3 max-w-md"
      >
        {trustBadges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
            <span className="text-xs text-white/80 font-medium leading-tight">
              {badge.label}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
