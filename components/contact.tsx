import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/aeropuertodancestudio/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/p/Aeropuerto-Dance-Studio-100089313343386/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@aeropuertodancestudio5750",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para despegar? Contáctanos y comienza tu viaje en el mundo del baile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Ubicación</h3>
            <p className="text-sm text-muted-foreground">Tu ciudad, Tu país</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Teléfono</h3>
            <p className="text-sm text-muted-foreground">+1 234 567 890</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border text-center md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">aeropuertodancestudio@gmail.com</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Síguenos en redes</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all bg-transparent"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Síguenos en ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
