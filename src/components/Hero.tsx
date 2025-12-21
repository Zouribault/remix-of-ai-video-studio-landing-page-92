'use client'

import { motion } from 'framer-motion'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useLanguage, languages } from '@/contexts/LanguageContext'

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#2d5a47"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#c8a03c" />
      <Suspense fallback={null}>
        <AnimatedSphere />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

export function Hero() {
  const { t, language, setLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentLang = languages.find(l => l.code === language)

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(150, 35%, 15%) 0%, hsl(150, 40%, 8%) 100%)' }}>
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <Scene3D />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 w-full z-50"
      >
        <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ${isScrolled ? 'glass-navbar' : 'bg-transparent'}`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-display text-2xl font-bold text-white">Dr. Nolting</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['about', 'services', 'expertise', 'achievements', 'contact'].map((section) => (
                <a key={section} href={`#${section}`} className="text-white/90 hover:text-accent font-medium transition-colors">
                  {t(`nav${section.charAt(0).toUpperCase() + section.slice(1)}` as any)}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 glass-effect px-3 py-2 rounded-lg text-white">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{currentLang?.flag}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl py-2 w-48 max-h-64 overflow-y-auto z-50">
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                        className={`w-full px-4 py-2 text-left hover:bg-accent/10 flex items-center gap-3 ${language === lang.code ? 'bg-accent/20 text-accent' : 'text-foreground'}`}>
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden sm:block gold-accent font-semibold px-6 py-3 rounded-lg">
                {t('heroCTA')}
              </motion.button>

              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden glass-effect p-3 rounded-full text-white">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} className="fixed top-0 right-0 h-full w-72 bg-card/95 backdrop-blur-xl z-40 p-6 pt-20">
          <div className="flex flex-col space-y-4">
            {['about', 'services', 'expertise', 'achievements', 'contact'].map((section) => (
              <a key={section} href={`#${section}`} onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-accent font-medium py-2 text-lg">
                {t(`nav${section.charAt(0).toUpperCase() + section.slice(1)}` as any)}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-8 lg:px-12 pt-20">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 border border-accent/30">
              🏆 {t('aboutTag')}
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t('heroTitle')}
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}
            className="text-xl sm:text-2xl text-accent font-medium mb-4">
            {t('heroSubtitle')}
          </motion.p>
          
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.1 }}
            className="text-lg text-white/80 max-w-2xl mb-10">
            {t('heroDescription')}
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-wrap gap-4">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gold-accent font-semibold px-8 py-4 rounded-lg text-lg hover:scale-105 transition-transform">
              {t('heroCTA')}
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-all">
              {t('heroSecondary')}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
