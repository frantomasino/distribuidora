import { Header } from "@/components/header"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <CTA />
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
