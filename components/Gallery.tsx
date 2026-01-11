'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    category: 'Bathroom',
    title: 'Modern Bathroom Renovation',
    description: 'Complete renovation in Douglas',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  },
  {
    id: 2,
    category: 'Bathroom',
    title: 'Luxury Ensuite',
    description: 'High-end ensuite in Blackrock',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
  },
  {
    id: 3,
    category: 'Bathroom',
    title: 'Contemporary Design',
    description: 'Minimalist bathroom in Cork City',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
  },
  {
    id: 4,
    category: 'Kitchen',
    title: 'Kitchen Plumbing',
    description: 'Full kitchen re-pipe in Ballincollig',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    id: 5,
    category: 'Heating',
    title: 'Boiler Installation',
    description: 'New combi boiler in Carrigaline',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  },
  {
    id: 6,
    category: 'Bathroom',
    title: 'Walk-in Shower',
    description: 'Accessible shower room in Cobh',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
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
              {/* Real image */}
              <Image
                src={item.image}
                alt={`${item.title} - ${item.description}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

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
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={galleryItems[selectedImage].image}
                    alt={`${galleryItems[selectedImage].title} - ${galleryItems[selectedImage].description}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>

                <div className="mt-4 text-center text-white">
                  <span className="inline-block px-3 py-1 bg-trust-600 rounded-full text-sm mb-2">
                    {galleryItems[selectedImage].category}
                  </span>
                  <p className="font-semibold text-xl">
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
