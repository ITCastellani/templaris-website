import {
  Award,
  Clock,
  Handshake,
  TrendingUp,
  Users,
  MapPin,
} from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Calidad industrial",
    description:
      "Trabajamos con procesos controlados y estándares técnicos que garantizan productos confiables y consistentes.",
  },
  {
    icon: Clock,
    title: "Rapidez y respuesta",
    description:
      "Nuestro horno propio y planta en Salta nos permiten dar respuestas inmediatas, especialmente en reposiciones y urgencias de obra.",
  },
  {
    icon: Handshake,
    title: "Compromiso con el cliente",
    description:
      "Entendemos los tiempos de obra y la dinámica del rubro. Cumplimos lo que prometemos.",
  },
  {
    icon: TrendingUp,
    title: "Eficiencia y competitividad",
    description:
      "Optimizamos procesos para ofrecer mejores costos y plazos, sin resignar calidad.",
  },
  {
    icon: Users,
    title: "Cercanía y trato directo",
    description:
      "Somos una empresa accesible, con atención personalizada y conocimiento real del mercado regional.",
  },
  {
    icon: MapPin,
    title: "Desarrollo regional",
    description:
      "Invertimos, producimos y generamos valor en el norte argentino, acompañando su crecimiento productivo y económico.",
  },
]

export function Values() {
  return (
    <section id="valores" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros valores
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-mono text-balance">
            Lo que nos define
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div key={value.title} className="relative group">
              <div className="flex items-start gap-4">
                <span className="text-5xl font-bold text-primary/10 font-mono leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pt-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
