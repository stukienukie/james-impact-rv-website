import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { CityGrid } from '@/components/city-grid'
import { ServiceAreaMap } from '@/components/service-area-map'
import { locations } from '@/lib/locations'
import { services } from '@/lib/services'
import { SITE_URL, breadcrumbJsonLd } from '@/lib/business'

export const metadata: Metadata = {
  title: 'Mobile RV Repair Service Area — Kyle TX & 50 Miles Around | Impact RV Repair',
  description:
    'Impact RV Repair serves Kyle, Buda, Austin, San Marcos, New Braunfels, Canyon Lake, Dripping Springs, Wimberley and the surrounding Central Texas region. Call 512-968-5258.',
  alternates: {
    canonical: `${SITE_URL}/service-area`,
  },
  other: {
    'geo.placename': 'Kyle, TX',
    'geo.region': 'US-TX',
  },
}

// ItemList of every location page so the hub tells search engines what sits
// beneath it. Built from lib/locations.ts so the two cannot drift apart.
const areaListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mobile RV Repair Service Area — 50 miles around Kyle, TX',
  itemListElement: locations.map((location, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: `Mobile RV Repair in ${location.city}, TX`,
    url: `${SITE_URL}/service-area/${location.slug}`,
  })),
}

export default function ServiceAreaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Service Area', path: '/service-area' },
            ])
          ),
        }}
      />
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-secondary noise-overlay">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground uppercase tracking-tight">
              Serving Kyle, TX and{' '}
              <span className="text-primary">50 miles around.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Based in Kyle — rolling out to the greater Austin metro and Hill Country.
            </p>
          </div>
        </section>

        {/* Service Area Content */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* City List */}
              <div>
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-6">
                  Cities We Serve
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Pick a city for local detail on where we work and what owners
                  there call about most.
                </p>
                <CityGrid />

                <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-foreground font-medium">
                    Don&apos;t see your town?{' '}
                    <a href="tel:512-968-5258" className="text-primary hover:underline">
                      Just call.
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We may still be able to reach you within our 50-mile service radius.
                  </p>
                </div>
              </div>

              {/* About the Coverage */}
              <div className="lg:sticky lg:top-28 space-y-6">
                <ServiceAreaMap />

                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    James is a mobile RV technician based in Kyle, Texas serving
                    customers across a 50-mile radius throughout Hays County and Central Texas.
                    Whether you need mobile RV repair in Buda TX, RV roof repair in San Marcos TX,
                    RV AC repair near New Braunfels, or a trusted RV technician anywhere in
                    the Austin area — James brings the tools and expertise directly to your location.
                  </p>
                  <p>
                    He services all RV types — Class A, B, and C motorhomes, travel trailers,
                    fifth wheels, and toy haulers. Common repairs include water leaks, roof
                    resealing, appliance repair, electrical systems, plumbing, and leveling
                    jacks. James can be reached at{' '}
                    <a href="tel:512-968-5258" className="text-primary hover:underline font-medium">
                      512-968-5258
                    </a>{' '}
                    or{' '}
                    <a
                      href="mailto:james@impactrvrepair.com"
                      className="text-primary hover:underline font-medium"
                    >
                      james@impactrvrepair.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services available everywhere in the radius */}
        <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-2">
              What we do, everywhere in the radius
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every service below is mobile — the shop comes to wherever your RV
              is parked.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold text-card-foreground uppercase tracking-tight transition-colors group-hover:text-primary">
                          {service.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {service.cardDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                All services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Ready for on-site service?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Call us today to schedule your mobile RV repair appointment.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-primary font-semibold text-base"
              >
                <a href="tel:512-968-5258" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 512-968-5258
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
