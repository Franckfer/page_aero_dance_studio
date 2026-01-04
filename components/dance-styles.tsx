import { Card, CardContent } from "@/components/ui/card"

const danceStyles = [
  {
    name: "Reggaetón",
    description: "Movimientos sensuales y urbanos con la mejor música latina.",
    // image: "/reggaeton-dance-class-urban.jpg",
    image: "/sole-reggaeton.jpg",
  },
  {
    name: "Dancehall",
    description: "Energía jamaiquina con pasos explosivos y ritmo contagioso.",
    image: "/dancehall-dance-class-jamaican.jpg",
  },
  {
    name: "Hip Hop",
    description: "Estilo urbano con coreografías modernas y mucho flow.",
    image: "/hip-hop-dance-class-urban.jpg",
  },
  {
    name: "Bachata",
    description: "Baile en pareja con movimientos sensuales y románticos.",
    image: "/bachata-dance-couple-romantic.jpg",
  },
  {
    name: "Salsa",
    description: "Ritmo latino tradicional con giros y pasos dinámicos.",
    image: "/salsa-dance-class-latin.jpg",
  },
  {
    name: "Afro Dance",
    description: "Conexión con raíces africanas a través del movimiento.",
    image: "/afro-dance-class-african.jpg",
  },
]

export function DanceStyles() {
  return (
    <section id="clases" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-primary">Estilos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra variedad de clases y encuentra el estilo que mejor se adapte a ti. Todos los niveles son
            bienvenidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {danceStyles.map((style, index) => (
            <Card
              key={style.name}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* <div className="relative h-48 overflow-hidden"> */}
              <div className="relative h-90 overflow-hidden">
                <img
                  src={style.image || "/placeholder.svg"}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{style.name}</h3>
                <p className="text-muted-foreground text-sm">{style.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
