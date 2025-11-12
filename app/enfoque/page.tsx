import { Header } from "@/components/header"
import { Approach } from "@/components/approach"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function EnfoquePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Approach />
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
