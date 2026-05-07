import services from '@/data/services'
import { Badge } from '@/components/ui/badge'

export default function Services() {
  return (
    <section className="w-full px-12 py-16">
      <div className="grid grid-cols-3 gap-8">
        {/* Title */}
        <div>
          <h2 className="font-heading inline-flex items-end gap-12 text-5xl font-medium">
            <span className="text-3xl">02</span>
            Services
          </h2>
        </div>

        {/* Content */}
        <div className="col-span-2 space-y-8">
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
