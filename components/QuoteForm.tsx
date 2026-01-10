'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react'

const services = [
  'Emergency Plumbing',
  'Boiler Service',
  'Boiler Repair',
  'Boiler Installation',
  'Bathroom Installation',
  'Central Heating',
  'General Plumbing',
  'Drain Clearing',
  'Other',
]

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="divider-short mb-4" />
            <h2 className="section-heading mb-4">
              Get a <span className="text-trust-600">Free Quote</span>
            </h2>
            <p className="section-subheading mb-8">
              Tell us about your plumbing needs and we'll get back to you with a
              no-obligation quote, usually within a few hours.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href="tel:+353211234567"
                className="card p-4 flex items-center gap-4 hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-trust-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call Us</p>
                  <p className="font-bold text-slate-900">021 123 4567</p>
                </div>
              </a>

              <a
                href="tel:+353871234567"
                className="card p-4 flex items-center gap-4 hover:shadow-card-hover transition-shadow border-l-4 border-l-safety-500"
              >
                <div className="w-12 h-12 bg-safety-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-safety-600" />
                </div>
                <div>
                  <p className="text-sm text-safety-600 font-medium">24/7 Emergency</p>
                  <p className="font-bold text-slate-900">087 123 4567</p>
                </div>
              </a>

              <a
                href="mailto:info@obrienplumbing.ie"
                className="card p-4 flex items-center gap-4 hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-trust-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email Us</p>
                  <p className="font-bold text-slate-900">info@obrienplumbing.ie</p>
                </div>
              </a>

              <div className="card p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-trust-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Based In</p>
                  <p className="font-bold text-slate-900">Ballincollig, Cork</p>
                </div>
              </div>

              <div className="card p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-trust-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Office Hours</p>
                  <p className="font-bold text-slate-900">Mon-Fri 8am-6pm, Sat 9am-2pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-success-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Thanks for your message!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    We've received your quote request and will be in touch shortly,
                    usually within a few hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: '',
                        message: '',
                      })
                    }}
                    className="btn-secondary"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Murphy"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="087 123 4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="john@example.ie"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="select-field"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Tell us about the job
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="textarea-field"
                      placeholder="Please describe what you need help with..."
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request Free Quote
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    We'll respond within a few hours during business hours.
                    For emergencies, please call our 24/7 line.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
