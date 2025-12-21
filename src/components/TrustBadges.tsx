import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Shield, Award, Globe, Clock } from 'lucide-react'
import clinicInjection from '@/assets/clinic-injection.jpg'
import clinicExamination from '@/assets/clinic-examination.jpg'

const translations = {
  de: {
    title: 'Präzision & Fürsorge',
    subtitle: 'Jede Behandlung wird mit höchster Sorgfalt und modernsten Techniken durchgeführt',
    yearsExp: 'Jahre Erfahrung',
    olympics: 'Olympische Spiele',
    countries: 'Länder',
    emergency: 'Notfallbereitschaft',
  },
  en: {
    title: 'Precision & Care',
    subtitle: 'Every treatment is performed with the utmost care and the most modern techniques',
    yearsExp: 'Years Experience',
    olympics: 'Olympic Games',
    countries: 'Countries',
    emergency: 'Emergency Service',
  },
  es: {
    title: 'Precisión y Cuidado',
    subtitle: 'Cada tratamiento se realiza con el máximo cuidado y las técnicas más modernas',
    yearsExp: 'Años de Experiencia',
    olympics: 'Juegos Olímpicos',
    countries: 'Países',
    emergency: 'Servicio de Emergencia',
  },
  pt: {
    title: 'Precisão e Cuidado',
    subtitle: 'Cada tratamento é realizado com o máximo cuidado e as técnicas mais modernas',
    yearsExp: 'Anos de Experiência',
    olympics: 'Jogos Olímpicos',
    countries: 'Países',
    emergency: 'Serviço de Emergência',
  },
  fr: {
    title: 'Précision & Soins',
    subtitle: 'Chaque traitement est réalisé avec le plus grand soin et les techniques les plus modernes',
    yearsExp: 'Ans d\'expérience',
    olympics: 'Jeux Olympiques',
    countries: 'Pays',
    emergency: 'Urgences',
  },
  it: {
    title: 'Precisione & Cura',
    subtitle: 'Ogni trattamento viene eseguito con la massima cura e le tecniche più moderne',
    yearsExp: 'Anni di Esperienza',
    olympics: 'Giochi Olimpici',
    countries: 'Paesi',
    emergency: 'Servizio di Emergenza',
  },
  no: {
    title: 'Presisjon & Omsorg',
    subtitle: 'Hver behandling utføres med største omhu og de mest moderne teknikkene',
    yearsExp: 'Års Erfaring',
    olympics: 'Olympiske Leker',
    countries: 'Land',
    emergency: 'Beredskap',
  },
  fi: {
    title: 'Tarkkuus & Huolenpito',
    subtitle: 'Jokainen hoito suoritetaan äärimmäisellä huolellisuudella ja nykyaikaisimmilla tekniikoilla',
    yearsExp: 'Vuotta Kokemusta',
    olympics: 'Olympialaiset',
    countries: 'Maata',
    emergency: 'Päivystys',
  },
  sv: {
    title: 'Precision & Omsorg',
    subtitle: 'Varje behandling utförs med största omsorg och de mest moderna teknikerna',
    yearsExp: 'Års Erfarenhet',
    olympics: 'Olympiska Spel',
    countries: 'Länder',
    emergency: 'Jourtjänst',
  },
  nl: {
    title: 'Precisie & Zorg',
    subtitle: 'Elke behandeling wordt uitgevoerd met de grootste zorg en de modernste technieken',
    yearsExp: 'Jaar Ervaring',
    olympics: 'Olympische Spelen',
    countries: 'Landen',
    emergency: 'Spoeddienst',
  },
  ru: {
    title: 'Точность и Забота',
    subtitle: 'Каждое лечение проводится с максимальной тщательностью и самыми современными методами',
    yearsExp: 'Лет Опыта',
    olympics: 'Олимпийских Игр',
    countries: 'Стран',
    emergency: 'Экстренная Помощь',
  },
  zh: {
    title: '精准与关怀',
    subtitle: '每项治疗都以最高标准和最现代的技术进行',
    yearsExp: '年经验',
    olympics: '届奥运会',
    countries: '个国家',
    emergency: '急诊服务',
  },
  ja: {
    title: '精密さとケア',
    subtitle: 'すべての治療は最高の注意と最新の技術で行われます',
    yearsExp: '年の経験',
    olympics: 'オリンピック',
    countries: 'カ国',
    emergency: '緊急サービス',
  },
  ar: {
    title: 'الدقة والرعاية',
    subtitle: 'يتم إجراء كل علاج بأقصى قدر من العناية وأحدث التقنيات',
    yearsExp: 'سنة خبرة',
    olympics: 'ألعاب أولمبية',
    countries: 'دولة',
    emergency: 'خدمة الطوارئ',
  },
}

export function TrustBadges() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const badges = [
    {
      icon: Shield,
      value: '30+',
      label: t.yearsExp,
    },
    {
      icon: Award,
      value: '5+',
      label: t.olympics,
    },
    {
      icon: Globe,
      value: '40+',
      label: t.countries,
    },
    {
      icon: Clock,
      value: '24/7',
      label: t.emergency,
    },
  ]

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
                {t.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.subtitle}
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
