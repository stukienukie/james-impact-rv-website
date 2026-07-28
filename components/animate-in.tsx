'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

interface AnimateInProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right'
}

export function AnimateIn({ children, delay = 0, className, direction = 'up' }: AnimateInProps) {
  const reduce = useReducedMotion()

  const initial = reduce ? { opacity: 1 } : {
    opacity: 0,
    y: direction === 'up' ? 28 : 0,
    x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0,
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode[]
  staggerDelay?: number
  className?: string
}

export function StaggerGroup({ children, staggerDelay = 0.09, className }: StaggerProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : staggerDelay } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0 : 0.6, ease: easeOut },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
