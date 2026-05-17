export default function Stats() {
  const stats = [
    {
      number: '20+',
      label: 'Custom Consultations',
      description: 'Personalized style consultation services for every client',
    },
    {
      number: '98%',
      label: 'Community Support',
      description: 'Our community takes pride in high satisfaction and support',
    },
    {
      number: '98%',
      label: 'Sustainable Choices',
      description: 'Promoting eco-friendly fashion and sustainable wardrobe building',
    },
  ]

  return (
    <section className="bg-background py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <h3 className="text-5xl md:text-6xl font-bold text-primary">
                {stat.number}
              </h3>
              <h4 className="text-xl font-semibold text-foreground">
                {stat.label}
              </h4>
              <p className="text-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
