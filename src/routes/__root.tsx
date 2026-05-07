import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ReactLenis } from 'lenis/react'

import '../styles.css'
import 'lenis/dist/lenis.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <main className="no-scrollbar! relative w-screen overflow-x-hidden">
      <ReactLenis root />
      <Outlet />
    </main>
  )
}
