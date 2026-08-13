import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

const exploreLinks = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/review', label: 'Leave a Review' },
]

// Same four cities as before — now linked to their location pages so every
// page on the site carries an internal link into the service-area cluster.
// Structure is unchanged; only the city names became links.
const serviceAreas = [
  { city: 'Kyle', slug: 'kyle-tx' },
  { city: 'Buda', slug: 'buda-tx' },
  { city: 'Austin', slug: 'austin-tx' },
  { city: 'San Marcos', slug: 'san-marcos-tx' },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/impact-rv-logo.png"
                alt="Impact RV Repair logo mark"
                width={56}
                height={56}
                className="h-12 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col leading-none select-none">
                <span className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase tracking-tight text-white">
                  IMPACT
                </span>
                <span className="font-[family-name:var(--font-barlow-condensed)] text-xs font-semibold uppercase tracking-widest text-white/60">
                  RV REPAIR
                </span>
              </div>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Mobile RV repair across Kyle, TX and Central Texas. Delivered with integrity.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold uppercase tracking-wide mb-4 text-secondary-foreground">
              Explore
            </h3>
            <nav className="flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold uppercase tracking-wide mb-4 text-secondary-foreground">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:512-968-5258"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-primary" />
                512-968-5258
              </a>
              <a
                href="mailto:james@impactrvrepair.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4 text-primary" />
                james@impactrvrepair.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="h-4 w-4 text-primary" />
                Mon-Sat, 8am-6pm
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold uppercase tracking-wide mb-4 text-secondary-foreground">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/103357905254624"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted/20 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-secondary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/ImpactRVRepair"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted/20 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-secondary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} IMPACT RV Repair. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm text-center sm:text-right">
              Mobile RV repair in{' '}
              {serviceAreas.map((area, index) => (
                <span key={area.slug}>
                  {index > 0 && ' · '}
                  <Link
                    href={`/service-area/${area.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {area.city}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
