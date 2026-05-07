import ParallaxImage from '@/components/ParallaxImage'

export default function Hero() {
  return (
    <section className="h-dvh w-full p-12">
      <div className="flex h-full w-full gap-8">
        {/* Title*/}
        <h1 className="mt-auto shrink-0 -space-y-12 text-[10rem] leading-tight select-none">
          <span className="block">Software</span>
          <span className="block">Developer</span>
        </h1>

        <div className="flex flex-1 flex-col items-end justify-between">
          {/* Image */}
          <figure className="relative mt-20 aspect-9/12 w-96 overflow-hidden">
            <ParallaxImage
              src="/me.jpg"
              alt="me"
              className="absolute inset-0 size-full object-cover"
              noise
              noiseOpacity={0.75}
            />
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
  )
}
