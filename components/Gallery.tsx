'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    category: 'Bathroom',
    title: 'Modern Bathroom Renovation',
    description: 'Complete renovation in Douglas',
  },
  {
    id: 2,
    category: 'Boiler',
    title: 'Boiler Installation',
    description: 'New combi boiler in Cork City',
  },
  {
    id: 3,
    category: 'Bathroom',
    title: 'Ensuite Installation',
    description: 'Compact ensuite in Ballincollig',
  },
  {
    id: 4,
    category: 'Heating',
    title: 'Underfloor Heating',
    description: 'Wet system installation',
  },
  {
    id: 5,
    category: 'Plumbing',
    title: 'Kitchen Plumbing',
    description: 'Full kitchen re-pipe',
  },
  {
    id: 6,
    category: 'Bathroom',
    title: 'Walk-in Shower',
    description: 'Accessible shower room',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const closeModal = () => setSelectedImage(null)
  const nextImage = () =>
    setSelectedImage((i) => (i !== null ? (i + 1) % galleryItems.length : null))
  const prevImage = () =>
    setSelectedImage((i) =>
      i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null
    )

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="divider-short mx-auto mb-4" />
          <h2 className="section-heading">Our Work</h2>
          <p className="section-subheading mx-auto">
            Browse some of our recent projects across Cork
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-trust-500 focus:ring-offset-2"
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-trust-100 to-trust-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-trust-400">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-trust-300/50 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-medium">{item.category}</span>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              </div>

              {/* Category badge */}
              <span className="absolute top-3 left-3 badge-trust text-xs">
                {item.category}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image content */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video bg-gradient-to-br from-trust-200 to-trust-300 rounded-xl flex items-center justify-center">
                  <div className="text-center text-trust-600">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-trust-400/50 flex items-center justify-center">
                      <ZoomIn className="w-12 h-12" />
                    </div>
                    <p className="text-xl font-semibold">
                      {galleryItems[selectedImage].title}
                    </p>
                    <p className="text-trust-500">
                      {galleryItems[selectedImage].description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-center text-white">
                  <p className="font-semibold">
                    {galleryItems[selectedImage].title}
                  </p>
                  <p className="text-slate-400">
                    {galleryItems[selectedImage].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
