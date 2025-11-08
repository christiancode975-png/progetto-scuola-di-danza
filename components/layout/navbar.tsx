"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              DanzaItalia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/sedi"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Sedi
            </Link>
            <Link
              href="/prenotazioni"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Prenotazioni
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              I Miei Corsi
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Accedi</Button>
            </Link>
            <Link href="/register">
              <Button variant="primary">Registrati</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
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
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-pink-500 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/sedi"
              className="block text-gray-700 hover:text-pink-500 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sedi
            </Link>
            <Link
              href="/prenotazioni"
              className="block text-gray-700 hover:text-pink-500 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Prenotazioni
            </Link>
            <Link
              href="/dashboard"
              className="block text-gray-700 hover:text-pink-500 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              I Miei Corsi
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <Link href="/login">
                <Button variant="ghost" className="w-full">
                  Accedi
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" className="w-full">
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
