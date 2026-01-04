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
          <a
            href="https://www.google.com/maps/place/Aeropuerto+Dance+Studio/@-34.7130086,-58.4149432,3a,75y,154.42h,88.92t/data=!3m7!1e1!3m5!1sw69SSDwP9JkW2IsIF4jT4g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D1.0760962668000644%26panoid%3Dw69SSDwP9JkW2IsIF4jT4g%26yaw%3D154.41604787383835!7i16384!8i8192!4m6!3m5!1s0x95bccd1823e81b2d:0x5736d7348cf7e5c2!8m2!3d-34.7131524!4d-58.4148168!16s%2Fg%2F11kbg5znfq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg hover:scale-[1.01] transition cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>

            <h3 className="font-semibold mb-2">Ubicación</h3>

            <p className="text-sm text-muted-foreground">
              M. González Balcarce 3624, Remedios de Escalada
            </p>
          </a>

          <a
            href="tel:+541123153432"
            className="block bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg hover:scale-[1.01] transition cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>

            <h3 className="font-semibold mb-2">Teléfono</h3>
            <p className="text-sm text-muted-foreground">
              11 2315 3432
            </p>
          </a>

          <a
            href="mailto:aeropuertodancestudio@gmail.com"
            className="block bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg hover:scale-[1.01] transition cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>

            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">
              aeropuertodancestudio@gmail.com
            </p>
          </a>
        </div>

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
