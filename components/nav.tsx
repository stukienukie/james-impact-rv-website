'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-secondary/98 backdrop-blur-sm shadow-lg'
          : 'bg-secondary/60 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/impact-rv-logo.png"
              alt="Impact RV Repair logo mark"
              width={56}
              height={56}
              className="h-10 lg:h-12 w-auto object-contain shrink-0"
              priority
            />
            <div className="flex flex-col leading-none select-none">
              <span className="font-[family-name:var(--font-barlow-condensed)] text-xl lg:text-2xl font-bold uppercase tracking-tight text-white">
                IMPACT
              </span>
              <span className="font-[family-name:var(--font-barlow-condensed)] text-xs lg:text-sm font-semibold uppercase tracking-widest text-white/60">
                RV REPAIR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <a href="tel:512-968-5258" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call 512-968-5258
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden bg-secondary border-t border-border overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-secondary-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide border-b border-border last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            <a href="tel:512-968-5258" className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Call 512-968-5258
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
