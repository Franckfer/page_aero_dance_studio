"use client"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "+541123153432"
  const message = "Hola! Me interesa información sobre las clases de baile"

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white"
      asChild
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <img src="/whatsapp.svg" alt="Contactar por WhatsApp"></img>
      </a>
    </Button>
  )
}
