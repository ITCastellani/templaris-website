import { MapPin } from "lucide-react"

export function Coverage() {
  const provinces = [
    { name: "Salta", highlight: true },
    { name: "Tucumán", highlight: false },
    { name: "Jujuy", highlight: false },
    { name: "Santiago del Estero", highlight: false },
    { name: "Catamarca", highlight: false },
    { name: "La Rioja", highlight: false },
    { name: "Chaco", highlight: false },
    { name: "Formosa", highlight: false },
    { name: "Corrientes", highlight: false },
    { name: "Misiones", highlight: false },
  ]

  return (
    <section id="cobertura" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-4">
              Zona de Cobertura
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Llegamos a todo el Norte Argentino
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg leading-relaxed">
              Con logística propia y un equipo especializado en transporte de
              materiales delicados, garantizamos la entrega segura de tus vidrios
              en cualquier punto de la región.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {provinces.map((province, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${province.highlight
                      ? "bg-primary-foreground text-primary"
                      : "bg-primary-foreground/10"
                    }`}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{province.name}</span>
                  {province.highlight && (
                    <span className="ml-auto text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">
                      Base
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary-foreground/50" />
                </div>
                <p className="text-5xl font-bold text-primary-foreground mb-2">10</p>
                <p className="text-lg text-primary-foreground/70">Provincias cubiertas</p>
                <p className="text-sm text-primary-foreground/50 mt-4">
                  Entrega puerta a puerta con<br />seguimiento en tiempo real
                </p>
              </div>
            </div>

            {/* Delivery time badge */}
            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground rounded-lg p-4 shadow-lg">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Tiempo de entrega</p>
              <p className="text-2xl font-bold">7 días</p>
              <p className="text-xs text-muted-foreground">según destino</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
