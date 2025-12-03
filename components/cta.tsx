"use client"

import { useLanguage } from "@/lib/language-context"

export function CTA() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              {t.cta.title}
            </h2>

            <p className="text-lg mb-8 opacity-90 text-pretty leading-relaxed max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
          </div>

          {/* Contenedor visual del CTA sin formulario */}
          <div className="max-w-2xl mx-auto bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-lg border border-primary-foreground/10">
            <p className="text-center text-primary-foreground/80 text-lg">
              {t.cta.phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
