import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    detail: "Salta Capital, Argentina",
  },
  {
    icon: Phone,
    title: "Teléfono",
    detail: "Contactanos para más info",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "ventas@templaris.com.ar",
  },
  {
    icon: Clock,
    title: "Horario",
    detail: "Lun - Vie: 8:00 - 17:00",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contacto
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-mono text-balance">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Estamos listos para acompañarte. Contanos qué necesitás y te respondemos
              a la brevedad con presupuesto y plazos.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            <form className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Tu empresa"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="tu@email.com"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Tu teléfono"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-foreground mb-1.5">
                  Producto de interés
                </label>
                <select
                  id="product"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccionar producto
                  </option>
                  <option value="templado">Vidrio Templado</option>
                  <option value="laminado">Vidrio Laminado</option>
                  <option value="crudo">Vidrio Crudo</option>
                  <option value="dvh">DVH (Doble Vidriado Hermético)</option>
                  <option value="espejos">Espejos</option>
                  <option value="otro">Otro / Consulta general</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Contanos sobre tu proyecto, medidas, cantidades..."
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
