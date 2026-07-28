import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'RV Repair Tips & Advice | Impact RV Repair Blog — Kyle, TX',
  description:
    'Mobile RV repair tips, troubleshooting guides, and local advice from Impact RV Repair in Kyle, TX. Serving Austin, San Marcos, New Braunfels, and Central Texas.',
  other: {
    'geo.placename': 'Kyle, TX',
    'geo.region': 'US-TX',
  },
}

const posts = [
  {
    slug: 'rv-roof-inspection-resealing-central-texas',
    title: 'RV Roof Inspection & Resealing Before Fall Camping Season in Central Texas',
    excerpt:
      'Texas sun breaks down roof sealant faster than the manual assumes. Here\'s how to inspect your roof properly, which sealant actually belongs where, and why doing it now beats paying for rot repair later.',
    image: '/blog/rv-roof-sealant-inspection.jpg',
    date: 'July 28, 2026',
    category: 'Roof & Sealants',
  },
  {
    slug: 'rv-ac-not-cooling-texas-heat',
    title: 'RV AC Not Cooling in the Texas Heat? Common Causes and Mobile Repair in the Austin Area',
    excerpt:
      'When temps climb past 100°F, your RV AC goes from comfort to survival. Here\'s what\'s likely going wrong and how to get it fixed fast — without hauling your rig to a shop.',
    image: '/blog/rv-ac-texas-heat.jpg',
    date: 'May 29, 2026',
    category: 'AC Repair',
  },
]

export default function BlogPage() {
  return (
    <>
      <Nav />

      <main>
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-secondary noise-overlay">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground uppercase tracking-tight">
              RV Repair <span className="text-primary">Tips & Advice.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Straight talk on common RV problems, what causes them, and when to call a pro.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-colors bg-card"
                >
                  <div className="relative aspect-[16/7] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 896px"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm">
                      Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
