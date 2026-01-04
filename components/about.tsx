import { Plane, Users, Award, Clock } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Comunidad",
    description: "Un ambiente familiar donde todos son bienvenidos sin importar su nivel.",
  },
  {
    icon: Award,
    title: "Instructores Pro",
    description: "Aprende de bailarines profesionales con años de experiencia.",
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description: "Clases en diferentes horarios para adaptarnos a tu rutina.",
  },
  {
    icon: Plane,
    title: "Eventos",
    description: "Participación en competencias, shows y eventos especiales.",
  },
]

export function About() {
  return (
    // <section id="nosotros" className="py-24">
    <section id="nosotros" className="pt-24 pb-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-primary">Nosotros</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              En <strong>Aeropuerto Dance Studio</strong> creemos que el baile es libertad. Nuestro nombre representa el
              viaje que cada estudiante emprende: despegar de sus límites y volar hacia nuevas metas.
            </p>
            <p className="text-muted-foreground mb-8">
              Desde nuestros inicios, hemos formado una comunidad apasionada por el movimiento. Nuestro equipo de
              instructores profesionales te guiará en cada paso, desde tu primera clase hasta el escenario.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* <div className="aspect-square rounded-2xl overflow-hidden"> */}
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                // src="/dance-studio-interior-modern-with-mirrors-and-danc.jpg"
                src="/clases.jpg"
                // alt="Interior del estudio de baile"
                alt="Clases de baile"
                // className="w-full h-full object-cover"
                className="w-full h-full object-contain"
              />
            </div>
            {/* <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border"> */}
            <div className="absolute bottom-20 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
              <p className="text-4xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground">Años transformando vidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
