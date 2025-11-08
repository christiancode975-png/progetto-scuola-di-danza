"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
)

interface Scuola {
  id: string
  nome: string
  indirizzo: string
  citta: string
  provincia: string
  regione: string
  telefono?: string
  email?: string
  sitoWeb?: string
  latitudine: number
  longitudine: number
  descrizione?: string
}

interface MappaItaliaProps {
  scuole: Scuola[]
  onSelectScuola?: (scuola: Scuola) => void
}

export function MappaItalia({ scuole, onSelectScuola }: MappaItaliaProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full h-[600px] bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">Caricamento mappa...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
      <MapContainer
        center={[42.5, 12.5]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {scuole.map((scuola) => (
          <Marker
            key={scuola.id}
            position={[scuola.latitudine, scuola.longitudine]}
            eventHandlers={{
              click: () => {
                if (onSelectScuola) {
                  onSelectScuola(scuola)
                }
              },
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg text-gray-900">{scuola.nome}</h3>
                <p className="text-sm text-gray-600 mt-1">{scuola.indirizzo}</p>
                <p className="text-sm text-gray-600">
                  {scuola.citta}, {scuola.provincia}
                </p>
                {scuola.telefono && (
                  <p className="text-sm text-gray-600 mt-2">
                    Tel: {scuola.telefono}
                  </p>
                )}
                {scuola.sitoWeb && (
                  <a
                    href={scuola.sitoWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-pink-500 hover:text-pink-600 mt-2 inline-block"
                  >
                    Visita sito
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
