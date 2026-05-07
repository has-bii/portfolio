import socials from '@/data/socials'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const iconMap = { Github, Linkedin, Instagram, Mail } as const

export default function Footer() {
  return (
    <footer className="border-primary w-full border-t px-12 py-10">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Left — Name */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold">Hasbiy Robbiy</p>
          <p className="text-muted-foreground text-xs">Software Developer</p>
        </div>

        {/* Middle — Icon row */}
        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon }) => {
            const Icon = iconMap[icon]
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="size-4" />
              </a>
            )
          })}
        </div>

        {/* Right — Location */}
        <div className="text-center sm:text-right">
          <p className="text-muted-foreground text-xs">Based in Indonesia</p>
          <p className="text-muted-foreground text-xs">Available to work remotely</p>
        </div>
      </div>
    </footer>
  )
}
