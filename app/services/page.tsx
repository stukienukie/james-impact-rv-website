import type { Metadata } from 'next'
import {
  Wrench,
  Zap,
  Droplets,
  Thermometer,
  Cog,
  Shield,
  ClipboardCheck,
  Sun,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { AnimateIn, StaggerGroup, StaggerItem } from '@/components/animate-in'

export const metadata: Metadata = {
  title: 'RV Repair Services - Electrical, Plumbing, A/C & More | Impact RV Repair',
  description:
    'Mobile RV repair services near Kyle, TX - electrical, plumbing, A/C, roofs, appliances, custom installs, and more. We come to you. Call 512-968-5258.',
  other: {
    'geo.placename': 'Kyle, TX',
    'geo.region': 'US-TX',
  },
}

const services = [
  {
    icon: <Wrench className="h-7 w-7 text-primary" />,
    title: 'General Repairs',
    description:
      'Diagnostics and repair for any system on any RV, any brand. From minor fixes to major overhauls, we handle it all on-site.',
  },
  {
    icon: <Zap className="h-7 w-7 text-primary" />,
    title: 'Electrical Systems',
    description:
      '12V/120V troubleshooting, converters, inverters, batteries, solar, shore power connections and complete rewiring.',
  },
  {
    icon: <Droplets className="h-7 w-7 text-primary" />,
    title: 'Plumbing & Water',
    description:
      'Fresh water, gray/black tanks, water heaters, pumps, leak detection, pipe repair, and winterization services.',
  },
  {
    icon: <Thermometer className="h-7 w-7 text-primary" />,
    title: 'A/C, Heat & Refrigeration',
    description:
      'Rooftop A/C units, furnaces, refrigerators, and complete HVAC system swaps and maintenance.',
  },
  {
    icon: <Cog className="h-7 w-7 text-primary" />,
    title: 'Appliance Service',
    description:
      'Awnings, slide-outs, leveling jacks, generators, and OEM replacements for all major RV appliances.',
  },
  {
    icon: <Shield className="h-7 w-7 text-primary" />,
    title: 'Roof & Seal Inspection',
    description:
      'Roof recoats, sealant maintenance, leak prevention, and complete roof inspections to protect your investment.',
  },
  {
    icon: <ClipboardCheck className="h-7 w-7 text-primary" />,
    title: 'Preventive Maintenance',
    description:
      'Pre-trip and seasonal service packages to keep your RV road-ready and prevent costly breakdowns.',
  },
  {
    icon: <Sun className="h-7 w-7 text-primary" />,
    title: 'Custom Installations',
    description:
      'Solar systems, lithium battery banks, backup cameras, satellite dishes, and audio upgrades.',
  },
]

export default function ServicesPage() {
  return (
    <>
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
              Looking for RV repair near me in Central Texas? One call covers it all - from
              quick fixes to full custom builds. RV maintenance Central Texas families count on,
              delivered to your door.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
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
