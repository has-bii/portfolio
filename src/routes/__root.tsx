import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ReactLenis } from 'lenis/react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '../styles.css'
import 'lenis/dist/lenis.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <main className="no-scrollbar relative w-screen">
      <ReactLenis root />
      <Outlet />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}
