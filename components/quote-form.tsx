"use client"

import { useState, useMemo } from "react"
import { ArrowLeft, Ruler, Layers, Hash, Calculator, CheckCircle2, SendHorizonal, Clock, ShieldCheck, Info } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  calculatePrice,
  formatARS,
  rawGlassData,
  type GlassType,
  type CalculationOptions
} from "@/lib/pricing"

type Step = "form" | "result" | "thanks"

export function QuoteForm() {
  // --- ESTADOS ---
  const [glassType, setGlassType] = useState<GlassType | "">("")
  const [mainGlassIndex, setMainGlassIndex] = useState<string>("")
  const [secondGlassIndex, setSecondGlassIndex] = useState<string>("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [quantity, setQuantity] = useState("1")
  const [step, setStep] = useState<Step>("form")

  // Opciones adicionales
  const [urgent, setUrgent] = useState(false)
  const [calados, setCalados] = useState("0")
  const [pasaVoz, setPasaVoz] = useState(false)
  const [puntasRedondeadas, setPuntasRedondeadas] = useState(false)
  const [camaraMm, setCamaraMm] = useState<"6" | "9" | "12">("9")

  // --- LÓGICA DE FILTRADO Y CÁLCULO ---
  const availableGlasses = useMemo(() => {
    if (!glassType) return []
    return rawGlassData.map((g, index) => ({ ...g, index })).filter(g => {
      if (glassType === "templado") return !!g["Precio Templado"]
      if (glassType === "dvh") return !!g["Precio para DVH"]
      if (glassType === "laminado") return !!g["Precio para Laminado"]
      if (glassType === "espejos") return g["Nombre vidrio"].toUpperCase().includes("ESPEJO")
      return !!g["precio para crudo"]
    })
  }, [glassType])

  const result = useMemo(() => {
    if (!glassType || mainGlassIndex === "" || !width || !height) return null
    const w = parseFloat(width)
    const h = parseFloat(height)
    const q = parseInt(quantity)
    if (isNaN(w) || isNaN(h) || q <= 0) return null

    const options: CalculationOptions = {
      urgent,
      calados: parseInt(calados) || 0,
      pasaVoz,
      puntasRedondeadas,
      camaraMm: parseInt(camaraMm) as any,
      vidrioSecundarioIndex: secondGlassIndex !== "" ? parseInt(secondGlassIndex) : undefined
    }

    return calculatePrice(glassType, parseInt(mainGlassIndex), w, h, q, options)
  }, [glassType, mainGlassIndex, secondGlassIndex, width, height, quantity, urgent, calados, pasaVoz, puntasRedondeadas, camaraMm])

  const isFormValid = !!result && ((glassType === "dvh" || glassType === "laminado") ? secondGlassIndex !== "" : true)

  // --- MANEJADORES ---
  const handleCalculate = () => { if (isFormValid) setStep("result") }
  const handleSendConsulta = () => setStep("thanks")
  const handleReset = () => {
    setGlassType("")
    setMainGlassIndex("")
    setSecondGlassIndex("")
    setWidth("")
    setHeight("")
    setQuantity("1")
    setUrgent(false)
    setCalados("0")
    setPasaVoz(false)
    setPuntasRedondeadas(false)
    setStep("form")
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* HEADER ORIGINAL */}
      <header className="bg-accent border-b border-[#1a1c6e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
                <rect width="32" height="32" rx="4" fill="#0F49B5" />
                <path d="M8 8h16v2H17v14h-2V10H8V8z" fill="white" />
              </svg>
              <span className="text-lg font-bold tracking-tight text-accent-foreground font-mono">TEMPLARIS</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm font-medium text-accent-foreground/70 transition-colors hover:text-accent-foreground">
              <ArrowLeft className="h-4 w-4" /> Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* TÍTULO DE PÁGINA */}
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0 font-medium">Cotizador online</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-mono text-balance">Cotiza tu vidrio</h1>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Selecciona el tipo de vidrio, adicionales y medidas para obtener un presupuesto aproximado.
          </p>
        </div>

        {/* STEP 1: FORMULARIO */}
        {step === "form" && (
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col gap-6">

              {/* Tipo de Vidrio */}
              <div className="flex flex-col gap-2">
                <Label className="flex items-center gap-2 text-sm font-semibold"><Layers className="h-4 w-4 text-primary" /> Tipo de vidrio</Label>
                <Select value={glassType} onValueChange={(val) => { setGlassType(val as GlassType); setMainGlassIndex(""); setSecondGlassIndex(""); }}>
                  <SelectTrigger className="h-12 bg-background"><SelectValue placeholder="Selecciona un tipo" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crudo">Vidrio Crudo / Común</SelectItem>
                    <SelectItem value="templado">Vidrio Templado</SelectItem>
                    <SelectItem value="dvh">DVH (Doble Vidriado)</SelectItem>
                    <SelectItem value="laminado">Vidrio Laminado (Armado)</SelectItem>
                    <SelectItem value="espejos">Espejos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Selección de Vidrios Dinámica */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-semibold">{glassType === "dvh" ? "Vidrio Interior" : glassType === "laminado" ? "Vidrio Base" : "Espesor y Color"}</Label>
                  <Select value={mainGlassIndex} onValueChange={setMainGlassIndex} disabled={!glassType}>
                    <SelectTrigger className="h-12 bg-background"><SelectValue placeholder="Seleccionar..." /></SelectTrigger>
                    <SelectContent>
                      {availableGlasses.map((g) => (
                        <SelectItem key={g.index} value={g.index.toString()}>{g["Nombre vidrio"]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {(glassType === "dvh" || glassType === "laminado") && (
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold">{glassType === "dvh" ? "Vidrio Exterior" : "Vidrio de Refuerzo"}</Label>
                    <Select value={secondGlassIndex} onValueChange={setSecondGlassIndex}>
                      <SelectTrigger className="h-12 bg-background"><SelectValue placeholder="Seleccionar..." /></SelectTrigger>
                      <SelectContent>
                        {availableGlasses.map((g) => (
                          <SelectItem key={g.index} value={g.index.toString()}>{g["Nombre vidrio"]}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Medidas y Cantidad */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-semibold">Ancho (mm)</Label>
                  <Input type="number" placeholder="Ej: 1200" value={width} onChange={(e) => setWidth(e.target.value)} className="h-12 bg-background" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-semibold">Alto (mm)</Label>
                  <Input type="number" placeholder="Ej: 800" value={height} onChange={(e) => setHeight(e.target.value)} className="h-12 bg-background" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-semibold">Cantidad</Label>
                  <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="h-12 bg-background" />
                </div>
              </div>

              {/* Adicionales (Templado / DVH / Urgencia) */}
              <Separator />
              <div className="grid gap-4 sm:grid-cols-2">
                {glassType === "templado" && (
                  <div className="p-4 rounded-lg border bg-secondary/20 space-y-3">
                    <Label className="text-xs font-bold uppercase text-primary">Adicionales Templado</Label>
                    <div className="flex items-center gap-3">
                      <Input type="number" className="w-16 h-9" value={calados} onChange={(e) => setCalados(e.target.value)} />
                      <span className="text-sm">Calados ($1.500 c/u)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="pasavoz" checked={pasaVoz} onCheckedChange={(v) => setPasaVoz(!!v)} />
                      <label htmlFor="pasavoz" className="text-sm cursor-pointer">Pasa voz ($8.320)</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="puntas" checked={puntasRedondeadas} onCheckedChange={(v) => setPuntasRedondeadas(!!v)} />
                      <label htmlFor="puntas" className="text-sm cursor-pointer">Puntas redondeadas ($5.200)</label>
                    </div>
                  </div>
                )}

                {glassType === "dvh" && (
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-semibold">Espesor de Cámara</Label>
                    <Select value={camaraMm} onValueChange={(v: any) => setCamaraMm(v)}>
                      <SelectTrigger className="h-12 bg-background"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">Cámara de 6mm</SelectItem>
                        <SelectItem value="9">Cámara de 9mm</SelectItem>
                        <SelectItem value="12">Cámara de 12mm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="flex items-center gap-3 p-4 rounded-lg border border-primary/20 bg-primary/5 sm:col-span-1">
                  <Checkbox id="urgent" checked={urgent} onCheckedChange={(v) => setUrgent(!!v)} />
                  <label htmlFor="urgent" className="text-sm font-bold text-primary flex items-center gap-2 cursor-pointer">
                    <Clock className="h-4 w-4" /> Entrega 24/48hs (+50%)
                  </label>
                </div>
              </div>

              {/* Vista Previa del Precio */}
              {result && (
                <div className="rounded-lg bg-secondary p-4 border border-border">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      <p>Área: {result.areaM2.toFixed(2)} m² {result.areaM2 < 0.5 && "(Mín. 0.5m²)"}</p>
                      <p>Precio unitario: {formatARS(result.unitPrice)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-primary uppercase">Subtotal</p>
                      <p className="text-2xl font-bold font-mono">{formatARS(result.totalPrice)}</p>
                    </div>
                  </div>
                </div>
              )}

              <Button size="lg" className="h-12 text-base font-semibold" disabled={!isFormValid} onClick={handleCalculate}>
                <Calculator className="h-5 w-5 mr-2" /> Calcular precio final
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: RESULTADO DETALLADO */}
        {step === "result" && result && (
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
                <CheckCircle2 className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground font-mono">Presupuesto Estimado</h2>
            </div>

            <div className="rounded-lg bg-secondary p-5 border border-border mb-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tipo</span>
                <span className="font-medium uppercase">{glassType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Medidas</span>
                <span className="font-medium">{width} x {height} mm</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-3 text-base">
                <span>TOTAL ({quantity} un.)</span>
                <span className="text-primary text-2xl font-mono">{formatARS(result.totalPrice)}</span>
              </div>
              <span>Precio sin IVA</span>
            </div>

            <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 mb-6 text-sm text-foreground/80 leading-relaxed">
              <Info className="h-4 w-4 inline mr-2 mb-1 text-primary" />
              <strong>Nota:</strong> Este precio incluye bordes pulidos y recargos por dimensiones.
              Es un valor orientativo sujeto a revisión técnica.
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="flex-1 h-12" onClick={handleSendConsulta}><SendHorizonal className="h-5 w-5 mr-2" /> Enviar consulta</Button>
              <Button size="lg" variant="outline" className="flex-1 h-12" onClick={handleReset}>Nueva cotización</Button>
            </div>
          </div>
        )}

        {/* STEP 3: GRACIAS */}
        {step === "thanks" && (
          <div className="rounded-xl border border-border bg-card p-8 sm:p-12 shadow-sm text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground font-mono mb-3">Solicitud Enviada</h2>
            <p className="text-muted-foreground mb-8">Un asesor comercial se contactará con vos en menos de 24hs para formalizar el presupuesto.</p>
            <Button size="lg" onClick={handleReset}>Volver a cotizar</Button>
          </div>
        )}

        {/* EXTRA INFO CARDS ORIGINALES */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Respuesta rápida", desc: "Nos comunicamos en menos de 24hs hábiles." },
            { title: "Sin compromiso", desc: "Cotiza todas las veces que necesites, sin costo." },
            { title: "Asesoramiento", desc: "Nuestro equipo te ayuda a elegir el vidrio ideal." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-4 text-center">
              <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER ORIGINAL */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col items-center justify-between gap-3 sm:flex-row text-sm text-muted-foreground">
          <p>Templaris. Todos los derechos reservados.</p>
          <Link href="/" className="text-primary font-medium hover:underline">Volver al sitio principal</Link>
        </div>
      </footer>
    </div>
  )
}
