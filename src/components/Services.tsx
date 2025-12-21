import { motion } from 'framer-motion'
import { Stethoscope, Scan, Heart, Activity, Trophy, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import equineSurgery from '@/assets/equine-surgery-room.jpg'
import regenerativeTreatment from '@/assets/regenerative-treatment.jpg'
import equineDiagnostics from '@/assets/equine-diagnostics.jpg'

export function Services() {
  const { t } = useLanguage()

  const services = [
    { 
      icon: Stethoscope, 
      title: t('service1Title'), 
      desc: t('service1Desc'),
      details: [
        'Arthroscopie mini-invasive',
        'Chirurgie des tendons et ligaments',
        'Ostéosynthèse des fractures',
        'Chirurgie du dos et de la colonne',
      ]
    },
    { 
      icon: Scan, 
      title: t('service2Title'), 
      desc: t('service2Desc'),
      details: [
        'Radiographie numérique haute résolution',
        'Échographie musculo-squelettique',
        'IRM équine',
        'Scintigraphie osseuse',
      ]
    },
    { 
      icon: Heart, 
      title: t('service3Title'), 
      desc: t('service3Desc'),
      details: [
        'Thérapie par cellules souches',
        'Injections de PRP',
        'Thérapie IRAP',
        'Ondes de choc extracorporelles',
      ]
    },
    { 
      icon: Activity, 
      title: t('service4Title'), 
      desc: t('service4Desc'),
      details: [
        'Analyse biomécanique complète',
        'Tests de flexion',
        'Anesthésies diagnostiques',
        'Évaluation sur tapis roulant',
      ]
    },
    { 
      icon: Trophy, 
      title: t('service5Title'), 
      desc: t('service5Desc'),
      details: [
        'Suivi de chevaux de compétition',
        'Présence sur les événements internationaux',
        'Programmes de performance optimisée',
        'Protocoles de récupération post-compétition',
      ]
    },
    { 
      icon: Shield, 
      title: t('service6Title'), 
      desc: t('service6Desc'),
      details: [
        'Bilans de santé réguliers',
        'Programmes de prévention personnalisés',
        'Conseils nutritionnels',
        'Optimisation du ferrage',
      ]
    },
  ]

  const processSteps = [
    { step: '01', title: 'Consultation Initiale', desc: 'Examen clinique complet et discussion de vos préoccupations' },
    { step: '02', title: 'Diagnostic', desc: 'Utilisation d\'équipements de pointe pour un diagnostic précis' },
    { step: '03', title: 'Plan de Traitement', desc: 'Élaboration d\'un protocole personnalisé adapté à votre cheval' },
    { step: '04', title: 'Suivi', desc: 'Accompagnement tout au long de la récupération et rééducation' },
  ]

  return (
    <section id="services" className="relative py-24 bg-card">
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
                src={equineSurgery} 
                alt="Modern equine surgery room"
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
              {t('servicesTag')}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('servicesTitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t('servicesSubtitle')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notre clinique est équipée des technologies les plus avancées pour offrir 
              des soins de la plus haute qualité. Chaque traitement est personnalisé 
              selon les besoins spécifiques de votre cheval.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              className="p-8 bg-background rounded-2xl border border-border hover:border-accent/50 transition-all premium-shadow group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-video"
          >
            <img src={equineDiagnostics} alt="Equine diagnostics" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-white font-display font-bold text-xl mb-2">Diagnostic de Précision</h4>
                <p className="text-white/80">Technologies d'imagerie de dernière génération</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-video"
          >
            <img src={regenerativeTreatment} alt="Regenerative treatment" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-white font-display font-bold text-xl mb-2">Médecine Régénérative</h4>
                <p className="text-white/80">Traitements biologiques innovants</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Notre Processus de Soins
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une approche structurée pour des résultats optimaux
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold text-accent/20 mb-4">{step.step}</div>
                <h4 className="font-display font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-3 w-6 h-6 text-accent/40" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/contact" 
            className="inline-block gold-accent font-semibold px-8 py-4 rounded-lg text-lg hover:scale-105 transition-transform"
          >
            Prendre Rendez-vous
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
