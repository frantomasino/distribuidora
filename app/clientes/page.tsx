import { Header } from "@/components/header"
import { Clients } from "@/components/clients"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ClientesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Clients />
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
