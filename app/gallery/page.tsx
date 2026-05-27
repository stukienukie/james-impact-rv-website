import type { Metadata } from 'next'
import { Wrench, Instagram, ArrowRight } from 'lucide-react'
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

const galleryItems = Array(9).fill(null)

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

        {/* Photo Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* TODO: Replace with client photos — James will provide from his phone */}
              {galleryItems.map((_, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] bg-muted rounded-lg border border-border flex flex-col items-center justify-center gap-4 hover:border-primary/30 transition-colors"
                >
                  <Wrench className="h-12 w-12 text-muted-foreground/50" />
                  <span className="text-muted-foreground text-sm">Photo coming soon</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                More photos coming soon — follow us on Instagram.
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
