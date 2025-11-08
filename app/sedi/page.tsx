"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MappaItalia } from "@/components/sedi/mappa-italia"
import scuoleData from "@/data/scuole-danza.json"

interface Scuola {
  id: string
  nome: string
  indirizzo: string
  citta: string
  provincia: string
  regione: string
  cap?: string
  telefono?: string
  email?: string
  sitoWeb?: string
  latitudine: number
  longitudine: number
  descrizione?: string
  servizi?: string
}

export default function SediPage() {
  const [scuole] = useState<Scuola[]>(scuoleData as Scuola[])
  const [filteredScuole, setFilteredScuole] = useState<Scuola[]>(scuoleData as Scuola[])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegione, setSelectedRegione] = useState("Tutte")
  const [selectedScuola, setSelectedScuola] = useState<Scuola | null>(null)
  const [showMap, setShowMap] = useState(true)

  const regioni = ["Tutte", ...Array.from(new Set(scuole.map((s) => s.regione))).sort()]

  useEffect(() => {
    let filtered = scuole

    if (selectedRegione !== "Tutte") {
      filtered = filtered.filter((s) => s.regione === selectedRegione)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (s) =>
          s.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.citta.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.regione.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredScuole(filtered)
  }, [searchTerm, selectedRegione, scuole])

  useEffect(() => {
    // Scroll reveal animations
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
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
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 reveal">
            <div className="inline-block px-6 py-3 glass-card rounded-full text-sm font-semibold text-primary mb-4">
              🗺️ {scuole.length} Scuole in Tutta Italia
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Trova la Tua <span className="gradient-text">Scuola Perfetta</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Esplora la nostra rete di scuole certificate in tutte le regioni. Mappa interattiva, filtri avanzati e prenotazione diretta.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Filters Section */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-6 reveal">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-96">
                <Input
                  type="text"
                  placeholder="🔍 Cerca per nome, città o regione..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="flex gap-3 items-center flex-wrap">
                <select
                  value={selectedRegione}
                  onChange={(e) => setSelectedRegione(e.target.value)}
                  className="px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all backdrop-blur-sm"
                >
                  {regioni.map((regione) => (
                    <option key={regione} value={regione} className="bg-gray-900">
                      {regione}
                    </option>
                  ))}
                </select>

                <Button
                  variant={showMap ? "default" : "ghost"}
                  className={showMap
                    ? "bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold px-6"
                    : "glass-card border border-white/20 text-white hover:bg-white/10"
                  }
                  onClick={() => setShowMap(!showMap)}
                >
                  {showMap ? "📍 Nascondi Mappa" : "🗺️ Mostra Mappa"}
                </Button>
              </div>
            </div>

            <div className="mt-4 text-sm text-white/60 font-medium">
              ✨ Trovate <span className="text-primary font-bold">{filteredScuole.length}</span> scuole
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {showMap && (
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                <span className="gradient-text">Mappa</span> Interattiva
              </h2>
              <MappaItalia
                scuole={filteredScuole}
                onSelectScuola={setSelectedScuola}
              />
            </div>
          </div>
        </section>
      )}

      {/* Schools Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 reveal">
            Lista <span className="gradient-text">Scuole</span>
          </h2>

          <div className="cards-grid">
            {filteredScuole.map((scuola, index) => (
              <Card
                key={scuola.id}
                className={`reveal cursor-pointer ${
                  selectedScuola?.id === scuola.id
                    ? "border-primary shadow-xl shadow-primary/30"
                    : ""
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setSelectedScuola(scuola)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3">{scuola.nome}</CardTitle>
                      <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary rounded-full text-xs font-bold mb-2">
                        📍 {scuola.regione}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {/* Address */}
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <div className="text-sm text-white/70">
                        <div>{scuola.indirizzo}</div>
                        <div>{scuola.citta}, {scuola.provincia} {scuola.cap}</div>
                      </div>
                    </div>

                    {/* Phone */}
                    {scuola.telefono && (
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <a href={`tel:${scuola.telefono}`} className="text-sm text-primary hover:text-accent transition-colors">
                          {scuola.telefono}
                        </a>
                      </div>
                    )}

                    {/* Email */}
                    {scuola.email && (
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <a href={`mailto:${scuola.email}`} className="text-sm text-primary hover:text-accent transition-colors truncate">
                          {scuola.email}
                        </a>
                      </div>
                    )}

                    {/* Website */}
                    {scuola.sitoWeb && (
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
                        <a
                          href={scuola.sitoWeb}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-accent transition-colors truncate"
                        >
                          Visita sito
                        </a>
                      </div>
                    )}

                    {/* Description */}
                    {scuola.descrizione && (
                      <p className="text-sm text-white/60 mt-3 line-clamp-2 leading-relaxed">
                        {scuola.descrizione}
                      </p>
                    )}

                    {/* Services */}
                    {scuola.servizi && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-xs text-white/50 font-semibold mb-1.5">💃 Stili disponibili:</p>
                        <p className="text-xs text-white/70">{scuola.servizi}</p>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button
                      className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold magnetic-btn btn-shine"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `/prenotazioni?scuola=${scuola.id}`
                      }}
                    >
                      Prenota una Lezione
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredScuole.length === 0 && (
            <div className="text-center py-20 glass-card rounded-3xl reveal">
              <svg className="w-20 h-20 mx-auto text-white/20 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">
                Nessuna scuola trovata
              </h3>
              <p className="text-white/60 mb-6">
                Prova a modificare i filtri di ricerca o espandi la tua zona
              </p>
              <Button
                variant="ghost"
                className="glass-card border border-white/20 text-white hover:bg-white/10"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedRegione("Tutte")
                }}
              >
                Ripristina Filtri
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
