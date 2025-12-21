import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)

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
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

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
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-primary drop-shadow-[0_4px_8px_rgba(255,255,255,0.9)]">
            {t('heroTitle')}
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}
            className="text-xl sm:text-2xl font-semibold mb-4 text-primary-foreground bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block shadow-lg">
            {t('heroSubtitle')}
          </motion.p>
          
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.1 }}
            className="text-lg max-w-2xl mb-10 text-primary-foreground bg-primary/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
            {t('heroDescription')}
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.3 }}
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
