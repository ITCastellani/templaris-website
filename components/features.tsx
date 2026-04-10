import { Factory, Clock, BadgeDollarSign, Shield, Truck, Award } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Factory,
      title: "Horno de Templado Propio",
      description: "Contamos con nuestra propia planta de templado, lo que nos permite controlar todo el proceso de fabricación y garantizar la máxima calidad."
    },
    {
      icon: Clock,
      title: "Entregas Ultra Rápidas",
      description: "Gracias a nuestra capacidad de producción, ofrecemos los tiempos de entrega más cortos del mercado. Tu cancha lista en tiempo récord."
    },
    {
      icon: BadgeDollarSign,
      title: "Mejor Precio Garantizado",
      description: "Al ser fabricantes directos, eliminamos intermediarios y te ofrecemos el precio más competitivo del norte argentino."
    },
    {
      icon: Shield,
      title: "Calidad Certificada",
      description: "Todos nuestros vidrios cumplen con las normas de seguridad y calidad exigidas para instalaciones deportivas."
    },
    {
      icon: Truck,
      title: "Entrega en Todo el Norte",
      description: "Cubrimos todas las provincias del norte argentino con logística propia y cuidado especial en el transporte."
    },
    {
      icon: Award,
      title: "Garantía Total",
      description: "Respaldamos nuestros productos con garantía completa. Tu inversión está protegida con nosotros."
    }
  ]

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            ¿Por qué elegirnos?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            La mejor opción para tu cancha de padel
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Combinamos tecnología propia, experiencia y compromiso para ofrecerte 
            el mejor producto del mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 lg:p-8 bg-card border border-border rounded-lg hover:border-foreground/20 transition-colors"
            >
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[50] p-8 inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[55%] w-full object-cover brightness-75"
        >
          <source src="/videos/videoPromo.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* 2. Overlay para legibilidad (oscurece un poco el video) */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

    </section>
  )
}
