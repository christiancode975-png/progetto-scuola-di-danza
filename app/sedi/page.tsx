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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Scuole di Danza in Italia
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl">
            Esplora la nostra rete di {scuole.length} scuole di danza certificate in tutta Italia. Trova la scuola perfetta per te.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <Input
                type="text"
                placeholder="Cerca per nome, città o regione..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2 items-center">
              <select
                value={selectedRegione}
                onChange={(e) => setSelectedRegione(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {regioni.map((regione) => (
                  <option key={regione} value={regione}>
                    {regione}
                  </option>
                ))}
              </select>
              <Button
                variant={showMap ? "primary" : "outline"}
                onClick={() => setShowMap(!showMap)}
              >
                {showMap ? "Nascondi" : "Mostra"} Mappa
              </Button>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Trovate {filteredScuole.length} scuole
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showMap && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mappa Interattiva
              </h2>
              <MappaItalia
                scuole={filteredScuole}
                onSelectScuola={setSelectedScuola}
              />
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Lista Scuole
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScuole.map((scuola) => (
                <Card
                  key={scuola.id}
                  className={`border-2 transition-all duration-300 cursor-pointer ${
                    selectedScuola?.id === scuola.id
                      ? "border-pink-500 shadow-lg"
                      : "border-gray-200 hover:border-pink-300 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedScuola(scuola)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{scuola.nome}</CardTitle>
                        <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-2">
                          {scuola.regione}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <div className="text-sm text-gray-600">
                          <div>{scuola.indirizzo}</div>
                          <div>{scuola.citta}, {scuola.provincia} {scuola.cap}</div>
                        </div>
                      </div>

                      {scuola.telefono && (
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          <a href={`tel:${scuola.telefono}`} className="text-sm text-pink-500 hover:text-pink-600">
                            {scuola.telefono}
                          </a>
                        </div>
                      )}

                      {scuola.email && (
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                          <a href={`mailto:${scuola.email}`} className="text-sm text-pink-500 hover:text-pink-600 truncate">
                            {scuola.email}
                          </a>
                        </div>
                      )}

                      {scuola.sitoWeb && (
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                          </svg>
                          <a
                            href={scuola.sitoWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-500 hover:text-pink-600 truncate"
                          >
                            Visita sito
                          </a>
                        </div>
                      )}

                      {scuola.descrizione && (
                        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                          {scuola.descrizione}
                        </p>
                      )}

                      {scuola.servizi && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 font-semibold mb-1">Stili disponibili:</p>
                          <p className="text-xs text-gray-600">{scuola.servizi}</p>
                        </div>
                      )}

                      <Button
                        variant="primary"
                        className="w-full mt-4"
                        onClick={() => {
                          // Navigate to booking page
                          window.location.href = `/prenotazioni?scuola=${scuola.id}`
                        }}
                      >
                        Prenota una Lezione
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredScuole.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nessuna scuola trovata
                </h3>
                <p className="text-gray-600">
                  Prova a modificare i filtri di ricerca
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
