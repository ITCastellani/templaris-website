"use client"

import { useState, useMemo } from "react"
import { ArrowLeft, Ruler, Layers, Hash, Calculator, CheckCircle2, SendHorizonal, Clock, ShieldCheck, Info, Trash2, Plus } from "lucide-react"
import Link from "next/link"
import { TemplarisLogo } from "@/components/templaris-logo" // Usamos tu nuevo componente corregido
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

type Step = "form" | "thanks"

interface QuoteItem {
  id: string;
  description: string;
  details: string;
  price: number;
  quantity: number;
}

export function QuoteForm() {
	// --- ESTADOS DEL FORMULARIO ACTUAL ---
	const [glassType, setGlassType] = useState<GlassType | "">("")
	const [mainGlassIndex, setMainGlassIndex] = useState<string>("")
	const [secondGlassIndex, setSecondGlassIndex] = useState<string>("")
	const [width, setWidth] = useState("")
	const [height, setHeight] = useState("")
	const [quantity, setQuantity] = useState("1")
	
	// Opciones adicionales
	const [urgent, setUrgent] = useState(false)
	const [bordePulido, setBordePulido] = useState(false)
	const [calados, setCalados] = useState("0")
	const [pasaVoz, setPasaVoz] = useState(false)
	const [puntasRedondeadas, setPuntasRedondeadas] = useState(false)
	const [camaraMm, setCamaraMm] = useState<"6" | "9" | "12">("9")

	// --- ESTADO DE LA LISTA DE COTIZACIÓN (CARRITO) ---
	const [items, setItems] = useState<QuoteItem[]>([])
	const [step, setStep] = useState<Step>("form")

	// --- LÓGICA DE FILTRADO ---
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

	// Cálculo en tiempo real para la vista previa
	const currentCalculation = useMemo(() => {
		if (!glassType || mainGlassIndex === "" || !width || !height) return null
		const w = parseFloat(width); const h = parseFloat(height); const q = parseInt(quantity)
		if (isNaN(w) || isNaN(h) || q <= 0) return null

		const options: CalculationOptions = {
		urgent, bordePulido, calados: parseInt(calados) || 0, pasaVoz, puntasRedondeadas,
		camaraMm: parseInt(camaraMm) as any,
		vidrioSecundarioIndex: secondGlassIndex !== "" ? parseInt(secondGlassIndex) : undefined
		}

		return calculatePrice(glassType, parseInt(mainGlassIndex), w, h, q, options)
	}, [glassType, mainGlassIndex, secondGlassIndex, width, height, quantity, urgent, bordePulido, calados, pasaVoz, puntasRedondeadas, camaraMm])

	const isFormValid = !!currentCalculation && ((glassType === "dvh" || glassType === "laminado") ? secondGlassIndex !== "" : true)

	// --- MANEJADORES ---
	const addItem = () => {
		if (!currentCalculation) return
		const mainG = rawGlassData[parseInt(mainGlassIndex)]
		
		const newItem: QuoteItem = {
		id: Math.random().toString(36).substr(2, 9),
		description: mainG["Nombre vidrio"],
		details: `${width}x${height}mm | ${glassType.toUpperCase()} ${urgent ? '(Urgente)' : ''}`,
		price: currentCalculation.unitPrice,
		quantity: parseInt(quantity)
		}
		setItems([...items, newItem])
		// Limpiar campos para el siguiente vidrio (opcional, dejamos medidas para rapidez)
		setQuantity("1")
	}

	const removeItem = (id: string) => setItems(items.filter(i => i.id !== id))
	
	const totalQuote = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

	const handleSendConsulta = () => setStep("thanks")

	return (
		<div className="min-h-screen bg-secondary/30">
			<header className="bg-accent border-b border-[#1a1c6e]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between lg:h-20">
					<Link href="/" className="flex items-center gap-2">
					<TemplarisLogo className="w-40 h-auto" />
					</Link>
					<Link href="/" className="flex items-center gap-2 text-sm font-medium text-accent-foreground/70 hover:text-accent-foreground">
					<ArrowLeft className="h-4 w-4" /> Inicio
					</Link>
				</div>
				</div>
			</header>

			<main className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
				{step === "form" ? (
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					
					{/* COLUMNA IZQUIERDA: CONFIGURADOR */}
					<div className="lg:col-span-7 space-y-6">
					<div className="bg-card rounded-xl border p-6 shadow-sm space-y-6">
						<div className="flex items-center gap-2 border-b pb-4">
						<Plus className="text-primary h-5 w-5" />
						<h2 className="font-bold font-mono text-lg">Configurar Vidrio</h2>
						</div>

						<div className="grid gap-6">
						{/* Tipo y Vidrio Principal */}
						<div className="grid sm:grid-cols-2 gap-4">
							<div className="space-y-2">
							<Label className="text-xs font-bold uppercase text-muted-foreground">Tipo</Label>
							<Select value={glassType} onValueChange={(val) => { setGlassType(val as GlassType); setMainGlassIndex(""); setSecondGlassIndex(""); }}>
								<SelectTrigger className="bg-background"><SelectValue placeholder="Selecciona..." /></SelectTrigger>
								<SelectContent>
								<SelectItem value="crudo">Crudo</SelectItem>
								<SelectItem value="templado">Templado</SelectItem>
								<SelectItem value="dvh">DVH</SelectItem>
								<SelectItem value="laminado">Laminado</SelectItem>
								<SelectItem value="espejos">Espejo</SelectItem>
								</SelectContent>
							</Select>
							</div>
							<div className="space-y-2">
							<Label className="text-xs font-bold uppercase text-muted-foreground">Vidrio Principal</Label>
							<Select value={mainGlassIndex} onValueChange={setMainGlassIndex} disabled={!glassType}>
								<SelectTrigger><SelectValue placeholder="Espesor/Color" /></SelectTrigger>
								<SelectContent>
								{availableGlasses.map((g) => (
									<SelectItem key={g.index} value={g.index.toString()}>{g["Nombre vidrio"]}</SelectItem>
								))}
								</SelectContent>
							</Select>
							</div>

							{/* Vidrio Secundario / Cámara */}
							{(glassType === "dvh" || glassType === "laminado") && (
								<div className="grid sm:grid-cols-2 gap-4 animate-in fade-in duration-300">
								<div className="space-y-2">
									<Label className="text-xs font-bold uppercase text-muted-foreground">Vidrio Secundario</Label>
									<Select value={secondGlassIndex} onValueChange={setSecondGlassIndex}>
									<SelectTrigger><SelectValue placeholder="Seleccionar..." /></SelectTrigger>
									<SelectContent>
										{availableGlasses.map((g) => (
										<SelectItem key={g.index} value={g.index.toString()}>{g["Nombre vidrio"]}</SelectItem>
										))}
									</SelectContent>
									</Select>
								</div>
								{glassType === "dvh" && (
									<div className="space-y-2">
									<Label className="text-xs font-bold uppercase text-muted-foreground">Cámara</Label>
									<Select value={camaraMm} onValueChange={(v: any) => setCamaraMm(v)}>
										<SelectTrigger><SelectValue /></SelectTrigger>
										<SelectContent>
										<SelectItem value="6">6mm</SelectItem>
										<SelectItem value="9">9mm</SelectItem>
										<SelectItem value="12">12mm</SelectItem>
										</SelectContent>
									</Select>
									</div>
								)}
								</div>
							)}
						</div>

						{/* Medidas */}
						<div className="grid grid-cols-3 gap-4">
							<div className="space-y-2">
							<Label className="text-xs font-bold uppercase text-muted-foreground">Ancho (mm)</Label>
							<Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
							</div>
							<div className="space-y-2">
							<Label className="text-xs font-bold uppercase text-muted-foreground">Alto (mm)</Label>
							<Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
							</div>
							<div className="space-y-2">
							<Label className="text-xs font-bold uppercase text-muted-foreground">Cant.</Label>
							<Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
							</div>
						</div>

						

						{/* Adicionales */}
						<div className="p-4 bg-secondary/40 rounded-lg grid sm:grid-cols-2 gap-4">
							<div className="space-y-3">
							<div className="flex items-center gap-2">
								<Checkbox id="urgent" checked={urgent} onCheckedChange={(v) => setUrgent(!!v)} />
								<label htmlFor="urgent" className="text-sm font-medium leading-none cursor-pointer">Entrega Urgente (+50%)</label>
								<Checkbox id="bordePulido" checked={bordePulido} onCheckedChange={(v) => setBordePulido(!!v)} />
								<label htmlFor="bordePulido" className="text-sm font-medium leading-none cursor-pointer">Borde Pulido</label>
							</div>
							{glassType === "templado" && (
								<>
								<div className="flex items-center gap-2">
									<Checkbox id="pasavoz" checked={pasaVoz} onCheckedChange={(v) => setPasaVoz(!!v)} />
									<label htmlFor="pasavoz" className="text-sm cursor-pointer">Pasa voz</label>
								</div>
								<div className="flex items-center gap-2">
									<Checkbox id="puntas" checked={puntasRedondeadas} onCheckedChange={(v) => setPuntasRedondeadas(!!v)} />
									<label htmlFor="puntas" className="text-sm cursor-pointer">Puntas redondeadas</label>
								</div>
								</>
							)}
							</div>
							{glassType === "templado" && (
							<div className="flex flex-col gap-2">
								<Label className="text-xs">Cant. de Calados</Label>
								<Input type="number" className="h-8 w-20" value={calados} onChange={(e) => setCalados(e.target.value)} />
							</div>
							)}
						</div>
						</div>

						<Button size="lg" className="w-full font-bold" disabled={!isFormValid} onClick={addItem}>
						<Plus className="h-5 w-5 mr-2" /> Agregar a la lista
						</Button>
					</div>
					</div>

					{/* COLUMNA DERECHA: LISTA DE PRODUCTOS */}
					<div className="lg:col-span-5 space-y-6">
					<div className="bg-card rounded-xl border shadow-md flex flex-col h-full overflow-hidden">
						<div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
						<h3 className="font-bold font-mono">Resumen del Presupuesto</h3>
						<Badge variant="outline" className="text-white border-white">{items.length} items</Badge>
						</div>
						
						<div className="flex-1 p-4 max-h-[400px] overflow-y-auto">
						{items.length === 0 ? (
							<div className="h-40 flex flex-col items-center justify-center text-muted-foreground gap-2">
							<Calculator className="h-8 w-8 opacity-20" />
							<p className="text-sm">Aún no hay vidrios agregados</p>
							</div>
						) : (
							<div className="space-y-4">
							{items.map((item) => (
								<div key={item.id} className="flex justify-between items-start border-b pb-3 group">
								<div className="space-y-1">
									<p className="font-bold text-sm leading-none">{item.description}</p>
									<p className="text-[11px] text-muted-foreground">{item.details}</p>
									<p className="text-xs font-semibold">{item.quantity} un. x {formatARS(item.price)}</p>
								</div>
								<div className="flex items-center gap-3">
									<span className="font-mono font-bold text-sm">{formatARS(item.price * item.quantity)}</span>
									<button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
									<Trash2 className="h-4 w-4" />
									</button>
								</div>
								</div>
							))}
							</div>
						)}
						</div>

						<div className="p-5 bg-secondary/50 border-t">
						<div className="flex justify-between items-end mb-6">
							<div>
							<p className="text-[10px] font-bold uppercase text-muted-foreground">Total Estimado</p>
							<p className="text-xs text-muted-foreground">Precios sin IVA</p>
							</div>
							<p className="text-3xl font-bold font-mono text-primary">{formatARS(totalQuote)}</p>
						</div>
						<Button className="w-full h-12 text-base font-bold" disabled={items.length === 0} onClick={handleSendConsulta}>
							<SendHorizonal className="h-5 w-5 mr-2" /> Enviar Consulta Final
						</Button>
						</div>
					</div>

					<div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex gap-3">
						<Info className="h-5 w-5 text-blue-500 shrink-0" />
						<p className="text-xs text-blue-700 leading-relaxed">
						Los precios son orientativos y pueden variar según la complejidad técnica del trabajo.
						</p>
					</div>
					</div>

				</div>
				) : (
				<div className="max-w-md mx-auto rounded-xl border border-border bg-card p-8 sm:p-12 shadow-sm text-center">
					<div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
					<ShieldCheck className="h-8 w-8 text-primary" />
					</div>
					<h2 className="text-2xl font-bold text-foreground font-mono mb-3">Solicitud Enviada</h2>
					<p className="text-muted-foreground mb-8">Hemos recibido tu lista de {items.length} vidrios. Un asesor te contactará en breve.</p>
					<Button size="lg" className="w-full" onClick={() => { setStep("form"); setItems([]); }}>Nueva Cotización</Button>
				</div>
				)}
			</main>

			<footer className="border-t border-border bg-card py-8 mt-auto text-center text-sm text-muted-foreground">
				<p>Templaris © 2024 | Soluciones Vidrieras de Alta Calidad</p>
			</footer>
		</div>
	)
}