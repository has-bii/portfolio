import { ArrowUpRight } from 'lucide-react'

export default function AboutMe() {
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
        <div className="relative aspect-square w-full">
          <img
            src="/me.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
