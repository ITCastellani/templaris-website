import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/heroPadel"
import { Features } from "@/components/features"
import { Product } from "@/components/productPadel"
import { Stats } from "@/components/stats"
import { Coverage } from "@/components/coverage"
import { Contact } from "@/components/contactPadel"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Product />
      <Coverage />
      <Contact />
      <Footer />
    </main>
  )
}