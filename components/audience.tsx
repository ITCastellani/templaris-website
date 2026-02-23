import {
  Wrench,
  GlassWater,
  Building2,
  Ruler,
  HardHat,
  Home,
  UserRound,
} from "lucide-react"

const audiences = [
  { icon: Wrench, label: "Carpinteros de aluminio y PVC" },
  { icon: GlassWater, label: "Vidrieros" },
  { icon: Building2, label: "Empresas constructoras" },
  { icon: Ruler, label: "Arquitectos" },
  { icon: HardHat, label: "Ingenieros" },
  { icon: Home, label: "Desarrolladores" },
  { icon: UserRound, label: "Público en general" },
]

export function Audience() {
  return (
    <section className="py-24 lg:py-32 bg-accent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            A quiénes nos dirigimos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl font-mono text-balance">
            Trabajamos con quienes construyen
          </h2>
          <p className="mt-4 text-lg text-accent-foreground/70 leading-relaxed">
            Acompañamos proyectos de distinta escala con eficiencia logística y atención
            personalizada.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {audiences.map((audience) => (
            <div
              key={audience.label}
              className="flex items-center gap-3 rounded-full border border-accent-foreground/10 bg-accent-foreground/5 px-6 py-3 transition-all hover:border-primary/40 hover:bg-primary/10"
            >
              <audience.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                {audience.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
