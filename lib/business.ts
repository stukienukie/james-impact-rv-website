/**
 * Shared NAP (name, address, phone) and JSON-LD building blocks.
 *
 * The home page carries the canonical AutoRepair entity at
 * https://www.impactrvrepair.com/#business. Service and location pages reference
 * that @id rather than redeclaring the business, so search engines see one
 * business with many pages instead of many competing business records.
 */
export const SITE_URL = 'https://www.impactrvrepair.com'
export const BUSINESS_ID = `${SITE_URL}/#business`

export const BUSINESS = {
  name: 'Impact RV Repair',
  phone: '512-968-5258',
  phoneHref: 'tel:512-968-5258',
  telephone: '+15129685258',
  email: 'james@impactrvrepair.com',
  owner: 'James',
  baseCity: 'Kyle',
  radiusMiles: 50,
  hours: 'Mo-Sa 08:00-18:00',
} as const

/** Reference to the canonical business entity declared on the home page. */
export const providerRef = {
  '@type': 'AutoRepair',
  '@id': BUSINESS_ID,
  name: BUSINESS.name,
  telephone: BUSINESS.telephone,
  url: SITE_URL,
}

export function breadcrumbJsonLd(
  trail: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  }
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
