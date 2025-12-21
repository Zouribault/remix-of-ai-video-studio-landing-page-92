import { motion } from 'framer-motion'
import { Bone, Activity, Shield, Award, BookOpen, Users, Microscope, HeartPulse } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import expertiseXray from '@/assets/expertise-xray.jpg'

export function Expertise() {
  const { t } = useLanguage()

  const expertises = [
    { 
      icon: Bone, 
      title: t('expertise1Title'), 
      desc: t('expertise1Desc'),
      details: 'Plus de 2000 arthroscopies réalisées avec un taux de succès de 95%. Spécialisation dans les cas complexes de chevaux de sport de haut niveau.'
    },
    { 
      icon: Activity, 
      title: t('expertise2Title'), 
      desc: t('expertise2Desc'),
      details: 'Pionnier dans l\'utilisation des cellules souches et du PRP pour la régénération des tendons. Recherche active en collaboration avec des universités.'
    },
    { 
      icon: Shield, 
      title: t('expertise3Title'), 
      desc: t('expertise3Desc'),
      details: 'Expertise reconnue dans le traitement des fractures complexes. Techniques d\'ostéosynthèse de pointe permettant une récupération optimale.'
    },
    { 
      icon: Award, 
      title: t('expertise4Title'), 
      desc: t('expertise4Desc'),
      details: 'Suivi de champions olympiques et mondiaux. Compréhension approfondie des exigences spécifiques des disciplines équestres de haut niveau.'
    },
  ]

  const researchAreas = [
    { icon: Microscope, title: 'Recherche Clinique', desc: 'Participation active à des études cliniques sur les nouvelles thérapies équines' },
    { icon: BookOpen, title: 'Publications', desc: 'Plus de 50 articles publiés dans des revues scientifiques internationales' },
    { icon: Users, title: 'Enseignement', desc: 'Formateur pour la prochaine génération de vétérinaires spécialisés' },
    { icon: HeartPulse, title: 'Innovation', desc: 'Développement de nouveaux protocoles de traitement' },
  ]

  const caseStudies = [
    {
      title: 'Récupération après fracture du sésamoïde',
      horse: 'Stallion de saut d\'obstacles, 10 ans',
      challenge: 'Fracture complexe du sésamoïde proximal avec pronostic initial réservé',
      solution: 'Chirurgie arthroscopique suivie de thérapie par cellules souches',
      result: 'Retour à la compétition internationale après 8 mois de rééducation',
    },
    {
      title: 'Tendinite chronique résolue',
      horse: 'Jument de dressage, 8 ans',
      challenge: 'Tendinite récurrente du fléchisseur superficiel malgré plusieurs traitements',
      solution: 'Protocole combiné PRP + ondes de choc + programme de rééducation personnalisé',
      result: 'Guérison complète, qualification aux championnats nationaux',
    },
  ]

  return (
    <section id="expertise" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
              {t('expertiseTag')}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('expertiseTitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t('expertiseSubtitle')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trois décennies d'expérience ont forgé une expertise unique dans le traitement 
              des pathologies orthopédiques équines les plus complexes. Notre approche combine 
              savoir-faire traditionnel et innovations médicales de pointe.
            </p>
          </motion.div>

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
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {expertises.map((expertise, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              className="p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all premium-shadow group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <expertise.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{expertise.title}</h3>
                  <p className="text-muted-foreground mb-3">{expertise.desc}</p>
                  <p className="text-sm text-muted-foreground/80 italic">{expertise.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research & Teaching */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Recherche et Enseignement
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contribuer à l'avancement de la médecine vétérinaire équine
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-2xl border border-border text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-2">{area.title}</h4>
                <p className="text-sm text-muted-foreground">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Études de Cas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des exemples concrets de notre expertise en action
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-card rounded-2xl border border-border premium-shadow"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{study.title}</h3>
                <p className="text-accent text-sm font-medium mb-4">{study.horse}</p>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Défi</span>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Solution</span>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-accent">Résultat</span>
                    <p className="text-foreground font-medium">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
