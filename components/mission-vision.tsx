import { Target, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-24 lg:py-32 bg-accent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-accent-foreground/10 bg-accent-foreground/5 p-8 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-accent-foreground font-mono">Misión</h3>
            <p className="mt-4 text-base leading-relaxed text-accent-foreground/70">
              Brindar soluciones en vidrio de alta calidad, con procesos industriales eficientes,
              entregas rápidas y un servicio confiable, acompañando a nuestros clientes en cada
              proyecto con productos que respondan a las exigencias técnicas, estéticas y
              funcionales del mercado actual.
            </p>
          </div>

          <div className="rounded-lg border border-accent-foreground/10 bg-accent-foreground/5 p-8 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Eye className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-accent-foreground font-mono">Visión</h3>
            <p className="mt-4 text-base leading-relaxed text-accent-foreground/70">
              Ser la empresa de referencia en soluciones de vidrio del norte argentino, reconocida
              por nuestra capacidad productiva, agilidad operativa, innovación aplicada y cercanía
              con el cliente, consolidando un crecimiento sostenido que impulse el desarrollo regional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
