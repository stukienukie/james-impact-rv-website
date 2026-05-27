import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ReviewFunnel } from './review-funnel'

export const metadata: Metadata = {
  title: 'Rate Your Experience — Impact RV Repair',
  description: 'Share your experience with Impact RV Repair. Five-star service, every visit.',
  robots: { index: false, follow: false },
}

export default function ReviewPage() {
  return (
    <>
      <Nav />
      <main className="bg-background min-h-screen pt-16">
        <ReviewFunnel />
      </main>
      <Footer />
    </>
  )
}
