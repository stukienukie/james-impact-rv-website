import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, ArrowRight, ArrowLeft, CheckCircle2, MapPin } from 'lucide-react'
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
import { getService, services } from '@/lib/services'
import { locations } from '@/lib/locations'
import {
  BUSINESS,
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  providerRef,
} from '@/lib/business'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
    other: {
      'geo.placename': 'Kyle, TX',
      'geo.region': 'US-TX',
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      url: `${SITE_URL}/services/${service.slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) notFound()

  const Icon = service.icon
  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: providerRef,
    areaServed: locations.map((location) => ({
      '@type': 'City',
      name: location.city,
      containedInPlace: { '@type': 'State', name: 'Texas' },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} — what the service covers`,
      itemListElement: service.includes.map((item) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item.title },
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
          __html: JSON.stringify(faqJsonLd(service.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: service.name, path: `/services/${service.slug}` },
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
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-primary">{service.name}</span>
            </nav>

            <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="h-7 w-7 text-primary" />
            </div>

            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground uppercase tracking-tight text-balance">
              {service.h1}{' '}
              <span className="text-primary">in Kyle, TX &amp; Central Texas</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {service.intro}
            </p>

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

        {/* Symptoms */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-6">
              {service.symptomsHeading}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {service.symptoms.map((symptom) => (
                <li key={symptom} className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    {symptom}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-8">
              {service.includesHeading}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.includes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold text-card-foreground uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-form body */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {service.body.map((block) => (
              <div key={block.heading}>
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-4">
                  {block.heading}
                </h2>
                {block.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-muted-foreground leading-relaxed ${index > 0 ? 'mt-4' : ''}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {/* How it works here */}
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold uppercase tracking-tight text-foreground mb-3">
                How the visit works
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Call or send a message describing the problem and where the RV is
                parked. You hear back instantly, and most jobs are booked within 24
                hours. James arrives with a fully stocked mobile shop, diagnoses the
                problem in front of you, and gives you upfront pricing before any
                work begins — in your driveway, at your storage lot, or at your
                campsite anywhere within {BUSINESS.radiusMiles} miles of{' '}
                {BUSINESS.baseCity}.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-4">
              {service.name} — common questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
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

        {/* Where we do this work */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-2">
              Where we handle {service.name.toLowerCase()}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              On-site service anywhere within {BUSINESS.radiusMiles} miles of{' '}
              {BUSINESS.baseCity}, TX.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
        </section>

        {/* Related services */}
        <section className="pb-16 lg:pb-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-border pt-8">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                Related Services
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                      <span className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold uppercase tracking-tight">
                        {item.name}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.cardDescription}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All services
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
              Need {service.name.toLowerCase()}? Just call.
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Describe the issue and James will help diagnose the problem and provide
              upfront pricing before any work begins.
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
