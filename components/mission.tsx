import Image from 'next/image'
import Link from 'next/link'

export default function Mission() {
  return (
    <section className="bg-background py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-border">
          <Image
            src="/generated/home-mission-style-planning.png"
            alt="Fashion planning workspace with wardrobe sketches, accessories, and fabric swatches"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Our Mission
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Empowering Smarter Style Decisions
            </h2>
          </div>

          <p className="text-lg text-foreground/80 leading-relaxed">
            We help readers discover and express their personal style through practical fashion advice, curated affiliate shopping guides, and clear recommendations that make every purchase easier to evaluate.
          </p>

          <Link href="/about" className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-opacity-90 transition-all text-lg">
            Learn Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
