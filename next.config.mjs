/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Retired 2026-08-20: these cities are no longer served and this service
      // is no longer offered. The pages are gone; these 301s keep old links and
      // indexed URLs off a 404 and point them at the current hub pages.
      {
        source: '/service-area/bastrop-tx',
        destination: '/service-area',
        permanent: true,
      },
      {
        source: '/service-area/elgin-tx',
        destination: '/service-area',
        permanent: true,
      },
      {
        source: '/service-area/taylor-tx',
        destination: '/service-area',
        permanent: true,
      },
      {
        source: '/services/rv-water-damage-repair',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
