import Image from "next/image"
import { Factory, Truck, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Planta industrial propia",
    description: "Equipada con horno de templado en Salta Capital para máxima capacidad productiva.",
  },
  {
    icon: Zap,
    title: "Reposiciones inmediatas",
    description: "Respuesta rápida ante urgencias de obra gracias a nuestra producción local.",
  },
  {
    icon: Truck,
    title: "Distribución regional",
    description: "Cobertura en Salta, Jujuy, Tucumán y el interior de estas provincias.",
  },
  {
    icon: Shield,
    title: "Calidad constante",
    description: "Procesos controlados y estándares técnicos que garantizan productos confiables.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quiénes somos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-mono text-balance">
              Una mirada moderna e industrial
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Somos una empresa del norte argentino dedicada a la fabricación, procesamiento,
              distribución y comercialización de vidrio plano para arquitectura y construcción.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nacemos con una mirada moderna e industrial, orientada a brindar soluciones
              confiables en vidrio para profesionales y empresas que necesitan rapidez,
              respaldo técnico y productos de calidad constante.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/factory.jpg"
                alt="Planta industrial de Templaris en Salta"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-accent p-6 shadow-xl hidden lg:block">
              <p className="text-sm text-accent-foreground/70">Operamos en</p>
              <p className="text-xl font-bold text-accent-foreground font-mono">Salta, Jujuy y Tucumán</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
