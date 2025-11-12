"use client"

import { FileText, TrendingUp, Lightbulb, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: FileText,
      title: t.services.service1.title,
      description: t.services.service1.description,
    },
    {
      icon: TrendingUp,
      title: t.services.service2.title,
      description: t.services.service2.description,
    },
    {
      icon: Lightbulb,
      title: t.services.service3.title,
      description: t.services.service3.description,
    },
    {
      icon: Users,
      title: t.services.service4.title,
      description: t.services.service4.description,
    },
  ]

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
