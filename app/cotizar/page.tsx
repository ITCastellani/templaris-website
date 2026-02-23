import { Metadata } from "next"
import { QuoteForm } from "@/components/quote-form"

export const metadata: Metadata = {
  title: "Cotizar Vidrios | Templaris",
  description:
    "Cotiza vidrio templado, laminado, crudo, DVH y espejos al instante. Precios orientativos para tu proyecto de arquitectura y construccion.",
}

export default function CotizarPage() {
  return <QuoteForm />
}
