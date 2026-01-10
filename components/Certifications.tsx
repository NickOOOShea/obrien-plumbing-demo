'use client'

import { motion } from 'framer-motion'
import { Shield, Award, BadgeCheck, ExternalLink } from 'lucide-react'

const certifications = [
  {
    id: 'rgii',
    name: 'RGII Registered',
    description: 'Registered Gas Installer of Ireland - Licensed for all gas work',
    icon: Shield,
    verifyUrl: 'https://www.rgii.ie',
    number: 'RGI-12345',
  },
  {
    id: 'seai',
    name: 'SEAI Registered',
    description: 'Sustainable Energy Authority of Ireland approved contractor',
    icon: Award,
    verifyUrl: 'https://www.seai.ie',
    number: null,
  },
  {
    id: 'ciri',
    name: 'CIF Member',
    description: 'Construction Industry Federation member since 2010',
    icon: BadgeCheck,
    verifyUrl: 'https://www.cif.ie',
    number: null,
  },
]

const insuranceDetails = [
  { label: 'Public Liability', value: '€2,000,000' },
  { label: 'Professional Indemnity', value: '€500,000' },
  { label: 'Employer Liability', value: '€2,000,000' },
]

export default function Certifications() {
  return (
    <section className="py-20 md:py-28 bg-trust-gradient text-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1 bg-white/30 rounded-full mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certified & Insured
          </h2>
          <p className="text-trust-200 text-lg max-w-2xl mx-auto">
            Your peace of mind matters. All our work is fully certified,
            insured, and compliant with Irish regulations.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <cert.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-trust-200 mb-4">{cert.description}</p>
              {cert.number && (
                <p className="text-sm text-trust-300 mb-2">
                  Registration: {cert.number}
                </p>
              )}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
              >
                Verify Online
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Insurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p className="text-trust-200">
                Comprehensive insurance coverage for complete peace of mind
              </p>
            </div>
            <div className="flex flex-wrap gap-6 md:gap-8">
              {insuranceDetails.map((item) => (
                <div key={item.label} className="text-center md:text-left">
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="text-sm text-trust-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
