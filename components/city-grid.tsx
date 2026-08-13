'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { MapPin } from 'lucide-react'
import { locations } from '@/lib/locations'

export function CityGrid() {
  const reduce = useReducedMotion()

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {locations.map((location) => (
        <motion.li
          key={location.slug}
          whileHover={reduce ? {} : { y: -4, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="relative group overflow-hidden rounded-lg bg-muted/50 border border-border"
        >
          {/* Gradient sweep */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Bottom accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none" />

          {/* Glow border */}
          <div className="absolute inset-0 rounded-lg ring-inset ring-0 ring-primary/0 group-hover:ring-1 group-hover:ring-primary/30 transition-all duration-300 pointer-events-none" />

          <Link
            href={`/service-area/${location.slug}`}
            className="relative flex items-center gap-2 p-3"
          >
            <MapPin className="h-4 w-4 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-foreground font-medium text-sm transition-colors duration-300 group-hover:text-primary">
              {location.city}
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}
