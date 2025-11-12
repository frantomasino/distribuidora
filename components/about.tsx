"use client"

import { useLanguage } from "@/lib/language-context"
import { Target, Eye } from "lucide-react"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="quienes-somos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.about.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.about.description1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.about.description2}</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.about.mission}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.about.missionText}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.about.vision}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.about.visionText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
