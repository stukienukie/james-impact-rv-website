import type { Metadata, Viewport } from 'next'
import { DM_Sans, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IMPACT RV Repair | Mobile RV Repair in Kyle, TX',
  description:
    'Mobile RV repair delivered with integrity. We come to your driveway, campground, or storage lot. Serving Kyle, TX and 50 miles around. Call 512-968-5258.',
  keywords: [
    'RV repair',
    'mobile RV repair',
    'Kyle TX',
    'Austin RV repair',
    'RV service',
    'motorhome repair',
    'travel trailer repair',
  ],
  authors: [{ name: 'IMPACT RV Repair' }],
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon-32.png',
  },
  openGraph: {
    title: 'IMPACT RV Repair | Mobile RV Repair in Kyle, TX',
    description:
      'Mobile RV repair delivered with integrity. We come to your driveway, campground, or storage lot.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/impact-rv-logo.png', width: 1024, height: 1024, alt: 'IMPACT RV Repair' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#d42b1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${barlowCondensed.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
