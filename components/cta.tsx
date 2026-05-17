import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative bg-background py-24 border-t border-border overflow-hidden">
      <Image
        src="/generated/home-cta-boutique.png"
        alt="Elegant boutique lounge with curated fashion pieces and accessories"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/45" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Start Your Fashion Journey
          </h2>
          <p className="text-xl text-foreground/80">
            Join our community for style ideas, affiliate product guides, and personalized advice to elevate your wardrobe.
          </p>
        </div>

        <Link href="/contact" className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-opacity-90 transition-all text-lg">
          Get Started Now
        </Link>
      </div>
    </section>
  )
}
