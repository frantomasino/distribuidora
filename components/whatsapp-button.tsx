"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Cambia este número por el de tu consultora
    const phoneNumber = "5491112345678"
    const message = "Hola! Me gustaría obtener más información sobre sus servicios."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </button>
  )
}
