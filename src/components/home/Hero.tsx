import { motion, useScroll, useTransform } from 'motion/react'

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const { scrollY } = useScroll()
  // image moves at 0.5x scroll speed → parallax drift
  const y = useTransform(scrollY, [0, 500], [0, 150], { clamp: false })
  const scale = useTransform(scrollY, [0, 500], [1.1, 1], { clamp: false })

  return (
    <motion.img
      src={src}
      alt={alt}
      style={{ y, scale }}
      className="absolute inset-0 size-full object-cover"
    />
  )
}

export default function Hero() {
  return (
    <>
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <section className="h-dvh w-full p-12">
      <div className="flex h-full w-full gap-8">
        {/* Title*/}
        <h1 className="mt-auto shrink-0 -space-y-12 text-[10rem] leading-tight select-none">
          <span className="block">Software</span>
          <span className="block">Developer</span>
        </h1>

        <div className="flex flex-1 flex-col items-end justify-between">
          {/* Image */}
          <figure className="noise relative mt-20 aspect-9/12 w-96 overflow-hidden">
            <ParallaxImage src="/me.jpg" alt="me" />
          </figure>

          {/* Short Bio */}
          <p className="text-right text-xl leading-tight font-medium select-none">
            Hi, I'm Hasbii
            <br />
            Brainstorming
            <br />
            Building
            <br />
            Shipping
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
