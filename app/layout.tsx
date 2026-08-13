import type { Metadata, Viewport } from 'next'
import { DM_Sans, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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
  metadataBase: new URL('https://www.impactrvrepair.com'),
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
  verification: {
    google: 'uOhpKKgyNORsYjHIBVbRr9TgCu7_3_IWmN8DUeBp5yo',
  },
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
        <Script
          src="https://plausible.io/js/pa-_wuKhHWv8bbwfDWufHyWk.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>

        {/* GoHighLevel chat widget — renders only once the widget ID is set in env.
            Paste the ID from GHL → Sites → Chat Widget into NEXT_PUBLIC_GHL_WIDGET_ID. */}
        {process.env.NEXT_PUBLIC_GHL_WIDGET_ID && (
          <Script
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id={process.env.NEXT_PUBLIC_GHL_WIDGET_ID}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  )
}
