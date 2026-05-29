import type { Metadata } from 'next'
import Image from 'next/image'
import { Instagram, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Our Work — RV Repair Photos | Impact RV Repair Kyle TX',
  description:
    'See real repairs from Impact RV Repair — serving Kyle, Buda, Austin, San Marcos, and Central Texas. Mobile RV service delivered with integrity.',
  other: {
    'geo.placename': 'Kyle, TX',
    'geo.region': 'US-TX',
  },
}

const jobs = [
  {
    title: 'Rot & Water Damage Repair',
    description: 'Full sidewall teardown on a Starcraft travel trailer — rotted wood and soaked insulation replaced from the ground up.',
    photos: [
      { src: '/gallery/rot-before.jpg', label: 'Before', alt: 'Severe rot and water damage inside RV sidewall' },
      { src: '/gallery/rot-during.jpg', label: 'During', alt: 'RV sidewall opened showing damaged insulation being removed' },
      { src: '/gallery/rot-after.jpg', label: 'After', alt: 'Starcraft travel trailer fully repaired' },
    ],
  },
  {
    title: 'AC Unit Replacement',
    description: 'Rooftop AC unit replaced after coils were found heavily clogged with mold and debris — no more hot nights.',
    photos: [
      { src: '/gallery/ac-before-mold.jpg', label: 'Before', alt: 'Severely moldy AC evaporator coil' },
      { src: '/gallery/ac-before-dirty.jpg', label: 'Before', alt: 'Dirty AC fan and condenser internals' },
      { src: '/gallery/ac-after.jpg', label: 'After', alt: 'New AC unit installed on RV roof' },
    ],
  },
  {
    title: 'Water Heater Repair',
    description: 'Fifth wheel water heater diagnosed, cleaned, and restored — corroded fittings replaced and the unit brought back to full operation.',
    photos: [
      { src: '/gallery/water-heater-before.jpg', label: 'Before', alt: 'Water heater compartment open showing damage and debris' },
      { src: '/gallery/water-heater-during.jpg', label: 'During', alt: 'Water heater internals being serviced' },
      { src: '/gallery/water-heater-during-2.jpg', label: 'During', alt: 'Fifth wheel water heater panel open showing clean internals' },
      { src: '/gallery/water-heater-after.jpg', label: 'After', alt: 'Fifth wheel exterior with water heater panel closed after repair' },
    ],
  },
]

const labelColors: Record<string, string> = {
  Before: 'bg-red-600',
  During: 'bg-amber-500',
  After: 'bg-green-600',
}

export default function GalleryPage() {
  return (
    <>
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-secondary noise-overlay">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground uppercase tracking-tight">
              Our <span className="text-primary">Work.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real repairs, real results — from Kyle to Austin and everywhere in between.
            </p>
          </div>
        </section>

        {/* Jobs */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {jobs.map((job) => (
              <div key={job.title}>
                <div className="mb-6">
                  <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight">
                    {job.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground max-w-2xl">{job.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {job.photos.map((photo) => (
                    <div key={photo.src} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border group">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className={`absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold text-white uppercase tracking-wide ${labelColors[photo.label]}`}>
                        {photo.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Class A general shot */}
            <div>
              <div className="mb-6">
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight">
                  On-Site Service
                </h2>
                <p className="mt-2 text-muted-foreground max-w-2xl">James on location working a Class A motorhome — fully equipped, no shop drop-off required.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border group">
                  <Image
                    src="/gallery/class-a-repair.jpg"
                    alt="James working on a Class A motorhome on site"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              More photos coming soon — follow us on Instagram for updates.
            </p>
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="border-border hover:border-primary hover:bg-primary/5 font-semibold"
              >
                <a
                  href="https://www.instagram.com/ImpactRVRepair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  Follow on Instagram
                  <ArrowRight className="h-4 w-4" />
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
