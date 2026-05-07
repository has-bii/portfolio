import { ArrowUpRight } from 'lucide-react'
import projects from '@/data/projects'
import { Badge } from '@/components/ui/badge'

export default function SelectedWork() {
  return (
    <section id="work" className="w-full px-12 py-16">
      <div className="grid gap-8 xl:grid-cols-3">
        {/* Title */}
        <div>
          <h2 className="font-heading inline-flex items-end gap-6 truncate text-3xl font-medium whitespace-nowrap xl:gap-12 xl:text-5xl">
            <span className="text-xl xl:text-3xl">03</span>
            Selected Work
          </h2>
        </div>

        {/* Content */}
        <div className="xl:col-span-2">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              className="group border-primary flex flex-col items-baseline gap-3 border-t py-6 first:border-t-0 sm:flex-row xl:gap-6"
            >
              {/* Index */}
              <span className="font-heading text-primary/15 group-hover:text-primary/30 shrink-0 text-6xl leading-none font-medium transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title + Description */}
              <div className="min-w-0 flex-1 space-y-1">
                <h3 className="text-2xl leading-tight font-semibold transition-transform group-hover:-translate-y-0.5">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm tracking-wide">{project.description}</p>
                <div className="flex gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tags + Arrow */}
              <div className="shrink-0">
                <ArrowUpRight className="text-primary/40 group-hover:text-primary size-6 shrink-0 transition-all group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
