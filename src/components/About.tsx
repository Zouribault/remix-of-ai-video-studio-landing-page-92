'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import legExamination from '@/assets/leg-examination.jpg'

export function About() {
  const { t } = useLanguage()

  const stats = [
    { value: t('aboutYearsExp'), label: t('aboutYearsLabel') },
    { value: t('aboutPatientsNum'), label: t('aboutPatientsLabel') },
    { value: t('aboutCountriesNum'), label: t('aboutCountriesLabel') },
    { value: t('aboutSurgeriesNum'), label: t('aboutSurgeriesLabel') },
  ]

  return (
    <section id="about" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
              {t('aboutTag')}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              {t('aboutDescription')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('aboutBio')}
            </p>
          </motion.div>

          {/* Single Representative Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden premium-shadow">
              <img 
                src={legExamination} 
                alt="Dr. Nolting examining a horse"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              className="text-center p-8 bg-card rounded-2xl border border-border premium-shadow">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
