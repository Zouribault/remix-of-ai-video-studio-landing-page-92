'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
            {t('aboutTag')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              className="text-center p-8 bg-card rounded-2xl border border-border premium-shadow">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">{t('aboutBio')}</p>
        </motion.div>
      </div>
    </section>
  )
}
