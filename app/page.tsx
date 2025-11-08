"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
                🎭 La piattaforma #1 in Italia
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trova la Tua <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Passione</span> per la Danza
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Scopri le migliori scuole di danza in tutta Italia. Prenota lezioni con maestri professionisti e inizia il tuo viaggio nel mondo della danza oggi stesso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sedi">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Trova la Tua Scuola
                  </Button>
                </Link>
                <Link href="/prenotazioni">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Prenota una Lezione
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Scuole Partner</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Regioni Coperte</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Maestri Certificati</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 shadow-2xl transform rotate-3">
                <div className="absolute inset-4 bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-48 h-48 mx-auto text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className="mt-4 text-xl font-semibold text-gray-700">Inizia il tuo percorso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perché Scegliere DanzaItalia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La piattaforma più completa e affidabile per trovare corsi di danza in Italia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-pink-500 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <CardTitle>Trova Scuole Ovunque</CardTitle>
                <CardDescription>
                  Oltre 50 scuole di danza verificate in tutta Italia. Usa la nostra mappa interattiva per trovare la scuola più vicina a te.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <CardTitle>Prenotazioni Facili</CardTitle>
                <CardDescription>
                  Sistema di prenotazione intuitivo e veloce. Prenota le tue lezioni in pochi click e ricevi conferma immediata.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-pink-500 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <CardTitle>Maestri Professionisti</CardTitle>
                <CardDescription>
                  Accedi a profili dettagliati di maestri certificati. Leggi recensioni e scegli il maestro perfetto per te.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stili di Danza Disponibili
            </h2>
            <p className="text-xl text-gray-600">
              Trova il corso perfetto per il tuo stile
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Classica", emoji: "🩰", color: "from-pink-400 to-rose-400" },
              { name: "Moderna", emoji: "💃", color: "from-purple-400 to-indigo-400" },
              { name: "Hip-Hop", emoji: "🎵", color: "from-blue-400 to-cyan-400" },
              { name: "Contemporanea", emoji: "🎭", color: "from-violet-400 to-purple-400" },
              { name: "Jazz", emoji: "🎺", color: "from-amber-400 to-orange-400" },
              { name: "Latin", emoji: "🌟", color: "from-red-400 to-pink-400" },
              { name: "Breakdance", emoji: "⚡", color: "from-green-400 to-emerald-400" },
              { name: "Balletto", emoji: "👗", color: "from-fuchsia-400 to-pink-400" },
            ].map((style) => (
              <div
                key={style.name}
                className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-pink-500"
              >
                <div className={`text-4xl mb-3 transform group-hover:scale-110 transition-transform`}>
                  {style.emoji}
                </div>
                <div className="font-semibold text-gray-900">{style.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto a Iniziare la Tua Avventura nella Danza?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Unisciti a migliaia di studenti che hanno già trovato la loro passione. Registrati gratuitamente e prenota la tua prima lezione oggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button variant="default" size="lg" className="w-full sm:w-auto bg-white text-pink-600 hover:bg-gray-100">
                Registrati Gratis
              </Button>
            </Link>
            <Link href="/sedi">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10">
                Esplora le Scuole
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cosa Dicono i Nostri Studenti
            </h2>
            <p className="text-xl text-gray-600">
              Storie di successo dalla nostra community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria R.",
                role: "Studentessa di Danza Classica",
                text: "Grazie a DanzaItalia ho trovato la scuola perfetta a Milano. Il sistema di prenotazione è semplicissimo e i maestri sono eccezionali!",
                rating: 5
              },
              {
                name: "Luca T.",
                role: "Appassionato di Hip-Hop",
                text: "Fantastica piattaforma! Ho scoperto corsi di hip-hop che non sapevo nemmeno esistessero nella mia città. Consigliatissimo!",
                rating: 5
              },
              {
                name: "Sofia M.",
                role: "Ballerina Professionista",
                text: "Come professionista, apprezzo la qualità delle scuole partner. Ogni scuola è verificata e i maestri sono davvero competenti.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-700 italic mb-4">
                    "{testimonial.text}"
                  </CardDescription>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
