"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export function Clients() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  const cases = [
    {
      company: t.clients.case1.company,
      industry: t.clients.case1.industry,
      result: t.clients.case1.result,
      testimonial: t.clients.case1.testimonial,
    },
    {
      company: t.clients.case2.company,
      industry: t.clients.case2.industry,
      result: t.clients.case2.result,
      testimonial: t.clients.case2.testimonial,
    },
    {
      company: t.clients.case3.company,
      industry: t.clients.case3.industry,
      result: t.clients.case3.result,
      testimonial: t.clients.case3.testimonial,
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left"
          ? scrollRef.current.scrollLeft - 400
          : scrollRef.current.scrollLeft + 400
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="clientes" className="py-20 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            {t.clients.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t.clients.subtitle}
          </p>
        </div>

        {/* Contenedor con scroll */}
        <div className="relative">
          {/* Botón izquierdo */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-md rounded-full p-2 border border-border hover:bg-accent/10 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Lista deslizable */}
          <div
            ref={scrollRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {cases.map((clientCase, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[380px] lg:w-[420px] border-border hover:border-accent transition-colors"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {clientCase.company}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {clientCase.industry}
                  </p>

                  <div className="bg-accent/5 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold text-accent">
                      {clientCase.result}
                    </p>
                  </div>

                  <div className="relative">
                    <Quote className="w-6 h-6 text-accent/20 mb-2" />
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{clientCase.testimonial}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Botón derecho */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-md rounded-full p-2 border border-border hover:bg-accent/10 transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
