'use client'

import { motion } from 'framer-motion'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useState, useEffect, Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import { useLanguage, languages } from '@/contexts/LanguageContext'
import * as THREE from 'three'

// Stylized 3D Horse Component
function Horse3D() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle breathing/bobbing animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + 0.3
    }
  })

  const bodyMaterial = new THREE.MeshStandardMaterial({ 
    color: '#8B4513', 
    roughness: 0.4, 
    metalness: 0.3 
  })
  
  const accentMaterial = new THREE.MeshStandardMaterial({ 
    color: '#c8a03c', 
    roughness: 0.2, 
    metalness: 0.8 
  })

  const darkMaterial = new THREE.MeshStandardMaterial({ 
    color: '#2d1810', 
    roughness: 0.6, 
    metalness: 0.1 
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, -0.5, 0]} scale={1.2}>
        {/* Body - Main torso */}
        <mesh position={[0, 0, 0]} material={bodyMaterial}>
          <capsuleGeometry args={[0.8, 1.5, 8, 16]} />
        </mesh>
        
        {/* Chest */}
        <mesh position={[0.9, 0.2, 0]} rotation={[0, 0, -0.3]} material={bodyMaterial}>
          <sphereGeometry args={[0.7, 16, 16]} />
        </mesh>
        
        {/* Hindquarters */}
        <mesh position={[-0.9, 0.1, 0]} rotation={[0, 0, 0.2]} material={bodyMaterial}>
          <sphereGeometry args={[0.75, 16, 16]} />
        </mesh>
        
        {/* Neck */}
        <mesh position={[1.3, 0.8, 0]} rotation={[0, 0, 0.8]} material={bodyMaterial}>
          <capsuleGeometry args={[0.35, 1.2, 8, 16]} />
        </mesh>
        
        {/* Head */}
        <mesh position={[1.8, 1.6, 0]} rotation={[0, 0, 0.4]} material={bodyMaterial}>
          <capsuleGeometry args={[0.25, 0.6, 8, 16]} />
        </mesh>
        
        {/* Snout */}
        <mesh position={[2.2, 1.4, 0]} rotation={[0, 0, 0.2]} material={bodyMaterial}>
          <boxGeometry args={[0.5, 0.3, 0.35]} />
        </mesh>
        
        {/* Ears */}
        <mesh position={[1.6, 2.0, 0.15]} rotation={[0.2, 0, 0.3]} material={darkMaterial}>
          <coneGeometry args={[0.08, 0.25, 8]} />
        </mesh>
        <mesh position={[1.6, 2.0, -0.15]} rotation={[-0.2, 0, 0.3]} material={darkMaterial}>
          <coneGeometry args={[0.08, 0.25, 8]} />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[2.0, 1.7, 0.2]} material={darkMaterial}>
          <sphereGeometry args={[0.06, 8, 8]} />
        </mesh>
        <mesh position={[2.0, 1.7, -0.2]} material={darkMaterial}>
          <sphereGeometry args={[0.06, 8, 8]} />
        </mesh>
        
        {/* Mane */}
        {[...Array(8)].map((_, i) => (
          <mesh 
            key={i} 
            position={[1.3 - i * 0.15, 1.4 - i * 0.08, 0]} 
            rotation={[0, 0, 0.5 + i * 0.1]}
            material={darkMaterial}
          >
            <capsuleGeometry args={[0.06, 0.3 + i * 0.02, 4, 8]} />
          </mesh>
        ))}
        
        {/* Front legs */}
        <mesh position={[0.6, -0.9, 0.3]} material={bodyMaterial}>
          <capsuleGeometry args={[0.12, 0.8, 8, 16]} />
        </mesh>
        <mesh position={[0.6, -0.9, -0.3]} material={bodyMaterial}>
          <capsuleGeometry args={[0.12, 0.8, 8, 16]} />
        </mesh>
        
        {/* Back legs */}
        <mesh position={[-0.7, -0.85, 0.35]} rotation={[0, 0, 0.1]} material={bodyMaterial}>
          <capsuleGeometry args={[0.14, 0.75, 8, 16]} />
        </mesh>
        <mesh position={[-0.7, -0.85, -0.35]} rotation={[0, 0, 0.1]} material={bodyMaterial}>
          <capsuleGeometry args={[0.14, 0.75, 8, 16]} />
        </mesh>
        
        {/* Hooves */}
        <mesh position={[0.6, -1.45, 0.3]} material={darkMaterial}>
          <cylinderGeometry args={[0.1, 0.12, 0.15, 8]} />
        </mesh>
        <mesh position={[0.6, -1.45, -0.3]} material={darkMaterial}>
          <cylinderGeometry args={[0.1, 0.12, 0.15, 8]} />
        </mesh>
        <mesh position={[-0.7, -1.4, 0.35]} material={darkMaterial}>
          <cylinderGeometry args={[0.1, 0.12, 0.15, 8]} />
        </mesh>
        <mesh position={[-0.7, -1.4, -0.35]} material={darkMaterial}>
          <cylinderGeometry args={[0.1, 0.12, 0.15, 8]} />
        </mesh>
        
        {/* Tail */}
        <mesh position={[-1.5, 0.3, 0]} rotation={[0, 0, -0.8]} material={darkMaterial}>
          <capsuleGeometry args={[0.08, 0.8, 4, 8]} />
        </mesh>
        <mesh position={[-1.8, -0.2, 0]} rotation={[0, 0, -1.2]} material={darkMaterial}>
          <capsuleGeometry args={[0.06, 0.6, 4, 8]} />
        </mesh>
        
        {/* Golden harness/decoration */}
        <mesh position={[1.0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]} material={accentMaterial}>
          <torusGeometry args={[0.45, 0.03, 8, 32]} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={accentMaterial}>
          <torusGeometry args={[0.85, 0.02, 8, 32]} />
        </mesh>
      </group>
    </Float>
  )
}

// Particle system for atmosphere
function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200
  
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 15
    positions[i + 1] = (Math.random() - 0.5) * 10
    positions[i + 2] = (Math.random() - 0.5) * 10
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#c8a03c" transparent opacity={0.6} />
    </points>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
      <color attach="background" args={['#0a1f15']} />
      <fog attach="fog" args={['#0a1f15', 8, 20]} />
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#c8a03c" />
      <pointLight position={[3, -2, 3]} intensity={0.4} color="#2d5a47" />
      <spotLight position={[0, 8, 0]} intensity={0.6} angle={0.5} color="#ffffff" />
      
      <Suspense fallback={null}>
        <Horse3D />
        <Particles />
        <Environment preset="forest" />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Horse Background */}
      <div className="absolute inset-0">
        <Scene3D />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

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
