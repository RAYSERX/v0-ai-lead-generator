"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-[var(--color-demo)] text-black py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <div className="flex items-center gap-2 font-semibold">
          <span className="text-xl">🚀</span>
          <span className="text-sm md:text-base">DEMO VERSION - Limited to 20 leads per request</span>
          <span className="hidden md:inline">|</span>
          <button className="text-sm underline hover:no-underline font-medium">Contact for Full Access</button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-black/10 rounded p-1"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
