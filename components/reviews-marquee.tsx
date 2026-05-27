'use client'

import { useRef, useEffect } from 'react'
import { Star, ExternalLink } from 'lucide-react'

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Impact+RV+Repair+Reviews#lrd=0xaf94c15e2b16d41d:0x327626e732f50717,1,,,,'

const reviews = [
  {
    author: 'Kenneth Christie',
    rating: 5,
    text: 'Water started dripping into the motorhome through the ceiling. James discovered both air conditioners were not properly attached to the roof, reattached and properly sealed everything. A few nights later heavy rain blew through — no water came in. Very happy with the repairs.',
  },
  {
    author: 'Chris Koble',
    rating: 5,
    text: 'Had a great experience with James. Came out the same day I called and was kind enough to address two other issues I had with my RV. Solid guy and service.',
  },
  {
    author: 'Adriana Guerrero',
    rating: 5,
    text: 'Great work by James. He installed our new AC unit on our RV and made time to do it within the same day. He can fix anything. Will definitely be using him for all our RV repair needs.',
  },
  {
    author: 'Alex',
    rating: 5,
    text: 'James was extremely helpful! I am new to living in a 5th wheel and was nervous about hiring a professional but James took great care of me. Very friendly and even gave helpful advice to prevent future issues. If I ever have another problem, I know I can trust James!',
  },
  {
    author: 'Roland Bazan',
    rating: 5,
    text: 'My furnace on our RV stopped working and I called Impact RV Repair. James was very knowledgeable and fixed our furnace in the rain. He made time for us even when he was busy.',
  },
  {
    author: 'Kassidy Finch',
    rating: 5,
    text: 'Impact RV Repair did a great job on my travel trailer maintenance — fast, friendly, and reliable. I\'ll definitely use them again!',
  },
  {
    author: 'Rebel Rouser',
    rating: 5,
    text: 'James is awesome! He\'s friendly, knowledgeable, laid back, has all the tools he needs to get the job done. He stays very busy — that\'s a good sign.',
  },
  {
    author: 'Christopher Sanford',
    rating: 5,
    text: 'James did a great job diagnosing a leak under my RV and getting it fixed. He was thorough in explaining how to avoid future issues. 10/10 recommend.',
  },
  {
    author: 'Gina Laroche',
    rating: 5,
    text: 'James came out to help me with issues on my 2017 Casita Spirit Deluxe. I had just purchased it from a private seller who stated it was in excellent condition — it was not. James sorted everything out.',
  },
]

const doubled = [...reviews, ...reviews]

export function ReviewsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const rafRef = useRef<number>(0)
  const pausedRef = useRef(false)

  // Drag state
  const dragRef = useRef({ active: false, startX: 0, startPos: 0 })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    function getHalfWidth() {
      return track!.scrollWidth / 2
    }

    function tick() {
      if (!pausedRef.current) {
        posRef.current += 0.6
        if (posRef.current >= getHalfWidth()) {
          posRef.current = 0
        }
        track!.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  // Mouse drag handlers
  function onMouseDown(e: React.MouseEvent) {
    pausedRef.current = true
    dragRef.current = { active: true, startX: e.clientX, startPos: posRef.current }
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragRef.current.active) return
    const delta = dragRef.current.startX - e.clientX
    const half = trackRef.current ? trackRef.current.scrollWidth / 2 : 1
    let next = dragRef.current.startPos + delta
    if (next < 0) next = 0
    if (next >= half) next = half - 1
    posRef.current = next
    if (trackRef.current) trackRef.current.style.transform = `translateX(-${next}px)`
  }
  function onMouseUp() {
    dragRef.current.active = false
    pausedRef.current = false
  }

  // Touch handlers
  function onTouchStart(e: React.TouchEvent) {
    pausedRef.current = true
    dragRef.current = { active: true, startX: e.touches[0].clientX, startPos: posRef.current }
  }
  function onTouchMove(e: React.TouchEvent) {
    const delta = dragRef.current.startX - e.touches[0].clientX
    const half = trackRef.current ? trackRef.current.scrollWidth / 2 : 1
    let next = dragRef.current.startPos + delta
    if (next < 0) next = 0
    if (next >= half) next = half - 1
    posRef.current = next
    if (trackRef.current) trackRef.current.style.transform = `translateX(-${next}px)`
  }
  function onTouchEnd() {
    dragRef.current.active = false
    pausedRef.current = false
  }

  return (
    <section className="py-16 lg:py-24 bg-muted overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-5 w-5 text-accent fill-accent" />
            ))}
          </div>
          <span className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold text-foreground">
            4.8
          </span>
          <span className="text-muted-foreground text-sm">· Google Reviews</span>
        </div>
        <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight">
          What customers are saying.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">Drag or swipe to browse</p>
      </div>

      {/* Edge fades */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        }}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: '20px', width: 'max-content', cursor: 'grab', userSelect: 'none' }}
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false; dragRef.current.active = false }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {doubled.map((review, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3 shadow-sm"
              style={{ width: '280px', flexShrink: 0 }}
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-card-foreground text-sm leading-relaxed flex-1 pointer-events-none">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs font-semibold text-muted-foreground pt-2 border-t border-border pointer-events-none">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          See all reviews on Google
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}
