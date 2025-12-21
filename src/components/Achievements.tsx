import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Calendar, MapPin, Trophy, Medal, Star, Globe } from 'lucide-react'
import achievementsAward from '@/assets/achievements-award.jpg'

export function Achievements() {
  const { t } = useLanguage()

  const milestones = [
    { 
      year: '1994', 
      title: 'Doctorat en Médecine Vétérinaire', 
      desc: 'Université de Hanovre - Mention Très Bien',
      icon: Calendar 
    },
    { 
      year: '2000', 
      title: 'Vétérinaire de l\'Équipe Nationale Allemande', 
      desc: 'Nomination par la Fédération Équestre Allemande',
      icon: Trophy 
    },
    { 
      year: '2008', 
      title: 'Jeux Olympiques de Pékin', 
      desc: 'Vétérinaire officiel - Équipe allemande de saut',
      icon: Medal 
    },
    { 
      year: '2012', 
      title: 'Jeux Olympiques de Londres', 
      desc: 'Chef vétérinaire de la délégation équestre allemande',
      icon: Medal 
    },
    { 
      year: '2016', 
      title: 'Prix d\'Excellence en Orthopédie Équine', 
      desc: 'Décerné par l\'Association Mondiale Vétérinaire',
      icon: Star 
    },
    { 
      year: '2020', 
      title: 'Pionnier en Médecine Régénérative', 
      desc: 'Plus de 1000 traitements PRP et cellules souches réalisés',
      icon: Globe 
    },
  ]

  const awards = [
    { title: 'Excellence en Chirurgie Équine', org: 'ECVS', year: '2018' },
    { title: 'Innovation en Médecine Sportive', org: 'FEI', year: '2019' },
    { title: 'Contribution à la Recherche', org: 'AAEP', year: '2021' },
    { title: 'Meilleur Praticien Européen', org: 'FEEVA', year: '2022' },
  ]

  const olympicGames = [
    { city: 'Pékin 2008', role: 'Vétérinaire officiel', medals: '2 médailles d\'or pour l\'équipe' },
    { city: 'Londres 2012', role: 'Chef vétérinaire', medals: '1 or, 1 argent, 1 bronze' },
    { city: 'Rio 2016', role: 'Consultant', medals: '1 médaille d\'or' },
  ]

  return (
    <section id="achievements" className="relative py-24 bg-card">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
              {t('achievementsTag')}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('achievementsTitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t('achievementsSubtitle')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trois décennies de pratique vétérinaire au plus haut niveau, marquées par 
              des succès olympiques, des innovations médicales et une reconnaissance 
              internationale de nos pairs.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Parcours Professionnel
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
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
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-accent rounded-full items-center justify-center z-10">
                    <milestone.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1 p-6 bg-background rounded-2xl border border-border premium-shadow">
                    <span className="inline-block md:hidden px-3 py-1 bg-accent text-primary-foreground rounded-full text-sm font-bold mb-3">
                      {milestone.year}
                    </span>
                    <div className="hidden md:block text-accent font-bold text-lg mb-1">{milestone.year}</div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Olympic Experience */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Expérience Olympique
            </h2>
            <p className="text-xl text-muted-foreground">
              Au service de l'excellence équestre mondiale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {olympicGames.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-background rounded-2xl border border-border text-center premium-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Medal className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{game.city}</h3>
                <p className="text-accent font-medium mb-2">{game.role}</p>
                <p className="text-sm text-muted-foreground">{game.medals}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Prix et Distinctions
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-background rounded-2xl border border-accent/30 text-center"
              >
                <Trophy className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-display font-bold text-foreground mb-1">{award.title}</h4>
                <p className="text-sm text-accent font-medium">{award.org}</p>
                <p className="text-sm text-muted-foreground">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
