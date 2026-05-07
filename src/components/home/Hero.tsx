import ParallaxImage from '@/components/ParallaxImage'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null)

  return (
    <section ref={containerRef} className="h-dvh min-h-175 w-full p-12">
      <div className="flex h-full w-full flex-col gap-8 xl:flex-row">
        {/* Title*/}
        <h1 className="mt-auto shrink-0 -space-y-3 text-3xl leading-tight select-none sm:text-5xl xl:-space-y-12 xl:text-[10rem]">
          <span className="block">Software</span>
          <span className="block">Developer</span>
        </h1>

        <div className="flex flex-1 flex-col items-end justify-between gap-8">
          {/* Image */}
          <figure className="relative aspect-9/12 w-2/3 overflow-hidden sm:w-72 xl:mt-20 xl:w-96">
            <ParallaxImage
              src="/me.jpg"
              alt="me"
              className="absolute inset-0 size-full object-cover"
              containerRef={containerRef}
              scaleRange={[1.2, 1.3]}
              yOffset={200}
              noise
              noiseOpacity={0.75}
            />
          </figure>

          {/* Short Bio */}
          <p className="text-right text-lg leading-tight select-none xl:text-xl">
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
  )
}
