import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Wrench,
  Zap,
  Droplets,
  Thermometer,
  ArrowRight,
  MessageSquare,
  Calendar,
  Truck,
  CheckCircle,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { HeroContent } from '@/components/hero-content'
import { ServiceCard } from '@/components/service-card'
import { AnimateIn, StaggerGroup, StaggerItem } from '@/components/animate-in'
import { ReviewsMarquee } from '@/components/reviews-marquee'

export const metadata: Metadata = {
  title: 'Mobile RV Repair Near Kyle, TX | Impact RV Repair | 512-968-5258',
  description:
    'Impact RV Repair provides mobile RV repair, maintenance, and custom installations 50 miles around Kyle, TX. On-site service for any RV — no dealership hassle. Call 512-968-5258.',
  other: {
    'geo.placename': 'Kyle, TX',
    'geo.region': 'US-TX',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'IMPACT RV Repair',
  description:
    'Mobile RV repair, maintenance, and custom installations serving Kyle, TX and surrounding areas within 50 miles.',
  telephone: '+15129685258',
  email: 'james@impactrvrepair.com',
  url: 'https://impactrvrepair.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kyle',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 29.9891,
      longitude: -97.8772,
    },
    geoRadius: '80000',
  },
  priceRange: '$$',
  openingHours: 'Mo-Sa 08:00-18:00',
  sameAs: [
    'https://www.facebook.com/103357905254624',
    'https://www.instagram.com/ImpactRVRepair',
  ],
}

const servicesPreview = [
  {
    icon: <Wrench className="h-7 w-7 text-primary" />,
    title: 'General Repairs',
    description: 'Diagnostics and repair for any system on any RV',
  },
  {
    icon: <Zap className="h-7 w-7 text-primary" />,
    title: 'Electrical Systems',
    description: '12V/120V troubleshooting, converters, inverters, solar',
  },
  {
    icon: <Droplets className="h-7 w-7 text-primary" />,
    title: 'Plumbing & Water',
    description: 'Fresh water, tanks, water heaters, pumps, leaks',
  },
  {
    icon: <Thermometer className="h-7 w-7 text-primary" />,
    title: 'A/C, Heat & Refrigeration',
    description: 'Rooftop A/C, furnaces, refrigerators, HVAC swaps',
  },
]

const howItWorks = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Call or Message',
    description: "Tell us what's going on and where you're parked",
  },
  {
    step: 2,
    icon: Calendar,
    title: 'Schedule On-Site',
    description: 'Most jobs within 24-48 hours, upfront pricing',
  },
  {
    step: 3,
    icon: Truck,
    title: 'We Come to You',
    description: 'Fully stocked mobile shop arrives ready to fix',
  },
  {
    step: 4,
    icon: CheckCircle2,
    title: 'Back on the Road',
    description: 'Quality work, clean job site, follow-up included',
  },
]


const bulletPoints = [
  'Accounts with major parts suppliers',
  'Cash & check accepted',
  'Fast sourcing',
  'No dealership runaround',
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Nav />

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[100dvh] flex items-center bg-secondary">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-rv.jpg"
              alt="Class A motorhome serviced at sunset in the Texas Hill Country"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Richer gradient overlay — darker bottom for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/75 to-secondary/95" />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,15,15,0.5)_100%)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-44">
            <HeroContent />
          </div>
        </section>

        {/* ── About ── */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimateIn direction="left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
                  <Image
                    src="/images/technician.jpg"
                    alt="Impact RV Repair technician working on an RV electrical panel"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle red accent bar on image */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
                </div>
              </AnimateIn>

              <AnimateIn direction="right" delay={0.1}>
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight text-balance">
                  Making a positive{' '}
                  <span className="text-primary">IMPACT</span> on your RV experience.
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    James Langston, owner of IMPACT RV Repair, is a mobile RV technician
                    based in Kyle, Texas. With 12 years of hands-on experience — including dealership work — he comes
                    to your campsite, driveway, or storage lot — no hauling your rig to
                    a dealership.
                  </p>
                  <p>
                    He works with travelers passing through Central Texas and local RV owners
                    alike. When your A/C quits in the summer heat, you spring a water leak, or
                    you lose power mid-trip, James picks up the phone and gets there fast.
                    Emergency calls are always prioritized.
                  </p>
                  <p>
                    He services all RV types — Class A, B, and C motorhomes, travel trailers,
                    fifth wheels, and toy haulers. Reach him at{' '}
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

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bulletPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2.5">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground font-medium text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Services Preview ── */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight text-balance">
                On-site service for every system on your RV.
              </h2>
            </AnimateIn>

            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {servicesPreview.map((service) => (
                <StaggerItem key={service.title}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>

            <AnimateIn delay={0.2} className="mt-10 text-center">
              <Button
                asChild
                className="btn-red-gradient text-white font-semibold active:scale-[0.98]"
              >
                <Link href="/services" className="flex items-center gap-2">
                  See All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </AnimateIn>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight text-balance">
                Simple, transparent, built around your schedule.
              </h2>
            </AnimateIn>

            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <StaggerItem key={step.step}>
                  <div className="relative text-center">
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-border to-transparent" />
                    )}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold shadow-[0_4px_20px_rgba(177,52,42,0.35)]">
                        {step.step}
                      </div>
                      <div className="mt-4">
                        <step.icon className="h-6 w-6 text-primary mx-auto" />
                      </div>
                      <h3 className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-xl font-semibold text-foreground uppercase">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* ── Reviews Marquee ── */}
        <ReviewsMarquee />

        {/* ── CTA Banner ── */}
        <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
          {/* Ambient light effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.2)_0%,transparent_60%)] pointer-events-none" />

          <AnimateIn className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight text-balance">
              Ready to roll? Let&apos;s fix your RV.
            </h2>
            <p className="mt-4 text-white/70 max-w-md mx-auto">
              James responds within 24 hours. No dealership runaround, no hassle.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/70 text-white bg-transparent hover:bg-white/10 hover:border-white font-semibold text-base active:scale-[0.98] transition-all"
              >
                <Link href="/contact">Request a Visit</Link>
              </Button>
            </div>
          </AnimateIn>
        </section>
      </main>

      <Footer />
    </>
  )
}
