import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
