import type { Metadata } from 'next'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Request a Visit — Contact Impact RV Repair | Kyle TX',
  description:
    'Book on-site RV repair near Kyle, TX. Fill out the form or call 512-968-5258. James Langston responds within 24 hours.',
  other: {
    'geo.placename': 'Kyle, TX',
    'geo.region': 'US-TX',
  },
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '512-968-5258',
    href: 'tel:512-968-5258',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'james@impactrvrepair.com',
    href: 'mailto:james@impactrvrepair.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Sat, 8am-6pm',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Serving 50 miles around Kyle, TX',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-secondary noise-overlay">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground uppercase tracking-tight">
              Request a <span className="text-primary">Visit.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tell us what&apos;s going on and where you&apos;re parked. James will be in
              touch within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Details */}
              <div>
                <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
