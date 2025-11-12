"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">D</span>
            </div>
            <span className="text-xl font-bold text-foreground uppercase tracking-wide">Distribuidora</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wide"
            >
              Inicio
            </Link>
            <Link
              href="/quienes-somos"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wide"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wide"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/enfoque"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wide"
            >
              {t.nav.approach}
            </Link>
            <Link
              href="/clientes"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wide"
            >
              {t.nav.clients}
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wide"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/quienes-somos"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/servicios"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="/enfoque"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.approach}
              </Link>
              <Link
                href="/clientes"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.clients}
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>

              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
