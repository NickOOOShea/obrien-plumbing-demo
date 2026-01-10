'use client'

import { motion } from 'framer-motion'
import { Phone, CheckCircle, Clock, Shield, Star } from 'lucide-react'
import Link from 'next/link'

const trustPoints = [
  { icon: Clock, text: '24/7 Emergency' },
  { icon: Shield, text: 'RGII Registered' },
  { icon: Star, text: '15+ Years Experience' },
  { icon: CheckCircle, text: 'Free Quotes' },
]

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-gradient bg-grid-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-trust-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-safety-500/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-trust-100 text-trust-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Cork's Most Trusted Plumber</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Your Local{' '}
              <span className="text-trust-600">Plumber</span>
              <br />
              in Cork
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
              From emergency repairs to complete bathroom renovations.
              Professional, reliable service when you need it most.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <point.icon className="w-5 h-5 text-trust-600 flex-shrink-0" />
                  <span className="font-medium">{point.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+353211234567" className="btn-primary text-lg">
                <Phone className="w-5 h-5" />
                Call 021 123 4567
              </a>
              <Link href="#contact" className="btn-secondary">
                Request a Quote
              </Link>
            </div>

            {/* Reviews summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-slate-600 font-bold text-sm"
                  >
                    {['JM', 'SK', 'PO', 'MC'][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-safety-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold">4.9/5</span> from 127 reviews
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-trust-600 to-trust-800 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-12 h-12" />
                  </div>
                  <p className="text-xl font-semibold">Professional Service</p>
                  <p className="text-trust-200">Guaranteed Quality</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Fast Response</p>
                  <p className="text-sm text-slate-500">Usually within 1 hour</p>
                </div>
              </div>
            </motion.div>

            {/* Another floating card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -right-4 bg-safety-600 text-white rounded-xl shadow-lg p-4"
            >
              <p className="font-bold text-lg">24/7</p>
              <p className="text-safety-100 text-sm">Emergency Service</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
