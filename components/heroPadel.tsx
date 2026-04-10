import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* 1. Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover brightness-95"
        >
          <source src="/videos/bannerTemplaris.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* 2. Overlay para legibilidad (oscurece un poco el video) */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Background pattern (opcional, ahora sobre el video) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] z-[1]" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            {/* Ajusté los colores a blanco/transparente para que resalten sobre el video */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white mb-6 border border-white/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Fabricación propia en el Norte Argentino
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
              Vidrios Templados
              <br />
              <span className="text-white/70">para Canchas de Padel</span>
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-lg">
              Somos fabricantes directos con horno de templado propio.
              Ofrecemos el mejor precio del mercado, calidad certificada y
              tiempos de entrega más cortos de la región.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contacto">
                  Solicitar Cotización
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-white/5 text-white border-white/20 hover:bg-white/10">
                <Link href="tel:+5493815555555">
                  <Phone className="w-4 h-4" />
                  Llamar Ahora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}