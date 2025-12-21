import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import heroReception from '@/assets/hero-reception.jpg'
import heroClinicExterior from '@/assets/hero-clinic-exterior.jpg'

const heroImages = [heroReception, heroClinicExterior]

export function Hero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img 
            src={heroImages[currentSlide]} 
            alt="Björn Nolting Klinik" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-8 lg:px-12 pt-20">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-6 shadow-lg">
              🏆 {t('aboutTag')}
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-10 text-white [text-shadow:_0_2px_12px_rgb(0_0_0_/_80%),_0_4px_24px_rgb(0_0_0_/_60%)]">
            {t('heroTitle')}
          </motion.h1>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:scale-105 transition-transform shadow-xl">
              {t('heroCTA')}
            </Link>
            <Link to="/about" className="bg-white/90 text-primary font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white transition-all shadow-xl">
              {t('heroSecondary')}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
