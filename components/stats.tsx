export function Stats() {
  const stats = [
    {
      value: "+200",
      label: "Canchas equipadas",
      description: "en toda la región"
    },
    {
      value: "7 días",
      label: "Tiempo de entrega",
      description: "promedio"
    },
    {
      value: "+15",
      label: "Años de experiencia",
      description: "en el mercado"
    },
    {
      value: "100%",
      label: "Satisfacción",
      description: "garantizada"
    }
  ]

  return (
    <section className="py-16 lg:py-20 border-y border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center lg:text-left lg:border-l lg:first:border-l-0 lg:border-border lg:pl-8 lg:first:pl-0"
            >
              <p className="text-3xl lg:text-4xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-foreground font-medium mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
