import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import equineSurgery from '@/assets/equine-surgery-room.jpg'
import regenerativeTreatment from '@/assets/regenerative-treatment.jpg'
import equineDiagnostics from '@/assets/equine-diagnostics.jpg'
import legExamination from '@/assets/leg-examination.jpg'
import horsePortrait from '@/assets/horse-portrait.jpg'
import horseRecovery from '@/assets/horse-recovery.jpg'
import expertiseXray from '@/assets/expertise-xray.jpg'
import heroEquineClinic from '@/assets/hero-equine-clinic.jpg'

export function Gallery() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const categories = [
    { key: 'all', label: t('galleryAll') },
    { key: 'surgery', label: t('gallerySurgery') },
    { key: 'treatments', label: t('galleryTreatments') },
    { key: 'diagnostics', label: t('galleryDiagnostics') },
    { key: 'exams', label: t('galleryExams') },
    { key: 'patients', label: t('galleryPatients') },
    { key: 'recovery', label: t('galleryRecovery') },
    { key: 'clinic', label: t('galleryClinic') },
  ]

  const galleryImages = [
    { src: equineSurgery, alt: t('galleryImage1'), category: 'surgery' },
    { src: regenerativeTreatment, alt: t('galleryImage2'), category: 'treatments' },
    { src: equineDiagnostics, alt: t('galleryImage3'), category: 'diagnostics' },
    { src: legExamination, alt: t('galleryImage4'), category: 'exams' },
    { src: horsePortrait, alt: t('galleryImage5'), category: 'patients' },
    { src: horseRecovery, alt: t('galleryImage6'), category: 'recovery' },
    { src: expertiseXray, alt: t('galleryImage7'), category: 'diagnostics' },
    { src: heroEquineClinic, alt: t('galleryImage8'), category: 'clinic' },
  ]
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
            {t('galleryTag')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {t('galleryTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('gallerySubtitle')}
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category.key
                    ? 'bg-accent text-primary-foreground'
                    : 'bg-background border border-border text-muted-foreground hover:border-accent/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium">{image.alt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  )
}
