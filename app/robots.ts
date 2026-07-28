import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The review funnel is a link destination for existing customers, not a
      // search landing page — keep it out of the index.
      disallow: ['/review'],
    },
    sitemap: 'https://impactrvrepair.com/sitemap.xml',
  }
}
