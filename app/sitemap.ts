import type { MetadataRoute } from 'next'

const base = 'https://impactrvrepair.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/service-area`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
