export default function Process() {
  const steps = [
    {
      title: 'Style Assessment',
      description: 'We deeply understand your style preferences, lifestyle, and goals to create a personalized style profile for you.',
    },
    {
      title: 'Wardrobe Planning',
      description: 'Based on your style profile, we design practical and fashionable outfit combinations and wardrobe recommendations.',
    },
    {
      title: 'Continuous Support',
      description: 'We provide you with ongoing guidance, seasonal updates, and personalized fashion recommendations.',
    },
  ]

  return (
    <section className="bg-background py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              How We Guide You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative space-y-4"
              >
                {/* Step number circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-32 right-0 h-1 bg-gradient-to-r from-primary to-transparent -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
