'use client'

import { motion } from 'framer-motion'
import { MapPin, CheckCircle } from 'lucide-react'
import areasData from '@/data/service-areas.json'

type ServiceArea = {
  name: string
  primary: boolean
}

const areas = areasData as ServiceArea[]

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Real Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative shadow-xl border border-slate-200">
              {/* OpenStreetMap iframe centered on Cork City */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-8.7%2C51.75%2C-8.25%2C52.05&layer=mapnik&marker=51.8985%2C-8.4756"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="O'Brien Plumbing Service Area - Cork"
              />

              {/* Service radius overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-trust-500/40 bg-trust-500/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-trust-600/50 bg-trust-600/15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-trust-600 shadow-lg" />
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <p className="font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-trust-600" />
                  Serving Cork City & County
                </p>
                <p className="text-sm text-slate-600">30km radius from Cork City Centre</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="divider-short mb-4" />
            <h2 className="section-heading mb-4">
              Areas We <span className="text-trust-600">Serve</span>
            </h2>
            <p className="section-subheading mb-8">
              We cover Cork City and surrounding areas within a 30km radius.
              Not sure if we cover your area? Just give us a call.
            </p>

            {/* Areas grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {areas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`service-area-badge ${
                    area.primary ? 'bg-trust-100 text-trust-700' : ''
                  }`}
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{area.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <p className="text-sm text-slate-500 mb-6">
              <strong>Not listed?</strong> We may still be able to help.
              Call us to check if we cover your area.
            </p>

            {/* CTA */}
            <a href="tel:+353211234567" className="btn-primary">
              <MapPin className="w-5 h-5" />
              Check Your Area - 021 123 4567
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
