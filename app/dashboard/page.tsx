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
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card rounded-xl p-8">
          <div className="animate-pulse text-white/60">Caricamento...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 reveal">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  Ciao, <span className="gradient-text">{user.name}</span>!
                </h1>
                <p className="text-white/60">Gestisci le tue prenotazioni e scopri nuovi corsi</p>
              </div>
              <Button
                variant="ghost"
                className="glass-card glass-hover border border-white/20 text-white"
                onClick={handleLogout}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
                Esci
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card glass-hover rounded-2xl p-6 reveal">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/60 text-sm">Prenotazioni Attive</p>
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <p className="text-4xl font-bold gradient-text">
                {prenotazioni.filter(p => p.stato === "confermata").length}
              </p>
            </div>

            <div className="glass-card glass-hover rounded-2xl p-6 reveal" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/60 text-sm">Lezioni Completate</p>
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <p className="text-4xl font-bold gradient-text">
                {prenotazioni.filter(p => p.stato === "completata").length}
              </p>
            </div>

            <div className="glass-card glass-hover rounded-2xl p-6 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/60 text-sm">Ore di Danza</p>
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <p className="text-4xl font-bold gradient-text">24</p>
            </div>

            <div className="glass-card glass-hover rounded-2xl p-6 reveal" style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/60 text-sm">Scuole Visitate</p>
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
              </div>
              <p className="text-4xl font-bold gradient-text">3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prenotazioni */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 reveal">
            <h2 className="text-3xl font-bold text-white">Le Tue <span className="gradient-text">Prenotazioni</span></h2>
            <Button
              className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold magnetic-btn"
              onClick={() => router.push("/prenotazioni")}
            >
              Prenota Nuovo Corso
            </Button>
          </div>

          <div className="space-y-4">
            {prenotazioni.map((prenotazione, index) => (
              <div key={prenotazione.id} className="glass-card glass-hover rounded-2xl p-6 reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {prenotazione.corso}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        prenotazione.stato === "confermata" ? "bg-primary/20 text-primary border border-primary/30" :
                        prenotazione.stato === "completata" ? "bg-secondary/20 text-secondary border border-secondary/30" :
                        "bg-red-500/20 text-red-400 border border-red-400/30"
                      }`}>
                        {prenotazione.stato.charAt(0).toUpperCase() + prenotazione.stato.slice(1)}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm text-white/60">
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
                    <div className="text-3xl font-bold gradient-text">
                      €{prenotazione.prezzo.toFixed(2)}
                    </div>
                    {prenotazione.stato === "confermata" && (
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="glass-card border border-white/20 text-white hover:bg-white/10">
                          Modifica
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="glass-card border border-red-400/30 text-red-400 hover:bg-red-400/10"
                          onClick={() => handleCancelBooking(prenotazione.id)}
                        >
                          Annulla
                        </Button>
                      </div>
                    )}
                    {prenotazione.stato === "completata" && (
                      <Button variant="ghost" size="sm" className="glass-card border border-white/20 text-white hover:bg-white/10">
                        Lascia Recensione
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {prenotazioni.length === 0 && (
            <div className="text-center py-16 glass-card rounded-2xl reveal">
              <svg className="w-20 h-20 mx-auto text-white/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <h3 className="text-2xl font-bold text-white mb-2">
                Nessuna prenotazione
              </h3>
              <p className="text-white/60 mb-6">
                Non hai ancora prenotato nessun corso. Inizia a esplorare!
              </p>
              <Button
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold"
                onClick={() => router.push("/prenotazioni")}
              >
                Esplora i Corsi
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 reveal">Azioni <span className="gradient-text">Rapide</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="glass-card glass-hover rounded-2xl p-8 cursor-pointer reveal"
              onClick={() => router.push("/sedi")}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Trova Scuole</h3>
              <p className="text-white/60">Esplora le scuole di danza nella tua zona</p>
            </div>

            <div
              className="glass-card glass-hover rounded-2xl p-8 cursor-pointer reveal"
              style={{ transitionDelay: '100ms' }}
              onClick={() => router.push("/prenotazioni")}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nuova Prenotazione</h3>
              <p className="text-white/60">Prenota una nuova lezione di danza</p>
            </div>

            <div
              className="glass-card glass-hover rounded-2xl p-8 cursor-pointer reveal"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Il Mio Profilo</h3>
              <p className="text-white/60">Modifica le tue informazioni personali</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
