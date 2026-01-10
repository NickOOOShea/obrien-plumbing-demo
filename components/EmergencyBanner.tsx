'use client'

import { Phone, AlertTriangle } from 'lucide-react'

export default function EmergencyBanner() {
  return (
    <div className="emergency-banner">
      <AlertTriangle className="w-5 h-5 animate-pulse" />
      <span className="hidden sm:inline">Plumbing Emergency?</span>
      <span className="sm:hidden">Emergency?</span>
      <a
        href="tel:+353871234567"
        className="inline-flex items-center gap-2 bg-white text-safety-700 px-4 py-1.5 rounded-full font-bold hover:bg-safety-50 transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span>087 123 4567</span>
        <span className="hidden md:inline">- Available 24/7</span>
      </a>
    </div>
  )
}
