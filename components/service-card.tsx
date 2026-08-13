'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  /** When set, the whole card becomes a link to the service detail page. */
  href?: string
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const reduce = useReducedMotion()

  // The card body is rendered inside a Link when href is set so the entire
  // surface is clickable — the visual treatment is identical either way.
  const body = (
    <>
      {/* Icon container */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_rgba(177,52,42,0.2)]">
        <div className="transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>

      <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-semibold text-card-foreground uppercase tracking-tight transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
      <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </>
  )

  return (
    <motion.div
      whileHover={reduce ? {} : { y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className={`relative group overflow-hidden bg-card rounded-xl border border-border ${href ? '' : 'cursor-default'}`}
    >
      {/* Gradient fill that sweeps in on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none" />

      {/* Glow border */}
      <div className="absolute inset-0 rounded-xl ring-inset ring-0 ring-primary/0 group-hover:ring-1 group-hover:ring-primary/30 transition-all duration-300 pointer-events-none" />

      {href ? (
        <Link href={href} className="relative block p-6">
          {body}
        </Link>
      ) : (
        <div className="relative p-6">{body}</div>
      )}
    </motion.div>
  )
}
