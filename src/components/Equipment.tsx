import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Scan, Syringe, Activity, Stethoscope } from 'lucide-react'
import clinicCtScanner from '@/assets/clinic-ct-scanner.jpg'
import clinicSurgery from '@/assets/clinic-surgery.jpg'
import clinicXray from '@/assets/clinic-xray.jpg'
import clinicMetavital from '@/assets/clinic-metavital.jpg'

export function Equipment() {
  const { t, language } = useLanguage()

  const equipmentItems = [
    {
      image: clinicCtScanner,
      icon: Scan,
      title: language === 'de' ? 'CT-Scanner' : language === 'fr' ? 'Scanner CT' : 'CT Scanner',
      description: language === 'de' 
        ? 'Hochmoderner CT-Scanner für präzise 3D-Bildgebung des gesamten Pferdes.'
        : language === 'fr' 
        ? 'Scanner CT de pointe pour une imagerie 3D précise de l\'ensemble du cheval.'
        : 'State-of-the-art CT scanner for precise 3D imaging of the entire horse.',
    },
    {
      image: clinicSurgery,
      icon: Activity,
      title: language === 'de' ? 'Chirurgiesaal' : language === 'fr' ? 'Bloc Opératoire' : 'Surgery Room',
      description: language === 'de' 
        ? 'Vollausgestatteter OP-Saal mit modernster Technologie und Hebevorrichtungen.'
        : language === 'fr' 
        ? 'Bloc opératoire entièrement équipé avec technologie de pointe et systèmes de levage.'
        : 'Fully equipped operating room with cutting-edge technology and lifting systems.',
    },
    {
      image: clinicXray,
      icon: Stethoscope,
      title: language === 'de' ? 'Digitale Radiologie' : language === 'fr' ? 'Radiologie Numérique' : 'Digital Radiology',
      description: language === 'de' 
        ? 'Hochauflösende digitale Röntgentechnologie für sofortige Diagnosen.'
        : language === 'fr' 
        ? 'Technologie de radiographie numérique haute résolution pour des diagnostics instantanés.'
        : 'High-resolution digital X-ray technology for instant diagnostics.',
    },
    {
      image: clinicMetavital,
      icon: Syringe,
      title: language === 'de' ? 'Metavital System' : language === 'fr' ? 'Système Metavital' : 'Metavital System',
      description: language === 'de' 
        ? 'Fortschrittliche Analysesoftware zur ganzheitlichen Beurteilung der Pferdegesundheit.'
        : language === 'fr' 
        ? 'Logiciel d\'analyse avancé pour l\'évaluation holistique de la santé équine.'
        : 'Advanced analysis software for holistic assessment of equine health.',
    },
  ]

  const sectionTitle = language === 'de' 
    ? 'Modernste Ausstattung' 
    : language === 'fr' 
    ? 'Équipements de Pointe' 
    : 'State-of-the-Art Equipment'

  const sectionTag = language === 'de' 
    ? 'Technologie' 
    : language === 'fr' 
    ? 'Technologie' 
    : 'Technology'

  const sectionSubtitle = language === 'de' 
    ? 'Investitionen in Spitzentechnologie für die bestmögliche Behandlung Ihres Pferdes'
    : language === 'fr' 
    ? 'Investissements dans les technologies de pointe pour le meilleur traitement de votre cheval'
    : 'Investments in cutting-edge technology for the best possible treatment of your horse'

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20"
          >
            {sectionTag}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            {sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {sectionSubtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {equipmentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl border border-accent/20 backdrop-blur-sm">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
