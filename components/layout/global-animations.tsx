"use client"

import { useEffect } from "react"
import { initGlobalAnimations } from "@/lib/animations"

export function GlobalAnimations() {
  useEffect(() => {
    initGlobalAnimations()

    // Scroll progress bar
    const updateScrollProgress = () => {
      const scrollProgress = document.getElementById('scroll-progress')
      if (!scrollProgress) return

      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight
      const scrolled = window.scrollY
      const progress = (scrolled / (fullHeight - windowHeight)) * 100

      scrollProgress.style.transform = `scaleX(${progress / 100})`
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initial check

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return null
}
