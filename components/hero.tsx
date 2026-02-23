import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 lg:pt-20">

      <video
        className="hero-video absolute inset-0 h-full w-full object-cover brightness-75"
        src="/videos/banner.mp4"
        muted
        loop
        autoPlay
        playsInline
      ></video>
      <div className="absolute inset-0 bg-[#0E2A3B]/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-white">
              Planta industrial propia en Salta Capital
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white  sm:text-5xl lg:text-7xl font-mono text-balance">
            Soluciones en vidrio para el{" "}
            <span className="text-primary">norte argentino</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#e6e6e6] max-w-2xl lg:text-xl">
            Fabricación, procesamiento, distribución y comercialización de vidrio plano
            para arquitectura y construcción. Reposiciones inmediatas, entregas ágiles
            y costos competitivos.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver productos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white bg-[#05075E]/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#05075E]/10"
            >
              Cotizar
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white pt-8">
            <div>
              <p className="text-3xl font-bold text-primary font-mono lg:text-4xl">4</p>
              <p className="mt-1 text-sm text-white/80">Provincias de cobertura</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary font-mono lg:text-4xl">5+</p>
              <p className="mt-1 text-sm text-white">Líneas de producto</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary font-mono lg:text-4xl">100%</p>
              <p className="mt-1 text-sm text-white">Producción propia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
