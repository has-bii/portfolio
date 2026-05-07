import socials from '@/data/socials'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const iconMap = { Github, Linkedin, Instagram, Mail } as const

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary px-12 py-10">
      <div className="flex items-center justify-between">
        {/* Left — Name */}
        <div>
          <p className="text-sm font-semibold">Hasbiy Robbiy</p>
          <p className="text-xs text-muted-foreground">Software Developer</p>
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
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            )
          })}
        </div>

        {/* Right — Location */}
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Based in Indonesia</p>
          <p className="text-xs text-muted-foreground">Available to work remotely</p>
        </div>
      </div>
    </footer>
  )
}
