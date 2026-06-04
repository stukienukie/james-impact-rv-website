# Monox.ai — Schema Markup Universal Template

Use this for every local service business website build.
Schema is added as a `<script type="application/ld+json">` tag in each page's JSX, before `<Nav />`.

---

## 1. Homepage — LocalBusiness Schema

Use `AutoRepair` for mechanics, RV repair, auto services.
Use `HomeAndConstructionBusiness` for contractors, plumbers, roofers, HVAC.
Use `LocalBusiness` for anything that doesn't fit a specific type.

```tsx
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair', // ← change per niche (see types below)
  name: '[Business Name]',
  description: '[Service description with primary city and service type]',
  telephone: '+1[PhoneNumberNoSpaces]',
  email: '[email]',
  url: 'https://[domain].com',
  image: 'https://[domain].com/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Street Address]',
    addressLocality: '[City]',
    addressRegion: 'TX',
    postalCode: '[ZIP]',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: [lat],
    longitude: [lon],
  },
  areaServed: [
    { '@type': 'City', name: '[City 1]', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: '[City 2]', containedInPlace: { '@type': 'State', name: 'Texas' } },
    // add all cities...
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '[Business Type] Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '[Service 1]' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '[Service 2]' } },
      // add all services...
    ],
  },
  founder: {
    '@type': 'Person',
    name: '[Owner Name]',
    jobTitle: '[Owner Title]',
  },
  priceRange: '$$',
  openingHours: 'Mo-Sa 08:00-18:00',
  sameAs: [
    '[Facebook URL]',
    '[Instagram URL]',
  ],
}
```

**Inject in page JSX (before Nav):**
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
/>
```

---

## 2. FAQ Page — FAQPage Schema

Dynamic — pulls from faqItems array automatically.

```tsx
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
```

---

## 3. Blog Article — BlogPosting Schema

Add to every blog article page. Update fields per article.

```tsx
const blogPostingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '[Full Article Title]',
  description: '[Meta description]',
  image: 'https://[domain].com/blog/[image-filename].jpg',
  datePublished: '[YYYY-MM-DD]',
  dateModified: '[YYYY-MM-DD]',
  author: {
    '@type': 'Person',
    name: '[Owner/Author Name]',
  },
  publisher: {
    '@type': 'Organization',
    name: '[Business Name]',
    url: 'https://[domain].com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://[domain].com/blog/[article-slug]',
  },
  keywords: '[keyword 1], [keyword 2], [keyword 3]',
  articleSection: '[Service Category]',
}
```

---

## Schema Type Reference By Niche

| Niche | Schema Type |
|---|---|
| RV repair, auto repair, mechanic | `AutoRepair` |
| Plumber, HVAC, electrician, roofer | `HomeAndConstructionBusiness` |
| Landscaping, lawn care | `LandscapingService` |
| Cleaning service | `LocalBusiness` |
| Dentist | `Dentist` |
| Lawyer | `LegalService` |
| Restaurant | `Restaurant` |
| Gym / fitness | `SportsActivityLocation` |
| General service business | `LocalBusiness` |

---

## Checklist — Every New Website Build

- [ ] Homepage — LocalBusiness/AutoRepair schema with all cities and services
- [ ] FAQ page — FAQPage schema (dynamic, auto-generates from faqItems)
- [ ] First blog article — BlogPosting schema
- [ ] Every subsequent blog article — BlogPosting schema (copy/update template)
- [ ] Verify at search.google.com/test/rich-results
