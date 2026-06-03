import type { Metadata } from 'next'
import { Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { CityGrid } from '@/components/city-grid'

export const metadata: Metadata = {
  title: 'Mobile RV Repair Service Area — Kyle TX & 50 Miles Around | Impact RV Repair',
  description:
    'Impact RV Repair serves Kyle, Buda, Austin, Round Rock, San Marcos, Georgetown, and the surrounding Central Texas region. Call 512-968-5258.',
  other: {
    'geo.placename': 'Kyle, TX',
    'geo.region': 'US-TX',
  },
}


export default function ServiceAreaPage() {
  return (
    <>
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
                <div className="aspect-[4/3] bg-muted rounded-lg border border-border flex flex-col items-center justify-center gap-4">
                  <MapPin className="h-16 w-16 text-muted-foreground/50" />
                  <span className="text-muted-foreground">service area map placeholder</span>
                </div>

                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    James Langston is a mobile RV technician based in Kyle, Texas serving
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
