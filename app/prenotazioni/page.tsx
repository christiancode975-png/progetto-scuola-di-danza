"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import corsiData from "@/data/corsi.json"
import maestriData from "@/data/maestri.json"
import scuoleData from "@/data/scuole-danza.json"

interface Corso {
  id: string
  nome: string
  tipoDanza: string
  livello: string
  descrizione: string
  durata: number
  maxPartecipanti: number
  prezzo: number
  maestroId: string
  scuolaId: string
  orari: { giornoSettimana: number; oraInizio: string; oraFine: string }[]
}

interface Maestro {
  id: string
  nome: string
  cognome: string
  bio: string
  specialita: string
  rating: number
  recensioni: number
  scuolaId: string
}

export default function PrenotazioniPage() {
  const [corsi] = useState<Corso[]>(corsiData as Corso[])
  const [maestri] = useState<Maestro[]>(maestriData as Maestro[])
  const [filteredCorsi, setFilteredCorsi] = useState<Corso[]>(corsiData as Corso[])
  const [selectedTipo, setSelectedTipo] = useState("Tutti")
  const [selectedLivello, setSelectedLivello] = useState("Tutti")
  const [selectedCorso, setSelectedCorso] = useState<Corso | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [showBookingForm, setShowBookingForm] = useState(false)

  const tipiDanza = ["Tutti", ...Array.from(new Set(corsi.map((c) => c.tipoDanza))).sort()]
  const livelli = ["Tutti", "Principiante", "Intermedio", "Avanzato", "Tutti i livelli"]

  const giorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]

  useEffect(() => {
    let filtered = corsi

    if (selectedTipo !== "Tutti") {
      filtered = filtered.filter((c) => c.tipoDanza === selectedTipo)
    }

    if (selectedLivello !== "Tutti") {
      filtered = filtered.filter((c) => c.livello === selectedLivello)
    }

    setFilteredCorsi(filtered)
  }, [selectedTipo, selectedLivello, corsi])

  const getMaestro = (maestroId: string) => {
    return maestri.find((m) => m.id === maestroId)
  }

  const getScuola = (scuolaId: string) => {
    return scuoleData.find((s: any) => s.id === scuolaId)
  }

  const handleBooking = (corso: Corso) => {
    setSelectedCorso(corso)
    setShowBookingForm(true)
  }

  const submitBooking = () => {
    // Simulazione prenotazione
    alert(`Prenotazione confermata per ${selectedCorso?.nome} il ${selectedDate}!\n\nRiceverai una email di conferma.`)
    setShowBookingForm(false)
    setSelectedCorso(null)
    setSelectedDate("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Prenota il Tuo Corso di Danza
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl">
            Scegli tra {corsi.length} corsi disponibili con i migliori maestri d'Italia. Prenota in pochi click.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Tipo di Danza
              </Label>
              <select
                value={selectedTipo}
                onChange={(e) => setSelectedTipo(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {tipiDanza.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Livello
              </Label>
              <select
                value={selectedLivello}
                onChange={(e) => setSelectedLivello(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {livelli.map((livello) => (
                  <option key={livello} value={livello}>
                    {livello}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {filteredCorsi.length} corsi disponibili
          </div>
        </div>
      </section>

      {/* Corsi List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCorsi.map((corso) => {
              const maestro = getMaestro(corso.maestroId)
              const scuola = getScuola(corso.scuolaId)

              return (
                <Card
                  key={corso.id}
                  className="border-2 border-gray-200 hover:border-pink-500 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">
                        {corso.tipoDanza}
                      </div>
                      <div className="text-2xl font-bold text-pink-600">
                        €{corso.prezzo.toFixed(2)}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{corso.nome}</CardTitle>
                    <CardDescription>{corso.descrizione}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {/* Maestro */}
                      {maestro && (
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                          <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                            {maestro.nome[0]}{maestro.cognome[0]}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {maestro.nome} {maestro.cognome}
                            </div>
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                              <span className="text-sm text-gray-600">
                                {maestro.rating} ({maestro.recensioni} recensioni)
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Dettagli Corso */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span className="text-gray-700">{corso.durata} minuti</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                          </svg>
                          <span className="text-gray-700">Max {corso.maxPartecipanti} partecipanti</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span className="text-gray-700">Livello: {corso.livello}</span>
                        </div>
                      </div>

                      {/* Orari */}
                      <div className="pt-3 border-t border-gray-200">
                        <div className="text-xs font-semibold text-gray-500 mb-2">
                          ORARI DISPONIBILI:
                        </div>
                        <div className="space-y-1">
                          {corso.orari.map((orario, idx) => (
                            <div key={idx} className="text-sm text-gray-700">
                              <span className="font-medium">{giorni[orario.giornoSettimana]}</span>: {orario.oraInizio} - {orario.oraFine}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Scuola */}
                      {scuola && (
                        <div className="pt-3 border-t border-gray-200 text-sm text-gray-600">
                          📍 {scuola.nome} - {scuola.citta}
                        </div>
                      )}

                      <Button
                        variant="primary"
                        className="w-full mt-4"
                        onClick={() => handleBooking(corso)}
                      >
                        Prenota Ora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingForm && selectedCorso && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Prenota: {selectedCorso.nome}</CardTitle>
              <CardDescription>Completa la prenotazione selezionando data e orario</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="data">Seleziona Data</Label>
                  <Input
                    id="data"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="mt-2"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <Label>Orari Disponibili</Label>
                  <div className="mt-2 space-y-2">
                    {selectedCorso.orari.map((orario, idx) => (
                      <div key={idx} className="p-3 border-2 border-gray-200 rounded-lg hover:border-pink-500 cursor-pointer transition-colors">
                        <div className="font-medium">{giorni[orario.giornoSettimana]}</div>
                        <div className="text-sm text-gray-600">{orario.oraInizio} - {orario.oraFine}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Prezzo lezione:</span>
                    <span className="text-2xl font-bold text-pink-600">€{selectedCorso.prezzo.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-600">Il pagamento verrà processato in modo sicuro tramite Stripe</p>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setShowBookingForm(false)
                      setSelectedCorso(null)
                    }}
                  >
                    Annulla
                  </Button>
                  <Button
                    variant="primary"
                    className="flex-1"
                    onClick={submitBooking}
                    disabled={!selectedDate}
                  >
                    Conferma e Paga
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
