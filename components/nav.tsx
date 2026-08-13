'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { services } from '@/lib/services'
import { locations } from '@/lib/locations'

type NavLink = {
  href: string
  label: string
  /** Present on the two mega-menu entries: Services and Service Area. */
  items?: { href: string; label: string; description?: string }[]
}

const navLinks: NavLink[] = [
  {
    href: '/services',
    label: 'Services',
    items: services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.name,
      description: service.cardDescription,
    })),
  },
  { href: '/gallery', label: 'Gallery' },
  {
    href: '/service-area',
    label: 'Service Area',
    items: locations.map((location) => ({
      href: `/service-area/${location.slug}`,
      label: `${location.city}, TX`,
      description: location.cardDescription,
    })),
  },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  /** Label of the desktop mega-menu currently open, or null. */
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  /** Label of the expanded mobile submenu, or null. */
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Escape closes whichever menu is open, and a click outside closes the
  // desktop mega-menu.
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setIsOpen(false)
      }
    }
    const handleClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  // A short close delay keeps the panel from vanishing while the pointer
  // crosses the gap between the trigger and the panel.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const closeMobile = () => {
    setIsOpen(false)
    setOpenMobileMenu(null)
  }

  return (
    <header
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || openMenu
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
            {navLinks.map((link) =>
              link.items ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose()
                    setOpenMenu(link.label)
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={link.href}
                    onFocus={() => setOpenMenu(link.label)}
                    aria-expanded={openMenu === link.label}
                    aria-haspopup="true"
                    className="flex items-center gap-1 text-secondary-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-200',
                        openMenu === link.label && 'rotate-180'
                      )}
                    />
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="btn-red-gradient text-white font-semibold uppercase tracking-wide"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white/60 text-white bg-transparent hover:bg-white/10 hover:border-white font-semibold transition-all"
            >
              <a href="tel:512-968-5258" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                512-968-5258
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop mega-menu panel — spans the header width below the bar */}
      {navLinks
        .filter((link) => link.items)
        .map((link) => (
          <div
            key={link.href}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className={cn(
              'hidden lg:block absolute left-0 right-0 top-full origin-top bg-secondary/98 backdrop-blur-sm border-t border-border shadow-xl transition-all duration-200',
              openMenu === link.label
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2 pointer-events-none'
            )}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-baseline justify-between mb-5">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-widest text-primary">
                  {link.label === 'Services'
                    ? 'Every service is mobile — we come to you'
                    : 'On-site within 50 miles of Kyle, TX'}
                </p>
                <Link
                  href={link.href}
                  onClick={() => setOpenMenu(null)}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label === 'Services' ? 'All services' : 'Full service area'}
                </Link>
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-1">
                {link.items?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenMenu(null)}
                    className="group rounded-lg px-3 py-2.5 hover:bg-white/5 transition-colors"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold text-secondary-foreground group-hover:text-primary transition-colors">
                      {link.label === 'Service Area' && (
                        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                      )}
                      {item.label}
                    </span>
                    {item.description && (
                      <span className="mt-0.5 block text-xs text-muted-foreground leading-snug line-clamp-2">
                        {item.description}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden bg-secondary border-t border-border overflow-y-auto transition-all duration-300',
          isOpen ? 'max-h-[calc(100dvh-4rem)]' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-4 py-4">
          {navLinks.map((link) =>
            link.items ? (
              <div key={link.href} className="border-b border-border">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="flex-1 py-3 text-secondary-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileMenu(
                        openMobileMenu === link.label ? null : link.label
                      )
                    }
                    aria-label={`Show all ${link.label}`}
                    aria-expanded={openMobileMenu === link.label}
                    className="p-3 text-secondary-foreground hover:text-primary transition-colors"
                  >
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        openMobileMenu === link.label && 'rotate-180'
                      )}
                    />
                  </button>
                </div>

                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openMobileMenu === link.label ? 'max-h-[40rem]' : 'max-h-0'
                  )}
                >
                  <ul className="pb-3 pl-3 border-l border-border ml-1 space-y-0.5">
                    {link.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMobile}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-secondary-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide border-b border-border"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            )
          )}

          <Button
            asChild
            className="mt-4 btn-red-gradient text-white font-semibold uppercase tracking-wide"
          >
            <Link href="/contact" onClick={closeMobile}>
              Get a Quote
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="mt-3 border-2 border-white/60 text-white bg-transparent hover:bg-white/10 hover:border-white font-semibold"
          >
            <a href="tel:512-968-5258" className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              512-968-5258
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
