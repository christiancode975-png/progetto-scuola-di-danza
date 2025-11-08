# 🩰 DanzaItalia - Piattaforma Leader per Scuole di Danza in Italia

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🎯 Panoramica del Progetto

**DanzaItalia** è una piattaforma web professionale e scalabile dedicata alle scuole di danza in Italia. Il sito si propone come leader di mercato offrendo un'esperienza utente premium, funzionalità avanzate di prenotazione e una rete completa di scuole di danza distribuite su tutto il territorio nazionale.

### ✨ Caratteristiche Principali

- 🏫 **50+ Scuole Partner** - Database completo con scuole verificate in tutte le regioni italiane
- 🗺️ **Mappa Interattiva** - Visualizzazione geolocalizzata delle scuole con ricerca per regione
- 📅 **Sistema di Prenotazione** - Booking intuitivo per lezioni e corsi con conferma immediata
- 👥 **Profili Maestri** - Informazioni dettagliate su maestri certificati con recensioni
- 💳 **Pagamenti Online** - Integrazione Stripe/PayPal per pagamenti sicuri
- 📱 **Design Responsive** - Ottimizzato per desktop, tablet e mobile
- ⭐ **Sistema Recensioni** - Valutazioni e recensioni per scuole e maestri
- 🎨 **UI/UX Premium** - Design elegante con tema High-Class Dance Culture

## 🏗️ Stack Tecnologico

### Frontend
- **Next.js 14** - Framework React con App Router per SSR e performance ottimali
- **TypeScript** - Type safety e migliore developer experience
- **Tailwind CSS** - Styling utility-first per design moderno e responsive
- **Framer Motion** - Animazioni fluide e transizioni cinematiche
- **React Leaflet** - Mappa interattiva dell'Italia

### Backend & Database
- **Prisma** - ORM type-safe per gestione database
- **SQLite/PostgreSQL** - Database relazionale per dati strutturati
- **NextAuth.js** - Sistema di autenticazione completo e sicuro

### Componenti UI
- Custom design system basato su shadcn/ui
- Componenti riutilizzabili (Button, Card, Input, Label, ecc.)
- Palette colori brand (Pink #ec4899, Purple #8b5cf6)

## 📂 Struttura del Progetto

```
progetto-scuola-di-danza/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home Page
│   ├── sedi/                     # Sezione Sedi
│   │   └── page.tsx
│   ├── prenotazioni/             # Sezione Prenotazioni
│   │   └── page.tsx
│   ├── login/                    # Login
│   │   └── page.tsx
│   ├── register/                 # Registrazione
│   │   └── page.tsx
│   ├── dashboard/                # Dashboard Utente
│   │   └── page.tsx
│   ├── layout.tsx                # Root Layout
│   └── globals.css               # Stili globali
│
├── components/                   # Componenti React
│   ├── ui/                       # Componenti UI base
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   ├── layout/                   # Componenti layout
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   └── sedi/                     # Componenti sezione sedi
│       └── mappa-italia.tsx
│
├── data/                         # Database JSON
│   ├── scuole-danza.json        # 50 scuole in tutta Italia
│   ├── maestri.json             # Profili maestri
│   └── corsi.json               # Corsi disponibili
│
├── lib/                          # Utilities e configurazioni
│   ├── utils.ts                  # Utility functions
│   └── db.ts                     # Database client
│
├── prisma/                       # Schema Prisma
│   └── schema.prisma             # Modelli database
│
└── public/                       # Asset statici
    └── images/
```

## 🚀 Installazione e Avvio

### Prerequisiti
- Node.js 18+
- npm o yarn

### Installazione

```bash
# Clone del repository
git clone https://github.com/your-username/progetto-scuola-di-danza.git
cd progetto-scuola-di-danza

# Installazione dipendenze
npm install

# Configurazione variabili d'ambiente
cp .env.example .env
# Modifica .env con le tue configurazioni

# Avvio server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Build per Produzione

```bash
# Build ottimizzata
npm run build

# Avvio produzione
npm start
```

## 🎨 Funzionalità Implementate

### ✅ Home Page
- Hero section con copywriting premium e CTA efficaci
- Sezione features con 3 vantaggi principali
- Showcase stili di danza disponibili (8 stili)
- Sezione testimonial con recensioni utenti
- CTA finale per conversione
- Design responsive e animazioni fluide

### ✅ Sezione Sedi
- **Lista completa** di 50 scuole in tutta Italia con:
  - Nome, indirizzo completo, regione, provincia
  - Contatti (telefono, email, sito web)
  - Descrizione e servizi offerti
- **Mappa interattiva** con:
  - Geolocalizzazione di tutte le scuole
  - Marker cliccabili con popup informativo
  - Zoom e navigazione fluida
- **Filtri avanzati**:
  - Ricerca per nome, città, regione
  - Filtro per regione
  - Toggle visualizzazione mappa
- **Card dettagliate** per ogni scuola con CTA prenotazione

### ✅ Sezione Prenotazioni
- **Catalogo corsi** con filtri per:
  - Tipo di danza (Classica, Moderna, Hip-Hop, ecc.)
  - Livello (Principiante, Intermedio, Avanzato)
- **Profili maestri** con:
  - Biografia e specializzazione
  - Rating e numero recensioni
  - Badge eccellenza (rating > 4.5)
- **Sistema di booking** con:
  - Selezione data e orario
  - Visualizzazione disponibilità
  - Conferma prenotazione
  - Integrazione pagamenti simulata
- **Dettagli corsi**:
  - Durata, prezzo, max partecipanti
  - Orari settimanali
  - Scuola di riferimento

### ✅ Autenticazione
- **Login** con:
  - Email e password
  - Opzione "Ricordami"
  - Recovery password
  - Social login (Google, Facebook)
- **Registrazione** con:
  - Form completo (nome, email, password)
  - Validazione campi
  - Checkbox termini e privacy
  - Social registration

### ✅ Dashboard Utente
- **Statistiche personali**:
  - Prenotazioni attive
  - Lezioni completate
  - Ore totali di danza
  - Scuole visitate
- **Gestione prenotazioni**:
  - Lista prenotazioni con stato
  - Modifica/Annulla prenotazioni
  - Dettagli completi (corso, maestro, scuola, data, orario)
  - Opzione recensione per lezioni completate
- **Azioni rapide**:
  - Trova scuole
  - Nuova prenotazione
  - Modifica profilo

### ✅ Design e UX
- **Palette colori brand**:
  - Primary: Pink #ec4899
  - Secondary: Purple #8b5cf6
  - Accent: Rose #f43f5e
- **Tipografia professionale**: Inter font family
- **Scrollbar personalizzata** con brand colors
- **Responsive design** ottimizzato per:
  - Mobile (320px+)
  - Tablet (768px+)
  - Desktop (1024px+)
  - 4K (1920px+)

## 📊 Database

### Scuole (50 scuole)
Distribuzione geografica completa:
- Lombardia: 8 scuole
- Lazio, Toscana, Veneto: 4 scuole ciascuna
- Emilia-Romagna, Piemonte, Puglia: 3 scuole ciascuna
- Campania, Sicilia: 2 scuole ciascuna
- Altre regioni: 1 scuola ciascuna

### Maestri (5 profili)
Specializzazioni:
- Danza Classica e Punte
- Contemporanea e Moderna
- Hip-Hop e Urban Dance
- Jazz e Musical Theatre
- Propedeutica per bambini

### Corsi (8 corsi attivi)
Tipologie:
- Classica (Principiante, Intermedio)
- Contemporanea (Open Level)
- Hip-Hop (Principiante, Avanzato)
- Moderna per bambini
- Jazz
- Breakdance

## 🔒 Sicurezza e Privacy

- **Autenticazione sicura** con hashing password
- **Validazione input** lato client e server
- **HTTPS** obbligatorio in produzione
- **GDPR compliant** con gestione consensi
- **Sanitizzazione dati** per prevenire XSS e SQL injection

## 📈 SEO e Performance

### SEO
- Meta tags ottimizzati (title, description, keywords)
- Open Graph per social sharing
- Lingua italiana (lang="it")
- Semantic HTML
- Sitemap.xml (da generare)

### Performance
- Server-Side Rendering (SSR) con Next.js
- Image optimization
- Code splitting automatico
- Lazy loading componenti
- Caching strategy
- Bundle size optimization

## 🎯 Roadmap Future

### Fase 2
- [ ] Sistema recensioni completo con moderazione
- [ ] Badge "Eccellenza" automatico per scuole top
- [ ] Dashboard scuola per gestione corsi e prenotazioni
- [ ] Chat in-app tra utenti e scuole
- [ ] Notifiche push per nuovi corsi

### Fase 3
- [ ] Integrazione pagamenti Stripe/PayPal reale
- [ ] Sistema abbonamenti mensili/annuali
- [ ] Programma fedeltà e sconti
- [ ] Blog e contenuti educativi
- [ ] App mobile (React Native)

### Fase 4
- [ ] AI recommendation system per corsi
- [ ] Video lezioni on-demand
- [ ] Community e social features
- [ ] Marketplace per abbigliamento danza
- [ ] Partnership con eventi e competizioni

## 🧪 Testing

### Testing Manuale Completato
✅ Navigazione tra pagine
✅ Responsive design (mobile, tablet, desktop)
✅ Filtri e ricerca sedi
✅ Mappa interattiva
✅ Form login e registrazione
✅ Sistema prenotazioni
✅ Dashboard utente
✅ Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

### Test Automatici (Da Implementare)
- Unit tests con Jest
- Integration tests con React Testing Library
- E2E tests con Playwright/Cypress

## 👥 Contribuire

Per contribuire al progetto:

1. Fork del repository
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.

## 📞 Contatti

**DanzaItalia Team**
- Email: info@danzaitalia.it
- Website: https://www.danzaitalia.it
- GitHub: [@danzaitalia](https://github.com/danzaitalia)

---

**Developed with ❤️ for the Italian dance community**
