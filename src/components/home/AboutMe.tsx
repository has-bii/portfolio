import { ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'

const images = ['/me-1.jpeg', '/me-2.jpeg', '/me-3.jpeg', '/me-4.jpeg', '/me-5.jpeg', '/me-6.jpeg']

export default function AboutMe() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = useCallback(
    () => setCurrentImage((prev) => (prev + 1) % images.length),
    [],
  )

  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextImage, 3000)
    return () => clearInterval(timer)
  }, [isPaused, nextImage])

  return (
    <section id="about" className="w-full px-12 py-16">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Title */}
        <div>
          <h2 className="font-heading inline-flex items-end gap-6 text-3xl font-medium whitespace-nowrap lg:gap-12 lg:text-5xl">
            <span className="text-xl lg:text-3xl">01</span>
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-8 text-justify tracking-wide">
          <p>
            I'm Hasbii. I spend most of my time building with React and TypeScript. Lately, I've
            been diving into AI Engineering. I love creating systems that don't just work. They make
            life a little easier.
          </p>

          <p>
            Right now, I'm <strong>shipping</strong> my first SaaS: an expense tracker that doesn't
            make you manually log every transaction,&nbsp;
            <a
              href="https://waitlist.kashin.id"
              className="inline-flex items-center gap-0.5 font-semibold"
              target="_blank"
            >
              Kashin <ArrowUpRight className="size-4" />
            </a>
            .
          </p>

          <p>
            Early in my career, but serious about craft. I'm constantly building, shipping, and
            learning. I'm looking for environments where design and engineering speak the same
            language.
          </p>
        </div>

        {/* Image */}
        <div
          className="relative aspect-square w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence>
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt=""
              className="absolute inset-0 size-full cursor-pointer object-cover object-center"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              onClick={nextImage}
              draggable="false"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
