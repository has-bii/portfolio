import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { preloadImages, preloadRouteChunks } from '@/data/preload'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyRouter = any

interface PreloaderProps {
  onComplete: () => void
  router: AnyRouter
}

export function Preloader({ onComplete, router }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const chunkPromise = preloadRouteChunks(router)

    const imagePromise = preloadImages({
      onProgress: setProgress,
    })

    Promise.all([imagePromise, chunkPromise]).then(() => {
      setTimeout(() => setDone(true), 500)
    })
  }, [router])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          key="preloader"
          className="bg-background fixed inset-0 z-50 flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.p
            className="text-foreground font-sans text-4xl font-bold tabular-nums"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {progress}%
          </motion.p>

          <div className="bg-border mt-4 h-[2px] w-48 overflow-hidden rounded-full">
            <motion.div
              className="bg-foreground h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
