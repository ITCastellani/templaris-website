import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MissionVision } from "@/components/mission-vision"
import { Products } from "@/components/products"
import { Services } from "@/components/services"
import { Values } from "@/components/values"
import { Audience } from "@/components/audience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Products />
        <Services />
        <Values />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
