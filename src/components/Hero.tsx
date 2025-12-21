'use client'

import { motion } from 'framer-motion'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import * as THREE from 'three'

// Animated Leg Component
function AnimatedLeg({ 
  position, 
  phase, 
  isBack = false,
  bodyMaterial,
  darkMaterial
}: { 
  position: [number, number, number]
  phase: number
  isBack?: boolean
  bodyMaterial: THREE.MeshStandardMaterial
  darkMaterial: THREE.MeshStandardMaterial
}) {
  const legRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (legRef.current) {
      const time = state.clock.elapsedTime * 3 + phase
      const swing = Math.sin(time) * 0.6
      const lift = Math.max(0, Math.sin(time)) * 0.3
      
      legRef.current.rotation.z = swing * (isBack ? 0.8 : 1)
      legRef.current.position.y = position[1] + lift
    }
  })
  
  return (
    <group ref={legRef} position={position}>
      <mesh position={[0, -0.2, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[isBack ? 0.14 : 0.12, 0.4, 8, 16]} />
      </mesh>
      <mesh position={[0, -0.6, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[0.08, 0.35, 8, 16]} />
      </mesh>
      <mesh position={[0, -0.95, 0]} material={darkMaterial}>
        <cylinderGeometry args={[0.08, 0.1, 0.12, 8]} />
      </mesh>
    </group>
  )
}

function AnimatedTail({ darkMaterial }: { darkMaterial: THREE.MeshStandardMaterial }) {
  const tailRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (tailRef.current) {
      const time = state.clock.elapsedTime
      tailRef.current.rotation.z = -0.8 + Math.sin(time * 2) * 0.3
      tailRef.current.rotation.x = Math.sin(time * 3) * 0.2
    }
  })
  
  return (
    <group ref={tailRef} position={[-1.5, 0.3, 0]}>
      <mesh material={darkMaterial}>
        <capsuleGeometry args={[0.08, 0.8, 4, 8]} />
      </mesh>
      <mesh position={[-0.3, -0.5, 0]} rotation={[0, 0, -0.4]} material={darkMaterial}>
        <capsuleGeometry args={[0.06, 0.6, 4, 8]} />
      </mesh>
      <mesh position={[-0.5, -0.9, 0]} rotation={[0, 0, -0.3]} material={darkMaterial}>
        <capsuleGeometry args={[0.04, 0.4, 4, 8]} />
      </mesh>
    </group>
  )
}

function AnimatedMane({ darkMaterial }: { darkMaterial: THREE.MeshStandardMaterial }) {
  const maneRefs = useRef<THREE.Mesh[]>([])
  
  useFrame((state) => {
    maneRefs.current.forEach((mesh, i) => {
      if (mesh) {
        const time = state.clock.elapsedTime
        mesh.rotation.z = 0.5 + i * 0.1 + Math.sin(time * 4 + i * 0.5) * 0.15
        mesh.rotation.x = Math.sin(time * 3 + i * 0.3) * 0.1
      }
    })
  })
  
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <mesh 
          key={i}
          ref={(el) => { if (el) maneRefs.current[i] = el }}
          position={[1.3 - i * 0.12, 1.4 - i * 0.06, 0]} 
          material={darkMaterial}
        >
          <capsuleGeometry args={[0.05, 0.25 + i * 0.03, 4, 8]} />
        </mesh>
      ))}
    </>
  )
}

function Horse3D() {
  const groupRef = useRef<THREE.Group>(null)
  const bodyRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      groupRef.current.position.y = -0.5 + Math.abs(Math.sin(time * 3)) * 0.2
      groupRef.current.position.x = Math.sin(time * 3) * 0.1
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.15 + 0.3
    }
    
    if (bodyRef.current) {
      const time = state.clock.elapsedTime
      bodyRef.current.rotation.z = Math.sin(time * 3) * 0.05
    }
    
    if (headRef.current) {
      const time = state.clock.elapsedTime
      headRef.current.rotation.z = 0.4 + Math.sin(time * 3 + 0.5) * 0.1
      headRef.current.position.y = 1.6 + Math.sin(time * 3) * 0.08
    }
  })

  const bodyMaterial = new THREE.MeshStandardMaterial({ color: '#8B4513', roughness: 0.4, metalness: 0.3 })
  const accentMaterial = new THREE.MeshStandardMaterial({ color: '#c8a03c', roughness: 0.2, metalness: 0.8 })
  const darkMaterial = new THREE.MeshStandardMaterial({ color: '#2d1810', roughness: 0.6, metalness: 0.1 })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={1.2}>
      <group ref={bodyRef}>
        <mesh position={[0, 0, 0]} material={bodyMaterial}>
          <capsuleGeometry args={[0.8, 1.5, 8, 16]} />
        </mesh>
        <mesh position={[0.9, 0.2, 0]} rotation={[0, 0, -0.3]} material={bodyMaterial}>
          <sphereGeometry args={[0.7, 16, 16]} />
        </mesh>
        <mesh position={[-0.9, 0.1, 0]} rotation={[0, 0, 0.2]} material={bodyMaterial}>
          <sphereGeometry args={[0.75, 16, 16]} />
        </mesh>
        <mesh position={[1.3, 0.8, 0]} rotation={[0, 0, 0.8]} material={bodyMaterial}>
          <capsuleGeometry args={[0.35, 1.2, 8, 16]} />
        </mesh>
        <mesh position={[1.0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]} material={accentMaterial}>
          <torusGeometry args={[0.45, 0.03, 8, 32]} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={accentMaterial}>
          <torusGeometry args={[0.85, 0.02, 8, 32]} />
        </mesh>
      </group>
      
      <group ref={headRef} position={[1.8, 1.6, 0]}>
        <mesh rotation={[0, 0, 0]} material={bodyMaterial}>
          <capsuleGeometry args={[0.25, 0.6, 8, 16]} />
        </mesh>
        <mesh position={[0.4, -0.2, 0]} rotation={[0, 0, -0.2]} material={bodyMaterial}>
          <boxGeometry args={[0.5, 0.3, 0.35]} />
        </mesh>
        <mesh position={[-0.2, 0.4, 0.15]} rotation={[0.2, 0, 0.3]} material={darkMaterial}>
          <coneGeometry args={[0.08, 0.25, 8]} />
        </mesh>
        <mesh position={[-0.2, 0.4, -0.15]} rotation={[-0.2, 0, 0.3]} material={darkMaterial}>
          <coneGeometry args={[0.08, 0.25, 8]} />
        </mesh>
        <mesh position={[0.2, 0.1, 0.2]} material={darkMaterial}>
          <sphereGeometry args={[0.06, 8, 8]} />
        </mesh>
        <mesh position={[0.2, 0.1, -0.2]} material={darkMaterial}>
          <sphereGeometry args={[0.06, 8, 8]} />
        </mesh>
      </group>
      
      <AnimatedMane darkMaterial={darkMaterial} />
      <AnimatedLeg position={[0.6, -0.5, 0.3]} phase={0} bodyMaterial={bodyMaterial} darkMaterial={darkMaterial} />
      <AnimatedLeg position={[0.6, -0.5, -0.3]} phase={Math.PI} bodyMaterial={bodyMaterial} darkMaterial={darkMaterial} />
      <AnimatedLeg position={[-0.7, -0.5, 0.35]} phase={Math.PI * 0.5} isBack bodyMaterial={bodyMaterial} darkMaterial={darkMaterial} />
      <AnimatedLeg position={[-0.7, -0.5, -0.35]} phase={Math.PI * 1.5} isBack bodyMaterial={bodyMaterial} darkMaterial={darkMaterial} />
      <AnimatedTail darkMaterial={darkMaterial} />
    </group>
  )
}

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
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
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
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  )
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Scene3D />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

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
            <Link to="/contact" className="gold-accent font-semibold px-8 py-4 rounded-lg text-lg hover:scale-105 transition-transform">
              {t('heroCTA')}
            </Link>
            <Link to="/about" className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-all">
              {t('heroSecondary')}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
