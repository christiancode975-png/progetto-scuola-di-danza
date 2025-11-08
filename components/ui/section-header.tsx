/**
 * Universal Section Header Component
 * Used across all pages for consistency
 */

import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  className,
  size = "lg"
}: SectionHeaderProps) {
  const titleSizes = {
    sm: "text-2xl sm:text-3xl",
    md: "text-3xl sm:text-4xl lg:text-5xl",
    lg: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
  }

  const subtitleSizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-lg sm:text-xl lg:text-2xl"
  }

  return (
    <div className={cn("text-center space-y-6 reveal", className)}>
      {badge && (
        <div className="inline-block px-6 py-3 glass-card rounded-full text-sm font-semibold text-primary mb-4">
          {badge}
        </div>
      )}

      <h1 className={cn(titleSizes[size], "font-bold text-white leading-tight")}>
        {title}
      </h1>

      {subtitle && (
        <p className={cn(subtitleSizes[size], "text-white/70 max-w-3xl mx-auto leading-relaxed")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

interface IconContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
}

/**
 * Universal Icon Container - CENTERS ICONS PROPERLY
 */
export function IconContainer({ children, className, size = "md" }: IconContainerProps) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20"
  }

  return (
    <div className={cn(
      sizes[size],
      "bg-gradient-to-br from-primary to-primary-light rounded-xl",
      "flex items-center justify-center",
      "shadow-lg shadow-primary/30",
      className
    )}>
      {children}
    </div>
  )
}
