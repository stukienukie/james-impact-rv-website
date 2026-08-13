import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, ArrowRight, ArrowLeft, MapPin, Navigation, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { AnimateIn } from '@/components/animate-in'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getLocation, locations } from '@/lib/locations'
import { services } from '@/lib/services'
import {
  BUSINESS,
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  providerRef,
} from '@/lib/business'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = getLocation(slug)

  if (!location) return {}

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: `${SITE_URL}/service-area/${location.slug}`,
    },
    other: {
      'geo.placename': `${location.city}, TX`,
      'geo.region': 'US-TX',
      'geo.position': `${location.lat};${location.lng}`,
      ICBM: `${location.lat}, ${location.lng}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: 'website',
      url: `${SITE_URL}/service-area/${location.slug}`,
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = getLocation(slug)

  if (!location) notFound()

  const isBase = location.distanceMiles === 0
  const nearby = location.nearby
    .map((nearbySlug) => getLocation(nearbySlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  const driveNote = isBase
    ? `${location.city} is home base — no drive time at all.`
    : `About ${location.distanceMiles} miles from home base in ${BUSINESS.baseCity}.`

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/service-area/${location.slug}#service`,
    name: `Mobile RV Repair in ${location.city}, TX`,
    serviceType: 'Mobile RV Repair',
    description: location.metaDescription,
    url: `${SITE_URL}/service-area/${location.slug}`,
    provider: providerRef,
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${location.county}, Texas`,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.lat,
        longitude: location.lng,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Mobile RV services offered in ${location.city}, TX`,
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${service.name} in ${location.city}, TX`,
          url: `${SITE_URL}/services/${service.slug}`,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(location.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Service Area', path: '/service-area' },
              { name: `${location.city}, TX`, path: `/service-area/${location.slug}` },
            ])
          ),
        }}
      />
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-secondary noise-overlay">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-6"
            >
              <Link href="/service-area" className="hover:text-primary transition-colors">
                Service Area
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-primary">{location.city}, TX</span>
            </nav>

            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground uppercase tracking-tight text-balance">
              Mobile RV Repair in{' '}
              <span className="text-primary">
                {location.city}, TX
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {location.intro}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Navigation className="h-4 w-4 text-primary" />
                {driveNote}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Mon–Sat, 8am–6pm
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="btn-red-gradient text-white font-semibold"
              >
                <a href={BUSINESS.phoneHref} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/60 text-white bg-transparent hover:bg-white/10 hover:border-white font-semibold"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Request a Visit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Local context + where we work */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-4">
                  RV service in {location.city} and {location.county}
                </h2>
                <div className="space-y-4">
                  {location.localContext.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold text-foreground uppercase tracking-tight mt-10 mb-4">
                  What {location.city} owners call about most
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {location.commonJobs.map((job) => (
                    <li key={job} className="flex gap-3 items-start">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {job}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:sticky lg:top-28 rounded-xl border border-border bg-muted/40 p-6">
                <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold text-foreground uppercase tracking-tight mb-4">
                  Where we work in {location.city}
                </h3>
                <ul className="space-y-3">
                  {location.whereWeWork.map((place) => (
                    <li key={place} className="flex gap-3 items-start">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {place}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Reach James directly at{' '}
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-primary hover:underline font-medium"
                    >
                      {BUSINESS.phone}
                    </a>{' '}
                    or{' '}
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {BUSINESS.email}
                    </a>
                    .
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Services in this city */}
        <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-2">
              Services available in {location.city}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every service is mobile — the shop comes to wherever your RV is parked.
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-4">
              RV repair in {location.city} — common questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {location.faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold text-foreground uppercase tracking-tight hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Nearby cities */}
        <section className="pb-16 lg:pb-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-border pt-8">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                Also serving nearby
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {nearby.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/service-area/${item.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold uppercase tracking-tight">
                        {item.city}, TX
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.cardDescription}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/service-area"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Full service area
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
          <AnimateIn className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              RV trouble in {location.city}?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              You hear back instantly, and most jobs are booked within 24 hours —
              with upfront pricing before any work begins.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-primary font-semibold text-base shadow-lg active:scale-[0.98] transition-all"
              >
                <a href={BUSINESS.phoneHref} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS.phone}
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
