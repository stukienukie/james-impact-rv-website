'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

const BRAND = '#d42b1f'

// Kyle, TX — James's base. Everything else is measured from here.
const BASE = { name: 'Kyle', lat: 29.9891, lng: -97.8772 }

// 50-mile service radius, in meters (Leaflet circles are metric).
const RADIUS_METERS = 50 * 1609.34

// Same list as components/city-grid.tsx — keep the two in sync.
const CITIES = [
  { name: 'Buda', lat: 30.0852, lng: -97.8403 },
  { name: 'Austin', lat: 30.2672, lng: -97.7431 },
  { name: 'San Marcos', lat: 29.8833, lng: -97.9414 },
  { name: 'New Braunfels', lat: 29.703, lng: -98.1245 },
  { name: 'Canyon Lake', lat: 29.8752, lng: -98.2622 },
  { name: 'Bastrop', lat: 30.1105, lng: -97.3153 },
  { name: 'Dripping Springs', lat: 30.1902, lng: -98.0867 },
  { name: 'Taylor', lat: 30.571, lng: -97.4092 },
  { name: 'Elgin', lat: 30.3496, lng: -97.3703 },
  { name: 'Wimberley', lat: 29.9974, lng: -98.0989 },
  { name: 'Niederwald', lat: 29.9738, lng: -97.7264 },
  { name: 'Uhland', lat: 29.966, lng: -97.7767 },
]

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cancelled = false
    // Leaflet touches window on import, so it can only load in the browser.
    let cleanup = () => {}

    import('leaflet').then((mod) => {
      if (cancelled || !containerRef.current) return
      const L = mod.default

      const map = L.map(el, {
        center: [BASE.lat, BASE.lng],
        zoom: 9,
        // Don't hijack page scrolling — users can still zoom with the
        // controls, ctrl+wheel, or pinch on touch.
        scrollWheelZoom: false,
        attributionControl: true,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map)

      const radius = L.circle([BASE.lat, BASE.lng], {
        radius: RADIUS_METERS,
        color: BRAND,
        weight: 2,
        fillColor: BRAND,
        fillOpacity: 0.08,
      }).addTo(map)

      // Vector markers rather than Leaflet's default pin image — no broken
      // icon paths under the bundler, and they take the brand color directly.
      for (const city of CITIES) {
        L.circleMarker([city.lat, city.lng], {
          radius: 6,
          color: '#ffffff',
          weight: 2,
          fillColor: BRAND,
          fillOpacity: 1,
        })
          .addTo(map)
          .bindTooltip(city.name, { direction: 'top', offset: [0, -8] })
      }

      L.circleMarker([BASE.lat, BASE.lng], {
        radius: 10,
        color: '#ffffff',
        weight: 3,
        fillColor: BRAND,
        fillOpacity: 1,
      })
        .addTo(map)
        .bindTooltip('Kyle, TX — home base', {
          direction: 'top',
          offset: [0, -12],
          permanent: false,
        })

      map.fitBounds(radius.getBounds(), { padding: [16, 16] })

      cleanup = () => map.remove()
    })

    return () => {
      cancelled = true
      cleanup()
    }
  }, [])

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div
        ref={containerRef}
        role="img"
        aria-label="Map of the Impact RV Repair service area — a 50 mile radius around Kyle, Texas, covering Buda, Austin, San Marcos, New Braunfels, Canyon Lake, Bastrop, Dripping Springs, Taylor, Elgin, Wimberley, Niederwald, and Uhland."
        className="aspect-[4/3] w-full bg-muted [&_.leaflet-container]:font-sans"
      />
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border bg-card px-4 py-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full border-2 border-white"
            style={{ backgroundColor: BRAND }}
          />
          Kyle, TX — home base
        </span>
        <span className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: BRAND }}
          />
          Cities served
        </span>
        <span className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full border-2"
            style={{ borderColor: BRAND, backgroundColor: `${BRAND}1a` }}
          />
          50-mile service radius
        </span>
      </div>
    </div>
  )
}
