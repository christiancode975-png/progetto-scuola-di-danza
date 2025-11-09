"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
  useEffect(() => {
    // Reveal animations on scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - Elegant & Minimal */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center space-y-8 reveal">
            <div className="inline-block">
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
                La Piattaforma Leader in Italia
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Dove la{" "}
              <span className="gradient-text">Passione</span>
              <br />
              Incontra la Danza
            </h1>

            <p className="text-xl sm:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light">
              Scopri le migliori scuole di danza in Italia. Prenota lezioni con maestri professionisti e inizia il tuo viaggio artistico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/sedi">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-semibold px-12 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  Esplora le Scuole
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Button>
              </Link>
              <Link href="/prenotazioni">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary/30 text-primary hover:bg-primary/5 font-semibold px-12 py-6 text-lg rounded-full transition-all duration-300"
                >
                  Prenota una Lezione
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section - Elegant */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 reveal">
            <div className="text-center p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl font-bold gradient-text mb-3">50+</div>
              <div className="text-lg text-foreground/70 font-medium">Scuole Partner</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-secondary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl font-bold gradient-text mb-3">20</div>
              <div className="text-lg text-foreground/70 font-medium">Regioni Coperte</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl font-bold gradient-text mb-3">100+</div>
              <div className="text-lg text-foreground/70 font-medium">Maestri Certificati</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Minimal & Clean */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Perché Scegliere <span className="gradient-text">DanzaItalia</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
              La piattaforma più completa per la danza in Italia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 rounded-2xl bg-white/70 backdrop-blur-md border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 reveal">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-primary/20">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Scuole Ovunque</h3>
              <p className="text-foreground/60 leading-relaxed">
                50+ scuole verificate in tutte le regioni italiane. Trova facilmente la scuola più vicina a te.
              </p>
            </div>

            <div className="text-center p-10 rounded-2xl bg-white/70 backdrop-blur-md border border-secondary/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 reveal" style={{ transitionDelay: '100ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-secondary/20">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Prenotazione Facile</h3>
              <p className="text-foreground/60 leading-relaxed">
                Sistema di booking intuitivo con conferma immediata. Prenota in pochi click.
              </p>
            </div>

            <div className="text-center p-10 rounded-2xl bg-white/70 backdrop-blur-md border border-accent/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-accent/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Maestri Professionisti</h3>
              <p className="text-foreground/60 leading-relaxed">
                Solo i migliori insegnanti certificati con anni di esperienza e recensioni verificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Tutti gli <span className="gradient-text">Stili</span> di Danza
            </h2>
            <p className="text-xl text-foreground/60 font-light">
              Trova il corso perfetto per la tua passione
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: "Classica", emoji: "🩰", color: "from-primary to-primary-light" },
              { name: "Moderna", emoji: "💃", color: "from-secondary to-secondary-light" },
              { name: "Hip-Hop", emoji: "🎵", color: "from-accent to-accent-dark" },
              { name: "Contemporanea", emoji: "🎭", color: "from-primary to-secondary" },
              { name: "Jazz", emoji: "🎺", color: "from-secondary to-accent" },
              { name: "Latino", emoji: "🌟", color: "from-primary to-accent" },
              { name: "Breakdance", emoji: "⚡", color: "from-accent to-primary" },
              { name: "Balletto", emoji: "👗", color: "from-secondary to-primary" },
            ].map((style, index) => (
              <div
                key={style.name}
                className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-primary/10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer reveal group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110 duration-300">
                  {style.emoji}
                </div>
                <div className="font-semibold text-foreground text-base mb-3">{style.name}</div>
                <div className={`h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${style.color} transition-all duration-300 group-hover:w-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Elegant */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 shadow-2xl reveal backdrop-blur-sm">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Inizia la Tua <span className="gradient-text">Avventura</span>
            </h2>
            <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto font-light">
              Unisciti a migliaia di studenti che hanno già trovato la loro passione. Registrati gratuitamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-semibold px-12 py-6 text-lg rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
                >
                  Registrati Gratis
                </Button>
              </Link>
              <Link href="/sedi">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary/30 text-primary hover:bg-primary/5 font-semibold px-12 py-6 text-lg rounded-full transition-all duration-300"
                >
                  Scopri le Scuole
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
