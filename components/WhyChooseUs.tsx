'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Shield,
  ThumbsUp,
  BadgeCheck,
  Banknote,
  Users,
} from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Same-day service for most jobs. Emergency call-outs within 1 hour.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: '€2 million public liability insurance. Your home is protected.',
  },
  {
    icon: BadgeCheck,
    title: 'RGII Registered',
    description: 'Certified Gas Safe engineers. All work meets Irish standards.',
  },
  {
    icon: Banknote,
    title: 'Upfront Pricing',
    description: 'No hidden fees. We quote before we start, no surprises.',
  },
  {
    icon: ThumbsUp,
    title: 'Guaranteed Work',
    description: '12-month warranty on all workmanship. Complete peace of mind.',
  },
  {
    icon: Users,
    title: 'Local & Trusted',
    description: '15+ years serving Cork. We know the area and our customers.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 bg-grid-pattern">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="divider-short mb-4" />
            <h2 className="section-heading mb-6">
              Why Cork Homeowners
              <br />
              <span className="text-trust-600">Trust O'Brien</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              When you call a plumber into your home, you want someone you can
              trust. We've built our reputation on honest work, fair prices, and
              treating every home like it's our own.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-trust-600">15+</p>
                <p className="text-sm text-slate-500">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-trust-600">5,000+</p>
                <p className="text-sm text-slate-500">Jobs Completed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-trust-600">4.9</p>
                <p className="text-sm text-slate-500">Star Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-5 flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-trust-100 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-trust-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{reason.title}</h3>
                  <p className="text-sm text-slate-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 quote-callout"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xl md:text-2xl text-slate-700 italic mb-2">
                "We've used Michael for years. Always on time, always does a great job.
                Wouldn't call anyone else."
              </p>
              <p className="font-semibold text-slate-900">— Mary K., Douglas</p>
            </div>
            <div className="flex-shrink-0">
              <div className="star-rating text-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
