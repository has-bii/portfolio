import { ArrowUpRight } from 'lucide-react'
import projects from '@/data/projects'
import { Badge } from '@/components/ui/badge'

export default function SelectedWork() {
  return (
    <section id="work" className="w-full px-12 py-16">
      <div className="grid grid-cols-3 gap-8">
        {/* Title */}
        <div>
          <h2 className="font-heading inline-flex items-end gap-12 text-5xl font-medium">
            <span className="text-3xl">03</span>
            Selected Work
          </h2>
        </div>

        {/* Content */}
        <div className="col-span-2">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              className="group flex items-baseline gap-6 border-t border-primary py-6 first:border-t-0"
            >
              {/* Index */}
              <span className="shrink-0 font-heading text-6xl font-medium leading-none text-primary/15 transition-colors group-hover:text-primary/30">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title + Description */}
              <div className="min-w-0 flex-1 space-y-1">
                <h3 className="text-2xl font-semibold leading-tight transition-colors group-hover:text-muted-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm tracking-wide">
                  {project.description}
                </p>
              </div>

              {/* Tags + Arrow */}
              <div className="flex shrink-0 items-center gap-4">
                <div className="hidden gap-1.5 sm:flex">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-primary/40 transition-all group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
