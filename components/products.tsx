import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const products = [
  {
    name: "Vidrio Templado",
    description:
      "Vidrio de seguridad sometido a tratamiento térmico que multiplica su resistencia mecánica y térmica. Ideal para fachadas, mamparas y aberturas.",
    image: "/images/tempered-glass.jpg",
  },
  {
    name: "Vidrio Laminado",
    description:
      "Compuesto por dos o más capas de vidrio unidas por una lámina intermedia de PVB. Ofrece seguridad, control acústico y protección UV.",
    image: "/images/laminated-glass.jpg",
  },
  {
    name: "Vidrio Crudo",
    description:
      "Vidrio plano sin tratamiento, disponible en diversos espesores y dimensiones. Base para procesamiento o uso directo en aplicaciones de baja exigencia.",
    image: "/images/raw-glass.jpg",
  },
  {
    name: "DVH",
    description:
      "Doble Vidriado Hermético: dos paños de vidrio separados por una cámara de aire sellada. Máximo aislamiento térmico y acústico.",
    image: "/images/dvh-glass.jpg",
  },
  {
    name: "Espejos",
    description:
      "Espejos de calidad industrial para uso arquitectónico, comercial y decorativo. Disponibles en diversas medidas y espesores.",
    image: "/images/mirrors.jpg",
  },
]

export function Products() {
  return (
    <section id="productos" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros productos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-mono text-balance">
            Vidrio de calidad industrial
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Todos nuestros productos están orientados al uso arquitectónico, comercial y
            residencial, cumpliendo con los requerimientos técnicos del sector.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg hover:border-primary/30"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={375}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground font-mono">{product.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
