'use client'

import { motion } from 'framer-motion'
import {
  Flame,
  Droplets,
  Bath,
  Thermometer,
  Wrench,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'emergency',
    name: 'Emergency Plumbing',
    description: 'Burst pipes, severe leaks, blocked drains. Available 24/7, 365 days a year.',
    icon: AlertTriangle,
    priceFrom: 80,
    priceUnit: 'call-out',
    popular: true,
    features: ['24/7 availability', 'Fast response time', 'No call-out fee evenings/weekends'],
  },
  {
    id: 'boiler',
    name: 'Boiler Service & Repair',
    description: 'Annual servicing, breakdown repairs, and new boiler installations. All major brands.',
    icon: Flame,
    priceFrom: 90,
    priceUnit: 'service',
    popular: true,
    features: ['All major brands', 'Gas Safe registered', '12-month warranty'],
  },
  {
    id: 'bathroom',
    name: 'Bathroom Installation',
    description: 'Complete bathroom renovations from design to finish. Transform your space.',
    icon: Bath,
    priceFrom: null,
    priceUnit: 'quote',
    popular: false,
    features: ['Full project management', 'Quality fixtures', 'Tiling included'],
  },
  {
    id: 'heating',
    name: 'Central Heating',
    description: 'Radiator installation, powerflush, underfloor heating, and heating system upgrades.',
    icon: Thermometer,
    priceFrom: 150,
    priceUnit: 'radiator',
    popular: false,
    features: ['System design', 'Energy efficient', 'Zoned heating'],
  },
  {
    id: 'general',
    name: 'General Plumbing',
    description: 'Tap repairs, toilet fixes, washing machine connections, and everyday plumbing needs.',
    icon: Wrench,
    priceFrom: 60,
    priceUnit: 'hour',
    popular: false,
    features: ['No job too small', 'Fair pricing', 'Clean and tidy'],
  },
  {
    id: 'drains',
    name: 'Drain Clearing',
    description: 'Blocked sinks, toilets, and outdoor drains. High-pressure jetting available.',
    icon: Droplets,
    priceFrom: 70,
    priceUnit: 'job',
    popular: false,
    features: ['CCTV surveys', 'High-pressure jetting', 'Root removal'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="divider-short mx-auto mb-4" />
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading mx-auto">
            From emergency repairs to complete installations, we've got you covered
            with professional plumbing services throughout Cork.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-service group"
            >
              {/* Popular badge */}
              {service.popular && (
                <span className="badge-popular absolute top-4 right-4">
                  Popular
                </span>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                service.id === 'emergency'
                  ? 'bg-safety-100 text-safety-600'
                  : 'bg-trust-100 text-trust-600'
              } group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-trust-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  {service.priceFrom ? (
                    <>
                      <span className="text-sm text-slate-500">From</span>
                      <p className="font-bold text-xl text-slate-900">
                        €{service.priceFrom}
                        <span className="text-sm font-normal text-slate-500">
                          /{service.priceUnit}
                        </span>
                      </p>
                    </>
                  ) : (
                    <p className="font-semibold text-trust-600">Free Quote</p>
                  )}
                </div>
                <Link
                  href="#contact"
                  className={`inline-flex items-center gap-1 font-semibold ${
                    service.id === 'emergency'
                      ? 'text-safety-600 hover:text-safety-700'
                      : 'text-trust-600 hover:text-trust-700'
                  }`}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-safety-gradient rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 animate-bounce-subtle" />
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Got a Plumbing Emergency?
          </h3>
          <p className="text-safety-100 mb-6 max-w-xl mx-auto">
            Don't wait! Call our 24/7 emergency line. We'll have a plumber
            at your door within the hour.
          </p>
          <a
            href="tel:+353871234567"
            className="inline-flex items-center gap-2 bg-white text-safety-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-safety-50 transition-colors"
          >
            <AlertTriangle className="w-5 h-5" />
            087 123 4567 - Call Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
