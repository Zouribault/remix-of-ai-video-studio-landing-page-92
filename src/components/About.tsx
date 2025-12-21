import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { GraduationCap, Award, Globe, Heart } from 'lucide-react'
import legExamination from '@/assets/leg-examination.jpg'
import horsePortrait from '@/assets/horse-portrait.jpg'

export function About() {
  const { t } = useLanguage()

  const stats = [
    { value: t('aboutYearsExp'), label: t('aboutYearsLabel') },
    { value: t('aboutPatientsNum'), label: t('aboutPatientsLabel') },
    { value: t('aboutCountriesNum'), label: t('aboutCountriesLabel') },
    { value: t('aboutSurgeriesNum'), label: t('aboutSurgeriesLabel') },
  ]

  const qualifications = [
    {
      icon: GraduationCap,
      title: 'Formation',
      items: [
        'Doctorat en Médecine Vétérinaire - Université de Hanovre (1994)',
        'Spécialisation en Orthopédie Équine - Université de Munich',
        'Certification FEI en Médecine Sportive Équine',
      ]
    },
    {
      icon: Award,
      title: 'Distinctions',
      items: [
        'Prix d\'Excellence en Orthopédie Équine (2016)',
        'Membre de l\'Académie Européenne de Chirurgie Vétérinaire',
        'Consultant pour la Fédération Équestre Internationale',
      ]
    },
    {
      icon: Globe,
      title: 'Expérience Internationale',
      items: [
        'Vétérinaire officiel - Jeux Olympiques (2008, 2012, 2016)',
        'Chef vétérinaire - Équipe nationale allemande de saut',
        'Consultant pour des écuries dans plus de 40 pays',
      ]
    },
    {
      icon: Heart,
      title: 'Philosophie',
      items: [
        'Approche holistique centrée sur le bien-être animal',
        'Utilisation des dernières avancées en médecine régénérative',
        'Collaboration étroite avec les propriétaires et entraîneurs',
      ]
    },
  ]

  return (
    <section id="about" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
              {t('aboutTag')}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t('aboutDescription')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('aboutBio')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionné par les chevaux depuis son enfance, le Dr. Nolting a consacré sa vie à améliorer 
              la santé et les performances des équidés. Son approche combine expertise technique de pointe 
              et profonde compréhension des besoins de chaque animal.
            </p>
          </motion.div>

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
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              className="text-center p-8 bg-card rounded-2xl border border-border premium-shadow">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Qualifications Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Parcours et Qualifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un parcours exceptionnel au service de l'excellence équine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-card rounded-2xl border border-border premium-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <qual.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{qual.title}</h3>
                </div>
                <ul className="space-y-3">
                  {qual.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img 
            src={horsePortrait} 
            alt="Beautiful sport horse"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
            <div className="p-8 md:p-12 max-w-3xl">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Notre Mission
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                "Offrir à chaque cheval les soins les plus avancés, avec compassion et expertise, 
                pour lui permettre d'atteindre son plein potentiel tout en préservant sa santé à long terme."
              </p>
              <p className="text-accent font-medium mt-4">— Dr. Björn Nolting</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
