'use client'

import { motion, useReducedMotion } from 'motion/react'
import { MapPin } from 'lucide-react'

const cities = [
  'Kyle', 'Buda', 'Austin', 'Round Rock',
  'Cedar Park', 'Pflugerville', 'Georgetown', 'Leander',
  'San Marcos', 'Lakeway', 'Bastrop', 'Hutto',
  'Manor', 'Dripping Springs', 'Liberty Hill', 'Taylor',
  'Elgin', 'Wimberley',
]

export function CityGrid() {
  const reduce = useReducedMotion()

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {cities.map((city) => (
        <motion.li
          key={city}
          whileHover={reduce ? {} : { y: -4, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="relative group overflow-hidden flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border cursor-default"
        >
          {/* Gradient sweep */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Bottom accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none" />

          {/* Glow border */}
          <div className="absolute inset-0 rounded-lg ring-inset ring-0 ring-primary/0 group-hover:ring-1 group-hover:ring-primary/30 transition-all duration-300 pointer-events-none" />

          <MapPin className="relative h-4 w-4 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span className="relative text-foreground font-medium text-sm transition-colors duration-300 group-hover:text-primary">
            {city}
          </span>
        </motion.li>
      ))}
    </ul>
  )
}
