export default function Testimonials() {
  const testimonials = [
    {
      quote: 'This platform completely changed how I compare fashion finds. I now buy fewer pieces and style them better.',
      author: 'Sarah Chen',
      role: 'Designer',
    },
    {
      quote: 'The shopping guides explain why an item works, not just where to buy it. That makes the recommendations much easier to trust.',
      author: 'Michael Wang',
      role: 'Business Professional',
    },
    {
      quote: 'The style advice helped me build outfits from pieces I already owned, then choose upgrades that actually made sense.',
      author: 'Emily Davis',
      role: 'Creative Director',
    },
  ]

  return (
    <section className="bg-background py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Community Voice
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Hear From Our Fashion Community
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="rounded-lg bg-secondary/20 border border-border p-8 space-y-4 hover:border-primary transition-all"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">*</span>
                  ))}
                </div>

                <p className="text-lg text-foreground leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
