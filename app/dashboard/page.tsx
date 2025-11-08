"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Prenotazione {
  id: string
  corso: string
  maestro: string
  scuola: string
  data: string
  orario: string
  prezzo: number
  stato: "confermata" | "completata" | "annullata"
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [prenotazioni, setPrenotazioni] = useState<Prenotazione[]>([
    {
      id: "1",
      corso: "Danza Classica - Principiante",
      maestro: "Elena Rossi",
      scuola: "Teatro alla Scala - Milano",
      data: "2025-11-15",
      orario: "18:00 - 19:00",
      prezzo: 25.00,
      stato: "confermata"
    },
    {
      id: "2",
      corso: "Hip-Hop - Avanzato",
      maestro: "Sofia Ferrari",
      scuola: "Scuola di Danza Aurora - Bologna",
      data: "2025-11-12",
      orario: "19:00 - 20:30",
      prezzo: 35.00,
      stato: "completata"
    },
  ])

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
    } else {
      setUser(JSON.parse(userData))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const handleCancelBooking = (id: string) => {
    if (confirm("Sei sicuro di voler annullare questa prenotazione?")) {
      setPrenotazioni(prenotazioni.map(p =>
        p.id === id ? { ...p, stato: "annullata" as const } : p
      ))
      alert("Prenotazione annullata. Riceverai un rimborso entro 5-7 giorni.")
    }
  }

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Caricamento...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Benvenuto, {user.name}!
              </h1>
              <p className="text-pink-100">Gestisci le tue prenotazioni e scopri nuovi corsi</p>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={handleLogout}>
              Esci
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardDescription>Prenotazioni Attive</CardDescription>
                <CardTitle className="text-3xl text-pink-600">
                  {prenotazioni.filter(p => p.stato === "confermata").length}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Lezioni Completate</CardDescription>
                <CardTitle className="text-3xl text-green-600">
                  {prenotazioni.filter(p => p.stato === "completata").length}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Ore di Danza</CardDescription>
                <CardTitle className="text-3xl text-purple-600">24</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Scuole Visitate</CardDescription>
                <CardTitle className="text-3xl text-blue-600">3</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Prenotazioni */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Le Tue Prenotazioni</h2>
            <Button variant="primary" onClick={() => router.push("/prenotazioni")}>
              Prenota Nuovo Corso
            </Button>
          </div>

          <div className="space-y-4">
            {prenotazioni.map((prenotazione) => (
              <Card key={prenotazione.id} className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {prenotazione.corso}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          prenotazione.stato === "confermata" ? "bg-green-100 text-green-700" :
                          prenotazione.stato === "completata" ? "bg-blue-100 text-blue-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {prenotazione.stato.charAt(0).toUpperCase() + prenotazione.stato.slice(1)}
                        </span>
                      </div>

                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                          </svg>
                          Maestro: {prenotazione.maestro}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          </svg>
                          {prenotazione.scuola}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                          </svg>
                          {new Date(prenotazione.data).toLocaleDateString('it-IT', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })} - {prenotazione.orario}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <div className="text-2xl font-bold text-pink-600">
                        €{prenotazione.prezzo.toFixed(2)}
                      </div>
                      {prenotazione.stato === "confermata" && (
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Modifica
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-300 hover:bg-red-50"
                            onClick={() => handleCancelBooking(prenotazione.id)}
                          >
                            Annulla
                          </Button>
                        </div>
                      )}
                      {prenotazione.stato === "completata" && (
                        <Button variant="outline" size="sm">
                          Lascia Recensione
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {prenotazioni.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nessuna prenotazione
              </h3>
              <p className="text-gray-600 mb-4">
                Non hai ancora prenotato nessun corso. Inizia a esplorare!
              </p>
              <Button variant="primary" onClick={() => router.push("/prenotazioni")}>
                Esplora i Corsi
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Azioni Rapide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-pink-500 transition-all cursor-pointer" onClick={() => router.push("/sedi")}>
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <CardTitle>Trova Scuole</CardTitle>
                <CardDescription>Esplora le scuole di danza nella tua zona</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all cursor-pointer" onClick={() => router.push("/prenotazioni")}>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <CardTitle>Nuova Prenotazione</CardTitle>
                <CardDescription>Prenota una nuova lezione di danza</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-pink-500 transition-all cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <CardTitle>Il Mio Profilo</CardTitle>
                <CardDescription>Modifica le tue informazioni personali</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
