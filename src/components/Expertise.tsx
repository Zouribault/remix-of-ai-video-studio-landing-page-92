import { motion } from 'framer-motion'
import { Bone, Activity, Shield, Award } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import expertiseXray from '@/assets/expertise-xray.jpg'

export function Expertise() {
  const { t } = useLanguage()

  const expertises = [
    { icon: Bone, title: t('expertise1Title'), desc: t('expertise1Desc') },
    { icon: Activity, title: t('expertise2Title'), desc: t('expertise2Desc') },
    { icon: Shield, title: t('expertise3Title'), desc: t('expertise3Desc') },
    { icon: Award, title: t('expertise4Title'), desc: t('expertise4Desc') },
  ]

  return (
    <section id="expertise" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
              {t('expertiseTag')}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('expertiseTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('expertiseSubtitle')}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden premium-shadow">
              <img 
                src={expertiseXray} 
                alt="Equine diagnostic expertise"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((expertise, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              className="p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all premium-shadow group text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/20 transition-colors">
                <expertise.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{expertise.title}</h3>
              <p className="text-muted-foreground text-sm">{expertise.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
