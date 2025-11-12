"use client"

import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <>
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/modern-city-skyline-waterfront-professional-corpor.jpg" alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo simulado */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">C</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
