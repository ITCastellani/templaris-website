"use client" // Necesario para usar useState y useEffect

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "@/node_modules/next/image"



export function Product() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const specs = [
    "18 planchas de vidrio templado",
    "Espesor: 10mm",
    "Dimensiones: 2000mm × 3000mm",
    "Borde pulido de alta calidad",
    "Apto para instalación profesional",
    "Cumple normativas de seguridad",
    "Resistencia a impactos",
    "Transparencia óptica superior"
  ]

  const slides = [
    {
      src: "/images/CANCHA-PADEL.png",
      alt: "Panel de vidrio templado 10mm",
      specs: { espesor: "10mm", ancho: "2000mm", alto: "3000mm" }
    },
    {
      src: "/images/CANCHA-DE-PADEL-(2).jpeg",
      alt: "Proceso de templado propio",
      specs: { espesor: "Custom", ancho: "Max 2500", alto: "Max 3500" }
    },
    {
      src: "/images/CANCHA-DE-PADEL-1.jpeg",
      alt: "Proceso de templado propio",
      specs: { espesor: "Custom", ancho: "Max 2500", alto: "Max 3500" }
    },
    {
      src: "/images/CANCHA-DE-PADEL .jpeg",
      alt: "Proceso de templado propio",
      specs: { espesor: "Custom", ancho: "Max 2500", alto: "Max 3500" }
    },
    {
      src: "/images/CANCHA-DE-PADEL-(1).jpeg",
      alt: "Cancha de padel instalada",
      specs: { espesor: "12mm", ancho: "2000mm", alto: "3000mm" }
    },
  ]

  // Efecto para cambiar de slide automáticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="producto" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Nuestro Producto
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Combo Completo para Cancha de Padel
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Todo lo que necesitás para equipar una cancha de padel profesional. 
              Vidrios templados de primera calidad, fabricados con tecnología de 
              punta en nuestro horno propio.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{spec}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-card border border-border rounded-lg">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-muted-foreground">Combo completo desde</span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                Consultá precio actualizado
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                *Precio sujeto a cotización según ubicación y cantidad
              </p>
              <Button asChild size="lg" className="w-full mt-4">
                <Link href="#contacto">Solicitar Cotización Sin Compromiso</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-card border border-border rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.6)_0%,transparent_40%,rgba(0,0,0,0.05)_100%)]" />
              
              {/* Glass panel illustration */}
              {/* Contenedor de Imágenes con Transición */}
              <div className="absolute inset-8 flex items-center justify-center">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Indicadores de puntos (Dots) */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-primary w-4" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>

              {/* Specs badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary text-primary-foreground p-4 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-semibold">10mm</p>
                    <p className="text-primary-foreground/70 text-xs">Espesor</p>
                  </div>
                  <div className="h-8 w-px bg-primary-foreground/20" />
                  <div>
                    <p className="font-semibold">2000mm</p>
                    <p className="text-primary-foreground/70 text-xs">Ancho</p>
                  </div>
                  <div className="h-8 w-px bg-primary-foreground/20" />
                  <div>
                    <p className="font-semibold">3000mm</p>
                    <p className="text-primary-foreground/70 text-xs">Alto</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating info */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <p className="text-2xl font-bold text-foreground">18</p>
              <p className="text-xs text-muted-foreground">Planchas por cancha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
