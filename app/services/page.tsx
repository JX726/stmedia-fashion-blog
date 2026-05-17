import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Header from '@/components/header'
import PageHero from '@/components/page-hero'
import { services } from '@/lib/site-content'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero
        eyebrow="Our Services"
        title="Transform Your Look with Expert Guidance"
        description="Use ST Media as your style partner for clearer outfit choices, smarter shopping, and affiliate recommendations that match how you actually live."
      />

      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start border border-border rounded-lg bg-secondary/10 p-6 md:p-9"
            >
              <div className="space-y-4">
                <p className="text-5xl font-bold text-primary/50">{service.number}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {service.title}
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-xl text-foreground/85 leading-relaxed">
                  {service.summary}
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  {service.detail}
                </p>
                <a
                  href="/contact"
                  className="inline-flex text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Discuss this service -&gt;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {['Audit your style needs', 'Curate useful options', 'Refine with feedback'].map((step, index) => (
            <div key={step} className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold text-foreground">{step}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {index === 0 && 'We start with your lifestyle, budget, favorite silhouettes, and the shopping decisions you want to make easier.'}
                {index === 1 && 'Then we turn the brief into outfit ideas, shopping shortlists, and affiliate product notes with clear reasons.'}
                {index === 2 && 'Finally, we adjust the direction so it feels wearable, repeatable, and aligned with your personal taste.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
