"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

export function CTA() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    area: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Formatear mensaje para WhatsApp
    const whatsappMessage = `
*Nueva Consulta*
---
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Empresa:* ${formData.company}
*Área a mejorar:* ${formData.area}
*Mensaje:*
${formData.message}
    `.trim()

    // Número de WhatsApp de la empresa (cambiar por el número real)
    const phoneNumber = "1234567890" // Formato internacional sin +
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">{t.cta.title}</h2>
            <p className="text-lg mb-8 opacity-90 text-pretty leading-relaxed max-w-2xl mx-auto">{t.cta.subtitle}</p>
          </div>

          <div className="max-w-2xl mx-auto bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-lg border border-primary-foreground/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-90">
                    {t.cta.form.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                    placeholder={t.cta.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-90">
                    {t.cta.form.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                    placeholder={t.cta.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 opacity-90">
                  {t.cta.form.company}
                </label>
                <Input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  placeholder={t.cta.form.companyPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium mb-2 opacity-90">
  Categoría
</label>

                <Select
                  value={formData.area}
                  onValueChange={(value) => setFormData({ ...formData, area: value })}
                  required
                >
                  <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                    <SelectValue placeholder={t.cta.form.areaPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="snacks">Snacks</SelectItem>
  <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-90">
                  {t.cta.form.message}
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 min-h-[120px]"
                  placeholder={t.cta.form.messagePlaceholder}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium py-6"
              >
                {t.cta.form.submit}
              </Button>
            </form>

            <p className="text-sm mt-6 text-center opacity-75">{t.cta.phone}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
