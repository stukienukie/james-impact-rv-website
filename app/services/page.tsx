import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { AnimateIn, StaggerGroup, StaggerItem } from '@/components/animate-in'
import { services } from '@/lib/services'
import { locations } from '@/lib/locations'
import { SITE_URL, breadcrumbJsonLd } from '@/lib/business'

export const metadata: Metadata = {
  title: 'Mobile RV Repair Services Kyle TX — AC, Roof, Electrical & More | Impact RV Repair',
  description:
    'Mobile RV repair services in Kyle TX and Hays County — AC repair, roof repair, electrical, plumbing, slide-outs, and more. We come to you anywhere in Central Texas. Call 512-968-5258.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  other: {
    'geo.placename': 'Kyle, TX',
    'geo.region': 'US-TX',
  },
}

// ItemList of every service page so the hub tells search engines what sits
// beneath it. Keep in sync with lib/services.ts by construction, not by hand.
const serviceListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mobile RV Repair Services — Kyle, TX',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.name,
    url: `${SITE_URL}/services/${service.slug}`,
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
            ])
          ),
        }}
      />
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-secondary noise-overlay">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground uppercase tracking-tight text-balance">
              Everything your RV needs,{' '}
              <span className="text-primary">at your location.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Mobile RV repair serving Kyle TX, Hays County, and all of Central Texas. One call covers it all — from AC repair and roof repair to electrical, plumbing, and full custom builds. We come to your driveway, campground, or storage lot.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <StaggerItem key={service.slug}>
                    <ServiceCard
                      icon={<Icon className="h-7 w-7 text-primary" />}
                      title={service.name}
                      description={service.cardDescription}
                      href={`/services/${service.slug}`}
                    />
                  </StaggerItem>
                )
              })}
            </StaggerGroup>
          </div>
        </section>

        {/* Cities — internal links to the location pages */}
        <section className="pb-20 lg:pb-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-border pt-10">
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-2">
                Every service, at your location
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                On-site anywhere within 50 miles of Kyle, TX. Pick your city for
                local detail.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {locations.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/service-area/${location.slug}`}
                      className="group flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                        {location.city}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
          <AnimateIn className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Not sure what you need? Just call.
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Describe the issue, and James will help diagnose the problem and provide upfront
              pricing before any work begins.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-primary font-semibold text-base shadow-lg active:scale-[0.98] transition-all"
              >
                <a href="tel:512-968-5258" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 512-968-5258
                </a>
              </Button>
            </div>
          </AnimateIn>
        </section>
      </main>

      <Footer />
    </>
  )
}
