import Image from "next/image"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/dance.jpg"
              alt="Aeropuerto Dance Studio"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold">
              Aeropuerto <span className="text-primary">Dance Studio</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/aeropuertodancestudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/p/Aeropuerto-Dance-Studio-100089313343386/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@aeropuertodancestudio5750"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aeropuerto Dance Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
