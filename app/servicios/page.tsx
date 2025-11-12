import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
