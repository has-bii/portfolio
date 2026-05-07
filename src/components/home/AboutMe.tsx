import { ArrowUpRight } from 'lucide-react'

export default function AboutMe() {
  return (
    <section className="w-full px-12 py-16">
      <div className="grid grid-cols-3 gap-8">
        {/* Title */}
        <div>
          <h2 className="font-heading inline-flex items-end gap-12 text-5xl font-medium">
            <span className="text-3xl">01</span>
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-8 text-justify tracking-wide">
          <p>
            I'm Hasbii. Spend most of my time building with React and Typescript. Lately, focusing
            on AI Engineering. I love creating systems that aren't just functional, but gives life a
            better experience.
          </p>

          <p>
            Currently, I'm <strong>shipping</strong> my first SaaS. An expense tracker, that not
            waiting users to input their expenses manually,&nbsp;
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
            I'm early in my career, but serious about craft. I'm actively building, shipping, and
            learning, and I'm looking for environments where design and engineering share a common
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
