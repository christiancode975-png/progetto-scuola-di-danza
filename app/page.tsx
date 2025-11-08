"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center space-y-10 reveal">
            <div className="inline-block px-6 py-3 glass-card rounded-full text-sm font-semibold text-primary mb-4">
              ✨ La Piattaforma Leader in Italia
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight px-4">
              Scopri il Mondo della{" "}
              <span className="gradient-text">Danza</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
              Trova la scuola perfetta, prenota lezioni con maestri professionisti e inizia il tuo viaggio nella danza. 50+ scuole in tutta Italia ti aspettano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 px-4">
              <Link href="/sedi">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold px-10 py-7 text-lg magnetic-btn btn-shine shadow-xl shadow-primary/20"
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
                  variant="ghost"
                  className="w-full sm:w-auto glass-card glass-hover text-white font-semibold px-10 py-7 text-lg border-2 border-white/30"
                >
                  Prenota una Lezione
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-16 max-w-4xl mx-auto px-4">
              <div className="glass-card rounded-2xl p-8 glass-hover">
                <div className="text-5xl sm:text-6xl font-bold gradient-text mb-2">50+</div>
                <div className="text-base sm:text-lg text-white/70 font-medium">Scuole Partner</div>
              </div>
              <div className="glass-card rounded-2xl p-8 glass-hover">
                <div className="text-5xl sm:text-6xl font-bold gradient-text mb-2">20</div>
                <div className="text-base sm:text-lg text-white/70 font-medium">Regioni</div>
              </div>
              <div className="glass-card rounded-2xl p-8 glass-hover">
                <div className="text-5xl sm:text-6xl font-bold gradient-text mb-2">100+</div>
                <div className="text-base sm:text-lg text-white/70 font-medium">Maestri</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-28 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 px-4">
              Perché Scegliere <span className="gradient-text">DanzaItalia</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
              La piattaforma più completa e innovativa per la danza in Italia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="glass-card glass-hover rounded-3xl p-10 reveal flex flex-col h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Scuole Ovunque</h3>
              <p className="text-white/70 leading-relaxed text-base sm:text-lg flex-grow">
                50+ scuole verificate in tutte le 20 regioni italiane. Mappa interattiva per trovare la scuola più vicina a te in pochi secondi.
              </p>
            </div>

            <div className="glass-card glass-hover rounded-3xl p-10 reveal flex flex-col h-full" style={{ transitionDelay: '100ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-secondary/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Booking Istantaneo</h3>
              <p className="text-white/70 leading-relaxed text-base sm:text-lg flex-grow">
                Prenota lezioni in pochi click. Sistema di booking veloce, intuitivo e con conferma immediata. Zero complicazioni.
              </p>
            </div>

            <div className="glass-card glass-hover rounded-3xl p-10 reveal flex flex-col h-full md:col-span-2 lg:col-span-1" style={{ transitionDelay: '200ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-accent/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Maestri Certificati</h3>
              <p className="text-white/70 leading-relaxed text-base sm:text-lg flex-grow">
                Profili completi con recensioni verificate. Solo i migliori maestri professionisti con anni di esperienza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className="py-28 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 px-4">
              Tutti gli <span className="gradient-text">Stili</span> di Danza
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 px-4">
              Trova il corso perfetto per te
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { name: "Classica", emoji: "🩰", color: "from-primary to-primary-light" },
              { name: "Moderna", emoji: "💃", color: "from-secondary to-accent" },
              { name: "Hip-Hop", emoji: "🎵", color: "from-accent to-primary" },
              { name: "Contemporanea", emoji: "🎭", color: "from-primary to-secondary" },
              { name: "Jazz", emoji: "🎺", color: "from-accent to-accent-dark" },
              { name: "Latin", emoji: "🌟", color: "from-primary to-accent" },
              { name: "Breakdance", emoji: "⚡", color: "from-secondary to-primary" },
              { name: "Balletto", emoji: "👗", color: "from-accent to-secondary" },
            ].map((style, index) => (
              <div
                key={style.name}
                className="glass-card glass-hover rounded-3xl p-8 text-center cursor-pointer reveal group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-6xl sm:text-7xl mb-6 transform transition-transform group-hover:scale-125 duration-500">
                  {style.emoji}
                </div>
                <div className="font-bold text-white text-lg sm:text-xl mb-4">{style.name}</div>
                <div className={`h-1.5 w-20 mx-auto rounded-full bg-gradient-to-r ${style.color} transition-all duration-300 group-hover:w-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 px-4">
              Storie di <span className="gradient-text">Successo</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 px-4">
              Cosa dicono i nostri studenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: "Maria R.",
                role: "Studentessa di Danza Classica",
                text: "Grazie a DanzaItalia ho trovato la scuola perfetta a Milano. Il sistema di prenotazione è incredibilmente semplice!",
                rating: 5,
                avatar: "M"
              },
              {
                name: "Luca T.",
                role: "Appassionato di Hip-Hop",
                text: "Piattaforma fantastica! Ho scoperto corsi di hip-hop che non sapevo esistessero nella mia zona. Consigliatissimo!",
                rating: 5,
                avatar: "L"
              },
              {
                name: "Sofia M.",
                role: "Ballerina Professionista",
                text: "Come professionista, apprezzo la qualità delle scuole partner. Ogni maestro è veramente competente e preparato.",
                rating: 5,
                avatar: "S"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card glass-hover rounded-3xl p-10 reveal flex flex-col h-full" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-accent drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed text-base sm:text-lg flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 sm:py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 lg:p-20 text-center reveal relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 px-4">
                Inizia Ora la Tua <span className="gradient-text">Avventura</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                Unisciti a migliaia di studenti che hanno già trovato la loro passione. Registrati gratuitamente e prenota la tua prima lezione.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center px-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold px-10 py-7 text-lg magnetic-btn btn-shine shadow-2xl shadow-primary/40"
                  >
                    Registrati Gratis
                  </Button>
                </Link>
                <Link href="/sedi">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="w-full sm:w-auto glass-card glass-hover text-white font-semibold px-10 py-7 text-lg border-2 border-white/30"
                  >
                    Esplora le Scuole
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
