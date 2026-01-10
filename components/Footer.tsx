'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Wrench } from 'lucide-react'

const services = [
  'Emergency Plumbing',
  'Boiler Service & Repair',
  'Bathroom Installation',
  'Central Heating',
  'General Plumbing',
  'Drain Clearing',
]

const areas = [
  'Cork City',
  'Douglas',
  'Ballincollig',
  'Carrigaline',
  'Cobh',
  'Midleton',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-trust-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">
                  O'Brien
                </span>
                <span className="block text-xs text-slate-400 -mt-1">
                  Plumbing & Heating
                </span>
              </div>
            </Link>
            <p className="text-sm mb-6">
              Trusted plumbing services in Cork for over 15 years.
              RGII registered, fully insured, and committed to quality.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/obrienplumbing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-trust-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Areas Covered</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area}>
                  <Link
                    href="#areas"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+353211234567"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-trust-400" />
                  021 123 4567
                </a>
              </li>
              <li>
                <a
                  href="tel:+353871234567"
                  className="flex items-center gap-3 text-sm text-safety-400 hover:text-safety-300 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" />
                  087 123 4567 (24/7)
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@obrienplumbing.ie"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-trust-400" />
                  info@obrienplumbing.ie
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-trust-400 mt-0.5" />
                <span>
                  15 Industrial Estate<br />
                  Ballincollig, Cork<br />
                  P31 AB12
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Emergency banner */}
      <div className="bg-safety-600 py-4">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white">
            <span className="font-semibold">Plumbing Emergency?</span>
            <a
              href="tel:+353871234567"
              className="inline-flex items-center gap-2 bg-white text-safety-700 px-4 py-1.5 rounded-full font-bold hover:bg-safety-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call 087 123 4567 - Available 24/7
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>
              © {currentYear} O'Brien Plumbing & Heating. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center md:text-left">
            Website managed by{' '}
            <a
              href="https://connecteire.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-trust-400 hover:text-trust-300"
            >
              Connecteire
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
