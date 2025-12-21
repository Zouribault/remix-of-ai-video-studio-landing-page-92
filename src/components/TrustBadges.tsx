import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Shield, Award, Globe, Clock } from 'lucide-react'
import clinicInjection from '@/assets/clinic-injection.jpg'
import clinicExamination from '@/assets/clinic-examination.jpg'

export function TrustBadges() {
  const { language } = useLanguage()

  const badges = [
    {
      icon: Shield,
      value: '30+',
      label: language === 'de' ? 'Jahre Erfahrung' : language === 'fr' ? 'Ans d\'expérience' : 'Years Experience',
    },
    {
      icon: Award,
      value: '5+',
      label: language === 'de' ? 'Olympische Spiele' : language === 'fr' ? 'Jeux Olympiques' : 'Olympic Games',
    },
    {
      icon: Globe,
      value: '40+',
      label: language === 'de' ? 'Länder' : language === 'fr' ? 'Pays' : 'Countries',
    },
    {
      icon: Clock,
      value: '24/7',
      label: language === 'de' ? 'Notfallbereitschaft' : language === 'fr' ? 'Urgences' : 'Emergency Service',
    },
  ]

  const title = language === 'de' 
    ? 'Präzision & Fürsorge' 
    : language === 'fr' 
    ? 'Précision & Soins' 
    : 'Precision & Care'

  const subtitle = language === 'de' 
    ? 'Jede Behandlung wird mit höchster Sorgfalt und modernsten Techniken durchgeführt'
    : language === 'fr' 
    ? 'Chaque traitement est réalisé avec le plus grand soin et les techniques les plus modernes'
    : 'Every treatment is performed with the utmost care and the most modern techniques'

  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden premium-shadow">
                  <img
                    src={clinicInjection}
                    alt="Precise veterinary treatment"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden premium-shadow">
                  <img
                    src={clinicExamination}
                    alt="Professional examination"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <badge.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-foreground">
                      {badge.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {badge.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
