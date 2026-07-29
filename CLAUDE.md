# IMPACT RV Repair — Website

## Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS + shadcn/ui
- Email: Resend (API key in .env.local as RESEND_API_KEY)
- Deployed via: Vercel (project: impact-rv-repair-website)

## Client
- James Langston — solo RV technician
- Phone: 512-968-5258
- Email: james@impactrvrepair.com
- Base: Kyle, TX | Service radius: 50 miles

## Pages
- / → Home
- /services → Full services list
- /gallery → Photo gallery — 11 real geotagged job photos in /public/gallery/ (AC, rot repair, water heater — before/during/after)
- /blog → Blog listing + articles (first article: /blog/rv-ac-not-cooling-texas-heat/)
- /service-area → Cities served
- /faq → Accordion FAQ
- /contact → Contact form + API route (app/api/contact — Resend)
- /review → Review funnel (app/review/review-funnel.tsx + app/api/feedback route)

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

## What NOT to Change
- Overall visual design, colors, and typography (client approved the style)
- The "How It Works" 4-step structure on the Home page (step 2 copy was
  updated 2026-07-28 to align response-time claims — structure stays)
- Existing placeholder testimonials
- Social links (Facebook + Instagram)
- Nav and Footer structure
