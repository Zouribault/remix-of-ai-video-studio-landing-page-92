'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Scan, Heart, Activity, Trophy, Shield } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import equineSurgery from '@/assets/equine-surgery-room.jpg'
import regenerativeTreatment from '@/assets/regenerative-treatment.jpg'
import equineDiagnostics from '@/assets/equine-diagnostics.jpg'

export function Services() {
  const { t } = useLanguage()

  const services = [
    { icon: Stethoscope, title: t('service1Title'), desc: t('service1Desc'), image: equineDiagnostics },
    { icon: Scan, title: t('service2Title'), desc: t('service2Desc'), image: null },
    { icon: Heart, title: t('service3Title'), desc: t('service3Desc'), image: regenerativeTreatment },
    { icon: Activity, title: t('service4Title'), desc: t('service4Desc'), image: null },
    { icon: Trophy, title: t('service5Title'), desc: t('service5Desc'), image: null },
    { icon: Shield, title: t('service6Title'), desc: t('service6Desc'), image: equineSurgery },
  ]

  return (
    <section id="services" className="relative py-24 bg-card">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
            {t('servicesTag')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Featured Image Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          className="mb-16 relative rounded-2xl overflow-hidden premium-shadow max-w-5xl mx-auto"
        >
          <img 
            src={equineSurgery} 
            alt="Modern equine surgery room"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Excellence en Chirurgie Équine
              </h3>
              <p className="text-white/80">
                Équipements de pointe et techniques chirurgicales innovantes pour le meilleur traitement de vos chevaux.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              className="bg-background rounded-2xl border border-border hover:border-accent/50 transition-all premium-shadow group overflow-hidden">
              
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              
              <div className="p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
