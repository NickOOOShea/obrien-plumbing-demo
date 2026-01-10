'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'John Murphy',
    location: 'Douglas',
    rating: 5,
    text: "Had an emergency leak on a Sunday night. Michael was at my door within 45 minutes. Fixed the problem quickly and professionally. Can't recommend highly enough!",
    service: 'Emergency Plumbing',
    date: 'December 2025',
  },
  {
    id: 2,
    name: 'Sarah Kelly',
    location: 'Ballincollig',
    rating: 5,
    text: "O'Brien Plumbing installed our new bathroom from start to finish. Excellent workmanship, great communication throughout. The finished result is beautiful.",
    service: 'Bathroom Installation',
    date: 'November 2025',
  },
  {
    id: 3,
    name: "Patrick O'Sullivan",
    location: 'Cork City',
    rating: 5,
    text: 'Regular boiler service - always on time, thorough, and leaves everything spotless. Have been using them for 5 years now. Reliable as clockwork.',
    service: 'Boiler Service',
    date: 'October 2025',
  },
  {
    id: 4,
    name: 'Mary Collins',
    location: 'Carrigaline',
    rating: 5,
    text: 'Called about a blocked drain that other plumbers said would need major work. Michael had it cleared in under an hour with no fuss. Fair price too.',
    service: 'Drain Clearing',
    date: 'September 2025',
  },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((i) => (i + 1) % reviews.length)
  const prev = () => setCurrentIndex((i) => (i - 1 + reviews.length) % reviews.length)

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="divider-short mx-auto mb-4" />
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading mx-auto">
            Don't just take our word for it - hear from homeowners across Cork
          </p>
        </motion.div>

        {/* Reviews carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="card-testimonial p-8 md:p-10"
            >
              <Quote className="w-10 h-10 text-trust-200 mb-4" />

              <div className="star-rating mb-4">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-slate-700 mb-6 leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-bold text-slate-900">
                    {reviews[currentIndex].name}
                  </p>
                  <p className="text-slate-500">
                    {reviews[currentIndex].location} • {reviews[currentIndex].service}
                  </p>
                </div>
                <span className="badge-trust">{reviews[currentIndex].date}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center text-slate-600 hover:text-trust-600 hover:shadow-card-hover transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-trust-600 w-6'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center text-slate-600 hover:text-trust-600 hover:shadow-card-hover transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Review summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-card">
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-slate-600">
              <strong className="text-slate-900">4.9/5</strong> from 127 reviews on Google
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
