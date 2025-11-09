"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update scroll progress bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      const progressBar = document.getElementById("scroll-progress")
      if (progressBar) {
        progressBar.style.transform = `scaleX(${scrolled / 100})`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/90 backdrop-blur-lg border-b border-primary/10 shadow-md"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold gradient-text">
              DanzaItalia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground/70 hover:text-primary font-medium transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/sedi"
              className="text-foreground/70 hover:text-primary font-medium transition-colors relative group"
            >
              Sedi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/prenotazioni"
              className="text-foreground/70 hover:text-primary font-medium transition-colors relative group"
            >
              Prenotazioni
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/dashboard"
              className="text-foreground/70 hover:text-primary font-medium transition-colors relative group"
            >
              Dashboard
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-foreground/70 hover:text-primary hover:bg-primary/5"
              >
                Accedi
              </Button>
            </Link>
            <Link href="/register">
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-semibold px-6 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                Registrati
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/5 text-foreground transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-white/95 backdrop-blur-lg rounded-2xl mt-2 p-4 shadow-xl border border-primary/10">
            <Link
              href="/"
              className="block text-foreground/70 hover:text-primary font-medium transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/sedi"
              className="block text-foreground/70 hover:text-primary font-medium transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Sedi
            </Link>
            <Link
              href="/prenotazioni"
              className="block text-foreground/70 hover:text-primary font-medium transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Prenotazioni
            </Link>
            <Link
              href="/dashboard"
              className="block text-foreground/70 hover:text-primary font-medium transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="flex flex-col space-y-2 pt-3 border-t border-primary/10">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="w-full text-foreground/70 hover:text-primary hover:bg-primary/5"
                >
                  Accedi
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-md"
                >
                  Registrati
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
