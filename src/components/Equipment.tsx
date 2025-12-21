import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Scan, Syringe, Activity, Stethoscope } from 'lucide-react'
import clinicCtScanner from '@/assets/clinic-ct-scanner.jpg'
import clinicSurgery from '@/assets/clinic-surgery.jpg'
import clinicXray from '@/assets/clinic-xray.jpg'
import clinicMetavital from '@/assets/clinic-metavital.jpg'

const translations = {
  de: {
    tag: 'Technologie',
    title: 'Modernste Ausstattung',
    subtitle: 'Investitionen in Spitzentechnologie für die bestmögliche Behandlung Ihres Pferdes',
    ctScanner: 'CT-Scanner',
    ctScannerDesc: 'Hochmoderner CT-Scanner für präzise 3D-Bildgebung des gesamten Pferdes.',
    surgeryRoom: 'Chirurgiesaal',
    surgeryRoomDesc: 'Vollausgestatteter OP-Saal mit modernster Technologie und Hebevorrichtungen.',
    radiology: 'Digitale Radiologie',
    radiologyDesc: 'Hochauflösende digitale Röntgentechnologie für sofortige Diagnosen.',
    metavital: 'Metavital System',
    metavitalDesc: 'Fortschrittliche Analysesoftware zur ganzheitlichen Beurteilung der Pferdegesundheit.',
  },
  en: {
    tag: 'Technology',
    title: 'State-of-the-Art Equipment',
    subtitle: 'Investments in cutting-edge technology for the best possible treatment of your horse',
    ctScanner: 'CT Scanner',
    ctScannerDesc: 'State-of-the-art CT scanner for precise 3D imaging of the entire horse.',
    surgeryRoom: 'Surgery Room',
    surgeryRoomDesc: 'Fully equipped operating room with cutting-edge technology and lifting systems.',
    radiology: 'Digital Radiology',
    radiologyDesc: 'High-resolution digital X-ray technology for instant diagnostics.',
    metavital: 'Metavital System',
    metavitalDesc: 'Advanced analysis software for holistic assessment of equine health.',
  },
  es: {
    tag: 'Tecnología',
    title: 'Equipamiento de Última Generación',
    subtitle: 'Inversiones en tecnología de vanguardia para el mejor tratamiento posible de su caballo',
    ctScanner: 'Escáner CT',
    ctScannerDesc: 'Escáner CT de última generación para imágenes 3D precisas de todo el caballo.',
    surgeryRoom: 'Sala de Cirugía',
    surgeryRoomDesc: 'Quirófano completamente equipado con tecnología de punta y sistemas de elevación.',
    radiology: 'Radiología Digital',
    radiologyDesc: 'Tecnología de rayos X digital de alta resolución para diagnósticos instantáneos.',
    metavital: 'Sistema Metavital',
    metavitalDesc: 'Software de análisis avanzado para evaluación integral de la salud equina.',
  },
  pt: {
    tag: 'Tecnologia',
    title: 'Equipamento de Última Geração',
    subtitle: 'Investimentos em tecnologia de ponta para o melhor tratamento possível do seu cavalo',
    ctScanner: 'Scanner CT',
    ctScannerDesc: 'Scanner CT de última geração para imagens 3D precisas de todo o cavalo.',
    surgeryRoom: 'Sala de Cirurgia',
    surgeryRoomDesc: 'Centro cirúrgico totalmente equipado com tecnologia de ponta e sistemas de elevação.',
    radiology: 'Radiologia Digital',
    radiologyDesc: 'Tecnologia de raio-X digital de alta resolução para diagnósticos instantâneos.',
    metavital: 'Sistema Metavital',
    metavitalDesc: 'Software de análise avançado para avaliação holística da saúde equina.',
  },
  fr: {
    tag: 'Technologie',
    title: 'Équipements de Pointe',
    subtitle: 'Investissements dans les technologies de pointe pour le meilleur traitement de votre cheval',
    ctScanner: 'Scanner CT',
    ctScannerDesc: 'Scanner CT de pointe pour une imagerie 3D précise de l\'ensemble du cheval.',
    surgeryRoom: 'Bloc Opératoire',
    surgeryRoomDesc: 'Bloc opératoire entièrement équipé avec technologie de pointe et systèmes de levage.',
    radiology: 'Radiologie Numérique',
    radiologyDesc: 'Technologie de radiographie numérique haute résolution pour des diagnostics instantanés.',
    metavital: 'Système Metavital',
    metavitalDesc: 'Logiciel d\'analyse avancé pour l\'évaluation holistique de la santé équine.',
  },
  it: {
    tag: 'Tecnologia',
    title: 'Attrezzature all\'Avanguardia',
    subtitle: 'Investimenti in tecnologia all\'avanguardia per il miglior trattamento possibile del tuo cavallo',
    ctScanner: 'Scanner CT',
    ctScannerDesc: 'Scanner CT all\'avanguardia per imaging 3D preciso dell\'intero cavallo.',
    surgeryRoom: 'Sala Operatoria',
    surgeryRoomDesc: 'Sala operatoria completamente attrezzata con tecnologia all\'avanguardia e sistemi di sollevamento.',
    radiology: 'Radiologia Digitale',
    radiologyDesc: 'Tecnologia di radiografia digitale ad alta risoluzione per diagnosi istantanee.',
    metavital: 'Sistema Metavital',
    metavitalDesc: 'Software di analisi avanzato per la valutazione olistica della salute equina.',
  },
  no: {
    tag: 'Teknologi',
    title: 'Toppmoderne Utstyr',
    subtitle: 'Investeringer i banebrytende teknologi for best mulig behandling av hesten din',
    ctScanner: 'CT-skanner',
    ctScannerDesc: 'Toppmoderne CT-skanner for presis 3D-avbildning av hele hesten.',
    surgeryRoom: 'Operasjonssal',
    surgeryRoomDesc: 'Fullt utstyrt operasjonssal med banebrytende teknologi og løftesystemer.',
    radiology: 'Digital Radiologi',
    radiologyDesc: 'Høyoppløselig digital røntgenteknologi for umiddelbare diagnoser.',
    metavital: 'Metavital System',
    metavitalDesc: 'Avansert analyseprogramvare for helhetlig vurdering av hestehelse.',
  },
  fi: {
    tag: 'Teknologia',
    title: 'Huippumoderni Laitteisto',
    subtitle: 'Investoinnit huipputeknologiaan hevosesi parhaan mahdollisen hoidon takaamiseksi',
    ctScanner: 'CT-skanneri',
    ctScannerDesc: 'Huippumoderni CT-skanneri tarkkaan 3D-kuvantamiseen koko hevosesta.',
    surgeryRoom: 'Leikkaussali',
    surgeryRoomDesc: 'Täysin varusteltu leikkaussali huipputeknologialla ja nostojärjestelmillä.',
    radiology: 'Digitaalinen Radiologia',
    radiologyDesc: 'Korkearesoluutioinen digitaalinen röntgenteknologia välittömiin diagnooseihin.',
    metavital: 'Metavital-järjestelmä',
    metavitalDesc: 'Edistynyt analyysiohjelmisto hevosen terveyden kokonaisvaltaiseen arviointiin.',
  },
  sv: {
    tag: 'Teknologi',
    title: 'Toppmodern Utrustning',
    subtitle: 'Investeringar i banbrytande teknologi för bästa möjliga behandling av din häst',
    ctScanner: 'CT-skanner',
    ctScannerDesc: 'Toppmodern CT-skanner för exakt 3D-avbildning av hela hästen.',
    surgeryRoom: 'Operationssal',
    surgeryRoomDesc: 'Fullt utrustad operationssal med banbrytande teknologi och lyftsystem.',
    radiology: 'Digital Radiologi',
    radiologyDesc: 'Högupplöst digital röntgenteknik för omedelbara diagnoser.',
    metavital: 'Metavital System',
    metavitalDesc: 'Avancerad analysprogramvara för holistisk bedömning av hästhälsa.',
  },
  nl: {
    tag: 'Technologie',
    title: 'Geavanceerde Apparatuur',
    subtitle: 'Investeringen in geavanceerde technologie voor de best mogelijke behandeling van uw paard',
    ctScanner: 'CT-scanner',
    ctScannerDesc: 'Geavanceerde CT-scanner voor nauwkeurige 3D-beeldvorming van het hele paard.',
    surgeryRoom: 'Operatiekamer',
    surgeryRoomDesc: 'Volledig uitgeruste operatiekamer met geavanceerde technologie en hefmechanismen.',
    radiology: 'Digitale Radiologie',
    radiologyDesc: 'Hoge resolutie digitale röntgentechnologie voor directe diagnoses.',
    metavital: 'Metavital Systeem',
    metavitalDesc: 'Geavanceerde analysesoftware voor holistische beoordeling van paardengezondheid.',
  },
  ru: {
    tag: 'Технологии',
    title: 'Современное Оборудование',
    subtitle: 'Инвестиции в передовые технологии для наилучшего лечения вашей лошади',
    ctScanner: 'КТ-сканер',
    ctScannerDesc: 'Современный КТ-сканер для точной 3D-визуализации всей лошади.',
    surgeryRoom: 'Операционная',
    surgeryRoomDesc: 'Полностью оборудованная операционная с передовыми технологиями и подъемными системами.',
    radiology: 'Цифровая Рентгенология',
    radiologyDesc: 'Цифровая рентгеновская технология высокого разрешения для мгновенной диагностики.',
    metavital: 'Система Metavital',
    metavitalDesc: 'Передовое аналитическое программное обеспечение для комплексной оценки здоровья лошади.',
  },
  zh: {
    tag: '技术',
    title: '先进设备',
    subtitle: '投资尖端技术，为您的马匹提供最佳治疗',
    ctScanner: 'CT扫描仪',
    ctScannerDesc: '先进的CT扫描仪，可对整匹马进行精确的3D成像。',
    surgeryRoom: '手术室',
    surgeryRoomDesc: '配备尖端技术和升降系统的全套手术室。',
    radiology: '数字放射学',
    radiologyDesc: '高分辨率数字X射线技术，可即时诊断。',
    metavital: 'Metavital系统',
    metavitalDesc: '用于全面评估马匹健康的先进分析软件。',
  },
  ja: {
    tag: 'テクノロジー',
    title: '最先端の設備',
    subtitle: '馬の最良の治療のための最先端技術への投資',
    ctScanner: 'CTスキャナー',
    ctScannerDesc: '馬全体の正確な3Dイメージングのための最先端CTスキャナー。',
    surgeryRoom: '手術室',
    surgeryRoomDesc: '最先端技術とリフトシステムを備えた完全装備の手術室。',
    radiology: 'デジタルラジオロジー',
    radiologyDesc: '即座の診断のための高解像度デジタルX線技術。',
    metavital: 'Metavitalシステム',
    metavitalDesc: '馬の健康の包括的評価のための高度な分析ソフトウェア。',
  },
  ar: {
    tag: 'التكنولوجيا',
    title: 'معدات متطورة',
    subtitle: 'استثمارات في التكنولوجيا المتقدمة لأفضل علاج ممكن لحصانك',
    ctScanner: 'ماسح CT',
    ctScannerDesc: 'ماسح CT متطور للتصوير ثلاثي الأبعاد الدقيق للحصان بأكمله.',
    surgeryRoom: 'غرفة العمليات',
    surgeryRoomDesc: 'غرفة عمليات مجهزة بالكامل بأحدث التقنيات وأنظمة الرفع.',
    radiology: 'الأشعة الرقمية',
    radiologyDesc: 'تقنية الأشعة السينية الرقمية عالية الدقة للتشخيص الفوري.',
    metavital: 'نظام Metavital',
    metavitalDesc: 'برنامج تحليل متقدم للتقييم الشامل لصحة الخيول.',
  },
}

export function Equipment() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const equipmentItems = [
    {
      image: clinicCtScanner,
      icon: Scan,
      title: t.ctScanner,
      description: t.ctScannerDesc,
    },
    {
      image: clinicSurgery,
      icon: Activity,
      title: t.surgeryRoom,
      description: t.surgeryRoomDesc,
    },
    {
      image: clinicXray,
      icon: Stethoscope,
      title: t.radiology,
      description: t.radiologyDesc,
    },
    {
      image: clinicMetavital,
      icon: Syringe,
      title: t.metavital,
      description: t.metavitalDesc,
    },
  ]

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
            {t.tag}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t.subtitle}
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
