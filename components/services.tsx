import {
  Flame,
  Layers,
  Scissors,
  RotateCcw,
  Truck,
  ShoppingBag,
  Settings,
} from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Fabricación y procesamiento",
    description: "Fabricación y procesamiento de vidrio plano con tecnología de última generación.",
  },
  {
    icon: Flame,
    title: "Templado con horno propio",
    description: "Tratamiento térmico en nuestro horno industrial para máxima resistencia.",
  },
  {
    icon: Layers,
    title: "Laminado con horno propio",
    description: "Proceso de laminado industrial para vidrio de seguridad multicapa.",
  },
  {
    icon: Scissors,
    title: "Corte y preparación a medida",
    description: "Corte de precisión y preparación según especificaciones del proyecto.",
  },
  {
    icon: RotateCcw,
    title: "Reposición inmediata",
    description: "Reposición de vidrios con tiempos de respuesta mínimos ante urgencias.",
  },
  {
    icon: Truck,
    title: "Distribución regional",
    description: "Logística eficiente en Salta, Jujuy, Tucumán y sus interiores.",
  },
  {
    icon: ShoppingBag,
    title: "Venta mayorista y minorista",
    description: "Comercialización directa para empresas y público en general.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Servicios
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-mono text-balance">
              Lo que hacemos por vos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              No realizamos mano de obra ni instalación, lo que nos permite enfocarnos
              100% en la excelencia del producto y la eficiencia del servicio.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Solicitar presupuesto
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md hover:border-primary/20 ${
                    index === services.length - 1 && services.length % 2 !== 0
                      ? "sm:col-span-2 sm:max-w-[calc(50%-0.5rem)]"
                      : ""
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
