import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Header from '@/components/header'
import PageHero from '@/components/page-hero'

const values = [
  {
    title: 'Style Empowerment',
    description:
      'We help readers build confidence through clear style ideas, practical outfit formulas, and product recommendations that fit real budgets.',
  },
  {
    title: 'Smarter Shopping',
    description:
      'Affiliate content works best when it is useful. Every guide is built around fit, quality, versatility, and the question of whether an item earns its place.',
  },
  {
    title: 'Sustainable Choices',
    description:
      'We promote thoughtful wardrobes: fewer impulse buys, better materials, repeatable styling, and care habits that extend the life of every piece.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero
        eyebrow="Discover"
        title="Unleash Your Unique Fashion Voice"
        description="ST Media is a style and shopping resource for people who want fashion advice that feels personal, practical, and easy to act on."
      />

      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              A trusted source for style inspiration and buying guidance
            </h2>
          </div>
          <div className="space-y-5 text-foreground/75 text-lg leading-relaxed">
            <p>
              We started ST Media to make style decisions less confusing. Our content brings together fashion inspiration, wardrobe planning, beauty notes, and affiliate shopping guides so readers can move from idea to outfit with less guesswork.
            </p>
            <p>
              The site focuses on wearable recommendations: pieces that work across occasions, styling details that make basics feel finished, and product roundups that explain why an item is worth considering.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary">98%</p>
              <p className="font-semibold text-foreground">Reader-first recommendations</p>
              <p className="text-foreground/65">Guides are written to solve styling and shopping decisions, not just list products.</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary">200+</p>
              <p className="font-semibold text-foreground">Style ideas curated</p>
              <p className="text-foreground/65">From capsules and accessories to beauty edits and seasonal outfit formulas.</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary">12k</p>
              <p className="font-semibold text-foreground">Monthly style moments</p>
              <p className="text-foreground/65">Inspiration built for repeat use, comparison, and practical shopping.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-border bg-secondary/15 p-7 space-y-3">
                <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            From fashion inspiration to practical affiliate guidance
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed">
            ST Media began as a place to collect style ideas and grew into a resource for readers who want clearer product choices. Today, we combine editorial research, styling logic, and affiliate recommendations to help every visitor build a wardrobe that feels like their own.
          </p>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
