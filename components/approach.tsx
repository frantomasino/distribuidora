"use client"

import { useLanguage } from "@/lib/language-context"
import { CheckCircle2 } from "lucide-react"

export function Approach() {
  const { t } = useLanguage()

  const capacitamos = [
    "Identificar problemas medulares de tu negocio",
    "Construir soluciones efectivas y sostenibles",
    "Estimar el impacto global de decisiones estratégicas",
    "Resolver conflictos organizacionales",
    "Verificar supuestos y validar hipótesis",
    "Implementar mejora continua en todos los procesos",
  ]

  const objetivos = [
    "Liberar capacidad oculta en tu organización",
    "Asegurar y aumentar el flujo de valor",
    "Controlar y optimizar gastos operativos",
    "Mantener inventarios bajo control",
    "Elevar niveles de cumplimiento y calidad",
    "Acortar plazos de ejecución y entrega",
    "Mejorar las relaciones entre equipos",
    "Aumentar la satisfacción de clientes y colaboradores",
  ]

  return (
    <section id="enfoque" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t.approach.title}</h2>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <div className="h-3 bg-accent mb-1"></div>
          <div className="h-3 bg-primary"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Columna izquierda: CAPACITAMOS */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 uppercase">Capacitamos:</h3>
            <ul className="space-y-4">
              {capacitamos.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha: CON EL OBJETIVO DE */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 uppercase">Con el objetivo de:</h3>
            <ul className="space-y-4">
              {objetivos.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
