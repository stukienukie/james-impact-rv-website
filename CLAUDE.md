# IMPACT RV Repair — Website

## Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS + shadcn/ui
- Email: Resend (API key in .env.local as RESEND_API_KEY)
- Deployed via: Cloudflare Workers / Pages

## Client
- James Langston — solo RV technician
- Phone: 512-968-5258
- Email: james@impactrvrepair.com
- Base: Kyle, TX | Service radius: 50 miles

## Pages
- / → Home
- /services → Full services list
- /gallery → Photo gallery (placeholders until client sends photos)
- /service-area → Cities served
- /faq → Accordion FAQ
- /contact → Contact form + API route

## Rules
- Do not fabricate certifications, warranty work, or team size claims
- All "years of experience" = 5 years
- Primary city = Kyle, TX (not Austin)
- Lead CTA is always phone call or contact form
- No emojis anywhere — use lucide-react icons
- Target keyword: "rv repair near me" and local city variants

## Environment Variables
- RESEND_API_KEY — required for contact form email delivery

## What NOT to Change
- Overall visual design, colors, and typography (client approved the style)
- The "How It Works" 4-step section on the Home page
- Existing placeholder testimonials
- Social links (Facebook + Instagram)
- Nav and Footer structure
