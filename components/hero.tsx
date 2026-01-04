import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Plane className="w-32 h-32 text-primary rotate-45" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Plane className="w-24 h-24 text-primary -rotate-12" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <div className="relative">
            <Image
              src="/images/dance.jpg"
              alt="Aeropuerto Dance Studio"
              width={200}
              height={200}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>

          {/* Headline */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Despega tu <span className="text-primary">pasión</span> por el baile
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              En Aeropuerto Dance Studio te llevamos a nuevas alturas. Clases de reggaetón, dancehall, hip hop, bachata
              y mucho más con los mejores instructores.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base px-8" asChild>
              <a href="#clases">Ver Clases</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
              <a
                href="https://wa.me/541123153432?text=Hola!%20Me%20interesa%20información%20sobre%20las%20clases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-8 pt-8 border-t border-border">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground">Años de experiencia</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Estudiantes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Estilos de baile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
