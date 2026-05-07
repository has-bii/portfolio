import services from '@/data/services'
import { Badge } from '@/components/ui/badge'

export default function Services() {
  return (
    <section id="services" className="w-full px-12 py-16">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Title */}
        <div>
          <h2 className="font-heading inline-flex items-end gap-6 text-3xl font-medium whitespace-nowrap lg:gap-12 lg:text-5xl">
            <span className="text-xl lg:text-3xl">02</span>
            Services
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-8 lg:col-span-2">
          {services.map((service) => (
            <div key={service.title} className="space-y-2">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-muted-foreground tracking-wide">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.examples.map((example) => (
                  <Badge key={example} variant="default" size="md">
                    {example}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
