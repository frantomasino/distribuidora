"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  const lastScroll = useRef(0)
  const { t } = useLanguage()

  // 🔥 Lógica para ocultar y mostrar el navbar
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      if (current > lastScroll.current && current > 80) {
        // bajando → ocultar
        setVisible(false)
      } else {
        // subiendo → mostrar
        setVisible(true)
      }

      lastScroll.current = current
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 bg-background border-b border-border 
        transition-transform duration-300 
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">D</span>
            </div>
            <span className="text-xl font-bold text-foreground uppercase tracking-wide">
              Distribuidora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium uppercase tracking-wide hover:text-accent">
              Inicio
            </Link>
            <Link href="/quienes-somos" className="text-sm font-medium uppercase tracking-wide hover:text-accent">
              {t.nav.about}
            </Link>
            <Link href="/servicios" className="text-sm font-medium uppercase tracking-wide hover:text-accent">
              {t.nav.services}
            </Link>
            <Link href="/enfoque" className="text-sm font-medium uppercase tracking-wide hover:text-accent">
              {t.nav.approach}
            </Link>
            <Link href="/clientes" className="text-sm font-medium uppercase tracking-wide hover:text-accent">
              {t.nav.clients}
            </Link>
            <Link href="/contacto" className="text-sm font-medium uppercase tracking-wide hover:text-accent">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase hover:text-accent">
                Inicio
              </Link>
              <Link href="/quienes-somos" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase hover:text-accent">
                {t.nav.about}
              </Link>
              <Link href="/servicios" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase hover:text-accent">
                {t.nav.services}
              </Link>
              <Link href="/enfoque" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase hover:text-accent">
                {t.nav.approach}
              </Link>
              <Link href="/clientes" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase hover:text-accent">
                {t.nav.clients}
              </Link>
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase hover:text-accent">
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
