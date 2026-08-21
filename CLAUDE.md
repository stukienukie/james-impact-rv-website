# IMPACT RV Repair — Website

## Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS + shadcn/ui
- Email: Resend (API key in .env.local as RESEND_API_KEY)
- Deployed via: Vercel (project: impact-rv-repair-website)

## Client
- James — solo RV technician
- Phone: 512-968-5258
- Email: james@impactrvrepair.com
- Base: Kyle, TX | Service radius: 50 miles

## Pages
- / → Home. Carries the canonical business entity JSON-LD at
  `https://impactrvrepair.com/#business` (see lib/business.ts). Service and
  location pages reference that @id — never redeclare the business elsewhere.
- /services → Services hub. Grid is generated from lib/services.ts; each card
  links to its detail page. Emits ItemList + BreadcrumbList JSON-LD.
- /services/[slug] → One page per service, 12 total, from lib/services.ts.
  Emits Service + FAQPage + BreadcrumbList JSON-LD. Links out to every
  location page.
- /gallery → Photo gallery — 11 real geotagged job photos in /public/gallery/ (AC, rot repair, water heater — before/during/after)
- /blog → Blog listing + articles. One post per month, newest first:
  - Aug 2026 → /blog/rv-electrical-problems-low-voltage-texas-summer/
  - Jul 2026 → /blog/rv-tire-blowout-prevention-texas-summer/
  - Jun 2026 → /blog/rv-roof-inspection-resealing-central-texas/
  - May 2026 → /blog/rv-ac-not-cooling-texas-heat/
  Each post carries BlogPosting + FAQPage JSON-LD. Dates must stay in sync
  across the post page, app/blog/page.tsx, and app/sitemap.ts.
- /service-area → Service area hub. CityGrid is generated from
  lib/locations.ts and links to each city page. Emits ItemList + BreadcrumbList.
- /service-area/[slug] → One page per city, 13 total, from lib/locations.ts.
  Slugs are `<city>-tx` (e.g. `buda-tx`). Emits Service + FAQPage +
  BreadcrumbList JSON-LD, plus geo meta tags. Links out to every service page.
- /faq → Accordion FAQ
- /contact → Contact form + API route (app/api/contact — Resend)
- /review → Review funnel (app/review/review-funnel.tsx + app/api/feedback route)

## SEO Data Layer
- lib/services.ts — service pages. lib/locations.ts — location pages.
  lib/business.ts — NAP constants and the shared JSON-LD builders.
- app/sitemap.ts imports the slug arrays from both data files, so adding an
  entry to either file adds its page, its sitemap URL, and its internal links
  everywhere at once. Do not hardcode these slugs anywhere else.
- Location copy names only real public geography (highways, rivers, lakes,
  public parks, recognized districts). Never claim a relationship with a
  private RV park, dealership, or storage business.
- No service × city combo pages (`/services/rv-ac-repair/buda-tx`). 12 × 13
  would be 156 near-identical pages and reads as doorway spam to Google. The
  service and location pages cross-link instead.

## Rules
- Do not fabricate certifications, warranty work, or team size claims
- All "years of experience" = 12 years (5 years solo + dealership background before that)
- Primary city = Kyle, TX (not Austin)
- Lead CTA is always phone call or contact form
- No emojis anywhere — use lucide-react icons
- Target keyword: "rv repair near me" and local city variants

## Environment Variables
- RESEND_API_KEY — required for contact form email delivery
- GOOGLE_AI_API_KEY — Google AI Studio key, used for blog image generation (in .env, gitignored)
- NEXT_PUBLIC_GHL_WIDGET_ID — GoHighLevel chat widget ID. Unset = widget not
  rendered, so the loader script never ships to visitors without one.
- GHL_WEBHOOK_URL — GoHighLevel inbound webhook. Contact form leads POST here
  before the Resend email. Unset = silent no-op. Payload always sends all six
  keys (full_name, phone, email, rv_type, message, source) — empty string when
  blank, never omitted, because GHL derives its field mapping from the payload.

## Monox Internal
- .monox/ folder contains SEO schemas and templates used by Monox employees
- .monox/seo-client-onboarding-form.md — client-facing onboarding form
- .monox/schemas/ — schema markup template, Month One summary schema, Monthly summary schema

## Response-Time Claims
Keep these consistent everywhere — home, contact, FAQ, quote form:
- Response: **instant** (handled by GHL automation)
- Booking: **most jobs booked within 24 hours**
- Leads go into the CRM — "no customer gets forgotten"
Do not reintroduce the old "24-48 hours" wording.

## Nav
Services and Service Area are mega-menu dropdowns generated from
lib/services.ts and lib/locations.ts — desktop panel below the header bar,
collapsible submenus on mobile. The parent labels stay clickable and still go
to the hub pages. Adding a service or location adds its menu entry
automatically; do not hardcode menu items.

## What NOT to Change
- Overall visual design, colors, and typography (client approved the style)
- The "How It Works" 4-step structure on the Home page (step 2 copy was
  updated 2026-07-28 to align response-time claims — structure stays)
- Existing placeholder testimonials
- Social links (Facebook + Instagram)
- Footer structure (nav now carries the services/locations dropdowns)
