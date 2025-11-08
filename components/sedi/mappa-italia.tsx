"use client"

import { useEffect, useState, useRef } from "react"
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
  const mapRef = useRef<any>(null)
  const markerClusterGroupRef = useRef<any>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !mapRef.current) return

    // Import Leaflet and marker cluster dynamically on client side
    Promise.all([
      import("leaflet"),
      import("leaflet.markercluster")
    ]).then(([{ default: L }]) => {
      if (!mapRef.current) return

      // Clear existing markers
      if (markerClusterGroupRef.current) {
        markerClusterGroupRef.current.clearLayers()
        mapRef.current.removeLayer(markerClusterGroupRef.current)
      }

      processMarkers(L)
    })
  }, [scuole, isClient, onSelectScuola])

  const processMarkers = (L: any) => {
    if (!mapRef.current) return

    // Create custom icon
    const customIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      className: 'custom-marker-icon'
    })

    // Create marker cluster group
    const markerClusterGroup = L.markerClusterGroup({
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      maxClusterRadius: 60,
      disableClusteringAtZoom: 13,
      iconCreateFunction: function(cluster: any) {
        const childCount = cluster.getChildCount()
        let c = ' marker-cluster-'
        if (childCount < 10) {
          c += 'small'
        } else if (childCount < 30) {
          c += 'medium'
        } else {
          c += 'large'
        }

        return new L.DivIcon({
          html: '<div><span>' + childCount + '</span></div>',
          className: 'marker-cluster' + c,
          iconSize: new L.Point(40, 40)
        })
      }
    })

    // Add markers to cluster group
    scuole.forEach((scuola) => {
      if (!scuola.latitudine || !scuola.longitudine) return

      const marker = L.marker([scuola.latitudine, scuola.longitudine], {
        icon: customIcon
      })

      // Create popup content
      const popupContent = `
        <div class="popup-school">
          <div class="popup-school-title">${scuola.nome}</div>
          <div class="popup-school-info">
            <svg class="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            ${scuola.indirizzo}
          </div>
          <div class="popup-school-info">${scuola.citta}, ${scuola.provincia}</div>
          ${scuola.telefono ? `
            <div class="popup-school-info">
              <svg class="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:${scuola.telefono}" class="popup-school-link">${scuola.telefono}</a>
            </div>
          ` : ''}
          ${scuola.sitoWeb ? `
            <a href="${scuola.sitoWeb}" target="_blank" rel="noopener noreferrer" class="popup-school-link">
              Visita sito web →
            </a>
          ` : ''}
        </div>
      `

      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup'
      })

      // Handle marker click
      marker.on('click', () => {
        if (onSelectScuola) {
          onSelectScuola(scuola)
        }
      })

      // Auto-pan on popup open to center marker
      marker.on('popupopen', function(e: any) {
        const map = mapRef.current
        if (!map) return

        const latLng = e.popup?.getLatLng()
        if (!latLng) return

        const px = map.project(latLng)
        px.y -= 120 // Offset to make space for popup
        map.panTo(map.unproject(px), { animate: true })
      })

      markerClusterGroup.addLayer(marker)
    })

    markerClusterGroupRef.current = markerClusterGroup
    mapRef.current.addLayer(markerClusterGroup)

    // Fit bounds to show all markers
    if (scuole.length > 0) {
      const bounds = markerClusterGroup.getBounds()
      if (bounds.isValid()) {
        mapRef.current.fitBounds(bounds, {
          padding: [50, 50],
          maxZoom: 10
        })
      }
    }
  }

  if (!isClient) {
    return (
      <div className="w-full h-[600px] glass-card rounded-xl flex items-center justify-center">
        <p className="text-white/60">Caricamento mappa...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden">
      <MapContainer
        center={[42.5, 12.5]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        ref={(map: any) => {
          if (map) {
            mapRef.current = map
          }
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}
