import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] bg-background overflow-hidden">
      <Image
        src="/generated/home-hero-background.png"
        alt="Editorial street-style fashion scene in a modern shopping district"
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/55" />
      <div className="absolute inset-0 bg-background/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 md:py-20">
        <div className="relative w-full">
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[230px] h-[330px] rounded-3xl overflow-hidden shadow-2xl border border-white/70">
            <Image
              src="/generated/hero-shopping-guide.png"
              alt="Fashion shopping guide scene with shoes and accessories"
              fill
              priority
              className="object-cover"
              sizes="230px"
            />
          </div>

          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                Style and Shopping Guides
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Discover Your Unique Personal Style
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                Explore fashion guidance, affiliate shopping edits, and styling services that help you express yourself with more confidence and less shopping noise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/contact" className="text-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-opacity-90 transition-all text-lg">
                Get Started
              </Link>
              <Link href="/about" className="text-center px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all text-lg">
                Learn More
              </Link>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[230px] h-[330px] rounded-3xl overflow-hidden shadow-2xl border border-white/70">
            <Image
              src="/generated/hero-style-edit.png"
              alt="Urban fashion style edit with a yellow coat and crossbody bag"
              fill
              priority
              className="object-cover"
              sizes="230px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
