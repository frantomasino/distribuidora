"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded" />
              <span className="text-lg font-semibold text-foreground">{t.footer.company}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Impulsando el crecimiento de PYMEs desde 2010
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.nav.services}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  {t.services.service1.title}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  {t.services.service2.title}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  {t.services.service3.title}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  {t.services.service4.title}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#quienes-somos" className="hover:text-foreground transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#enfoque" className="hover:text-foreground transition-colors">
                  {t.nav.approach}
                </a>
              </li>
              <li>
                <a href="#clientes" className="hover:text-foreground transition-colors">
                  {t.nav.clients}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>distriuidora@hotmail.com</li>
              <li>+34 900 123 456</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 {t.footer.company}. {t.footer.copyright}
          </p>
           
        </div>
      </div>
    </footer>
  )
}
