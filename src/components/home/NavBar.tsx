import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
] as const

export default function NavBar() {
  const [active, setActive] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)
  const lenis = useLenis()

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px' },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Show nav when About reaches 25% viewport, hide when scrolled back above
  useEffect(() => {
    const el = document.getElementById('about')
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.25) {
          setVisible(true)
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          // About fully above viewport = scrolled past, keep visible
          // About below viewport (top > 0) = scrolled back to Hero, hide
          setVisible(false)
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el || !lenis) return
    lenis.scrollTo(el, { offset: -80 })
  }

  return (
    <motion.nav
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="pointer-events-none sticky top-6 z-50 mx-auto flex w-fit rounded-full border border-border bg-white/80 px-8 py-2.5 shadow-sm backdrop-blur-md"
    >
      <div className="pointer-events-auto flex">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`relative cursor-pointer px-4 py-1 text-sm font-medium tracking-wide transition-colors ${
              active === id
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {label}
            {active === id && (
              <motion.span
                layoutId="underline"
                className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-foreground"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
