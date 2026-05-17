type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-background border-b border-border py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
}
