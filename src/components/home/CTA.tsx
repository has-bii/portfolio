import { ArrowUpRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="flex w-full flex-col items-center px-12 py-32">
      {/* Headline */}
      <h2 className="text-center text-6xl font-bold leading-tight tracking-tight">
        Got a project?
        <br />
        <span className="text-muted-foreground">Let&apos;s build something great.</span>
      </h2>

      {/* CTA Button */}
      <a
        href="mailto:hello@hasbii.dev"
        className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground transition-all hover:gap-5 hover:bg-primary/80"
      >
        Get in touch
        <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
      </a>
    </section>
  )
}
