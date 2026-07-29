import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'RV Repair FAQ — Impact RV Repair Kyle TX',
  description:
    'Common questions about mobile RV repair near Kyle, TX — response times, service area, payment, and more. Impact RV Repair. 512-968-5258.',
  other: {
    'geo.placename': 'Kyle, TX',
    'geo.region': 'US-TX',
  },
}

const faqItems = [
  {
    question: 'Do you come to my location?',
    answer:
      'Yes, Impact RV Repair is fully mobile. We bring the shop to your driveway, campground, or storage lot anywhere within 50 miles of Kyle, TX.',
  },
  {
    question: 'What types of RVs do you service?',
    answer:
      'Every class and brand — Class A, B, and C motorhomes, travel trailers, fifth wheels, toy haulers, and pop-ups.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Kyle, Buda, Austin, Round Rock, Cedar Park, Pflugerville, Georgetown, Leander, San Marcos, Lakeway, Bastrop, and the surrounding Central Texas region within 50 miles.',
  },
  {
    question: 'How quickly can you respond?',
    answer:
      'You hear back from us instantly, and most appointments are scheduled within 24 hours. Emergency calls — A/C failures, water leaks, no power — are always moved to the front of the line. If you are traveling and stranded, call immediately and James will do everything he can to get to you the same day.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer:
      'Cash and check are preferred. Pricing is provided up front before work begins — no surprises.',
  },
  {
    question: 'Do you accept service contracts or insurance claims?',
    answer:
      'Yes. James works with service contracts and can assist with insurance claims for covered repairs. Contact us to discuss your specific coverage before scheduling.',
  },
  {
    question: 'Do you offer upfront pricing?',
    answer:
      "Yes, always. You'll know the cost before we start. No surprises, no hidden fees.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-secondary noise-overlay">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground uppercase tracking-tight">
              Answers <span className="text-primary">before you call.</span>
            </h1>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold text-foreground uppercase tracking-tight hover:text-primary hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Additional Help */}
            <div className="mt-12 p-6 rounded-lg bg-muted border border-border text-center">
              <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-semibold text-foreground uppercase">
                Still have questions?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Give us a call at{' '}
                <a
                  href="tel:512-968-5258"
                  className="text-primary hover:underline font-medium"
                >
                  512-968-5258
                </a>{' '}
                or email{' '}
                <a
                  href="mailto:james@impactrvrepair.com"
                  className="text-primary hover:underline font-medium"
                >
                  james@impactrvrepair.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
