"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Contacto
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Solicitá tu cotización sin compromiso
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Completá el formulario y te respondemos en menos de 24 horas con 
            el mejor precio para tu proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <a 
                  href="tel:+5493875931284" 
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-foreground/20 transition-colors group"
                >
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <p className="font-medium text-foreground">+54 9 387 593-1284</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5493875931284" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-foreground/20 transition-colors group"
                >
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">+54 9 387 593-1284</p>
                  </div>
                </a>

                <a 
                  href="mailto:ventas@vidriostemplados.com.ar" 
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-foreground/20 transition-colors group"
                >
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">ventas@templaris.com.ar</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium text-foreground">Av. Rodriguez Durañona 2457, Salta, Argentina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-muted-foreground">
                    Nos pondremos en contacto con vos en menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nombre completo
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Tu nombre" 
                        required 
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Teléfono / WhatsApp
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+54 9 XXX XXX-XXXX" 
                        required 
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="tu@email.com" 
                      required 
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-foreground">
                      Localidad de entrega
                    </label>
                    <Input 
                      id="location" 
                      placeholder="Ciudad, Provincia" 
                      required 
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-medium text-foreground">
                      Cantidad de canchas
                    </label>
                    <Input 
                      id="quantity" 
                      type="number" 
                      min="1"
                      placeholder="1" 
                      defaultValue="1"
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Mensaje adicional (opcional)
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Contanos más sobre tu proyecto..."
                      rows={4}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Solicitud
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
