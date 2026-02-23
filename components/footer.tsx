import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-accent border-t border-[#1a1c6e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="4" fill="#0F49B5" />
                <path d="M8 8h16v2H17v14h-2V10H8V8z" fill="white" />
              </svg>
              <span className="text-lg font-bold tracking-tight text-accent-foreground font-mono">
                TEMPLARIS
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-accent-foreground/60 leading-relaxed">
              Fabricación, procesamiento, distribución y comercialización de vidrio plano
              para arquitectura y construcción en el norte argentino.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-foreground">Productos</h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a href="#productos" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Vidrio Templado
                </a>
              </li>
              <li>
                <a href="#productos" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Vidrio Laminado
                </a>
              </li>
              <li>
                <a href="#productos" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Vidrio Crudo
                </a>
              </li>
              <li>
                <a href="#productos" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  DVH
                </a>
              </li>
              <li>
                <a href="#productos" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Espejos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-foreground">Navegación</h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a href="#inicio" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#valores" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Valores
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <Link href="/cotizar" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                  Cotizar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-accent-foreground/10 pt-8 sm:flex-row">
          <p className="text-sm text-accent-foreground/40">
            Templaris. Todos los derechos reservados.
          </p>
          <p className="text-sm text-accent-foreground/40">
            Salta, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
