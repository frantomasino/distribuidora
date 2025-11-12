"use client"

import { useLanguage } from "@/lib/language-context"

export function Stats() {
  const { t } = useLanguage()

  const stats = [
    { number: "150+", label: t.stats.title1 },
    { number: "85%", label: t.stats.title2 },
    { number: "98%", label: t.stats.title3 },
    { number: "15+", label: t.stats.title4 },
  ]

  return (
    <section id="resultados" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-4xl lg:text-5xl text-foreground mb-2">{stat.number}</div>
              <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
