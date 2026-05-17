import Link from 'next/link'
import { services } from '@/lib/site-content'

export default function Services() {
  const featuredServices = services.slice(0, 3)

  return (
    <section className="bg-background py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Explore Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Fashion Guidance Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="group rounded-lg border border-border bg-background/50 p-8 hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-6">
                  {service.summary}
                </p>
                <Link href="/services" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Learn More -&gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
