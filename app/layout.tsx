import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "DanzaItalia - Trova e Prenota Corsi di Danza in Tutta Italia",
  description: "La piattaforma leader in Italia per trovare scuole di danza, prenotare corsi e lezioni con i migliori maestri. Danza classica, moderna, hip-hop, contemporanea e molto altro.",
  keywords: "danza, scuole di danza, corsi di danza, danza classica, danza moderna, hip-hop, prenotazioni danza, maestri di danza, Italia",
  authors: [{ name: "DanzaItalia" }],
  openGraph: {
    title: "DanzaItalia - Trova e Prenota Corsi di Danza",
    description: "La piattaforma leader per trovare e prenotare corsi di danza in tutta Italia",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body className="antialiased">
        {/* Animated Gradient Mesh Background */}
        <div className="bg-gradient-mesh">
          <div className="mesh-gradient mesh-1"></div>
          <div className="mesh-gradient mesh-2"></div>
          <div className="mesh-gradient mesh-3"></div>
        </div>

        {/* Grid Overlay */}
        <div className="grid-overlay"></div>

        {/* Scroll Progress Bar */}
        <div className="scroll-progress" id="scroll-progress"></div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
