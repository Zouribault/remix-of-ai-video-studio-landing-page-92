import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import achievementsAward from '@/assets/achievements-award.jpg'

export function Achievements() {
  const { t } = useLanguage()

  const milestones = [
    { year: '1994', title: 'Doctorat en Médecine Vétérinaire', desc: 'Université de Hanovre' },
    { year: '2000', title: 'Vétérinaire de l\'Équipe Nationale Allemande', desc: 'Fédération Équestre Allemande' },
    { year: '2008', title: 'Jeux Olympiques de Pékin', desc: 'Vétérinaire officiel de l\'équipe' },
    { year: '2012', title: 'Jeux Olympiques de Londres', desc: 'Chef vétérinaire de la délégation' },
    { year: '2016', title: 'Prix d\'Excellence en Orthopédie Équine', desc: 'Association Mondiale Vétérinaire' },
    { year: '2020', title: 'Pionnier en Médecine Régénérative', desc: 'Plus de 1000 traitements PRP réalisés' },
  ]

  return (
    <section id="achievements" className="relative py-24 bg-card">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden premium-shadow">
              <img 
                src={achievementsAward} 
                alt="Veterinary excellence awards"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
              {t('achievementsTag')}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('achievementsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('achievementsSubtitle')}
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />
            
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }} 
                viewport={{ once: true }}
                className="relative flex gap-6 mb-8 last:mb-0"
              >
                {/* Year dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-accent rounded-full items-center justify-center z-10">
                  <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 bg-background rounded-2xl border border-border premium-shadow">
                  <span className="md:hidden inline-block px-3 py-1 bg-accent text-primary-foreground rounded-full text-sm font-bold mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
