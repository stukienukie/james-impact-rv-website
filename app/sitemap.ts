import type { MetadataRoute } from 'next'
import { serviceSlugs } from '@/lib/services'
import { locationSlugs } from '@/lib/locations'

const base = 'https://impactrvrepair.com'

// Blog posts carry their real publish date so search engines don't see every
// URL claiming it changed today. Keep in sync with app/blog/page.tsx.
const posts = [
  { slug: 'rv-electrical-problems-low-voltage-texas-summer', published: '2026-08-11' },
  { slug: 'rv-tire-blowout-prevention-texas-summer', published: '2026-07-14' },
  { slug: 'rv-roof-inspection-resealing-central-texas', published: '2026-06-16' },
  { slug: 'rv-ac-not-cooling-texas-heat', published: '2026-05-29' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    // Service pages sit just under the hub — these are the primary commercial
    // landing pages, so they outrank the supporting pages below.
    ...serviceSlugs.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${base}/service-area`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...locationSlugs.map((slug) => ({
      url: `${base}/service-area/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.published),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
