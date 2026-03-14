import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { GraduationCap, Award, Globe, Heart } from 'lucide-react'
import { pick } from '@/lib/i18n'
import type { Language } from '@/lib/translations'
import legExamination from '@/assets/leg-examination.jpg'
import horsePortrait from '@/assets/horse-portrait.jpg'

const copy: Record<Language, {
  passion: string
  qualHeading: string
  qualSub: string
  edu: string; edu1: string; edu2: string; edu3: string
  awards: string; aw1: string; aw2: string; aw3: string
  intl: string; intl1: string; intl2: string; intl3: string
  phil: string; ph1: string; ph2: string; ph3: string
  mission: string; quote: string
}> = {
  de: {
    passion: 'Seit seiner Kindheit von Pferden fasziniert, hat Dr. Nolting sein Leben der Gesundheit und Leistungsfähigkeit von Pferden gewidmet. Sein Ansatz verbindet modernste Technik mit tiefem Verständnis für jedes einzelne Tier.',
    qualHeading: 'Werdegang & Qualifikationen', qualSub: 'Ein außergewöhnlicher Werdegang im Dienst der Exzellenz',
    edu: 'Ausbildung', edu1: 'Promotion in Veterinärmedizin – Universität Hannover (1994)', edu2: 'Spezialisierung in Pferdeorthopädie – Universität München', edu3: 'FEI-Zertifizierung in Pferdesportmedizin',
    awards: 'Auszeichnungen', aw1: 'Exzellenzpreis für Pferdeorthopädie (2016)', aw2: 'Mitglied der Europäischen Akademie für Veterinärchirurgie', aw3: 'Berater der Fédération Equestre Internationale (FEI)',
    intl: 'Internationale Erfahrung', intl1: 'Offizieller Tierarzt – Olympische Spiele (2008, 2012, 2016)', intl2: 'Cheftierarzt – Deutsches Spring-Nationalteam', intl3: 'Beratung von Ställen in über 40 Ländern',
    phil: 'Philosophie', ph1: 'Ganzheitlicher Ansatz mit Fokus auf Tierwohl', ph2: 'Einsatz modernster regenerativer Medizin', ph3: 'Enge Zusammenarbeit mit Besitzern und Trainern',
    mission: 'Unsere Mission', quote: '„Jedem Pferd die fortschrittlichste Versorgung zu bieten – mit Empathie und Expertise – damit es sein volles Potenzial erreicht und langfristig gesund bleibt."',
  },
  en: {
    passion: "Passionate about horses since childhood, Dr. Nolting has devoted his life to improving equine health and performance. His approach combines cutting-edge expertise with a deep understanding of each horse's needs.",
    qualHeading: 'Background & Qualifications', qualSub: 'An exceptional career dedicated to equine excellence',
    edu: 'Education', edu1: 'Doctorate in Veterinary Medicine – University of Hanover (1994)', edu2: 'Specialization in Equine Orthopedics – University of Munich', edu3: 'FEI Certification in Equine Sports Medicine',
    awards: 'Honors', aw1: 'Excellence Award in Equine Orthopedics (2016)', aw2: 'Member of the European Academy of Veterinary Surgery', aw3: 'Consultant for the International Equestrian Federation (FEI)',
    intl: 'International Experience', intl1: 'Official Veterinarian – Olympic Games (2008, 2012, 2016)', intl2: 'Head Veterinarian – German National Show Jumping Team', intl3: 'Consultant for stables in over 40 countries',
    phil: 'Philosophy', ph1: 'Holistic approach focused on animal welfare', ph2: 'Use of the latest advances in regenerative medicine', ph3: 'Close collaboration with owners and trainers',
    mission: 'Our Mission', quote: '"To provide every horse with the most advanced care, with compassion and expertise, so they can reach their full potential while preserving long-term health."',
  },
  fr: {
    passion: "Passionné par les chevaux depuis son enfance, le Dr. Nolting a consacré sa vie à améliorer la santé et les performances des équidés. Son approche combine expertise technique de pointe et profonde compréhension des besoins de chaque animal.",
    qualHeading: 'Parcours et Qualifications', qualSub: "Un parcours exceptionnel au service de l'excellence équine",
    edu: 'Formation', edu1: 'Doctorat en Médecine Vétérinaire – Université de Hanovre (1994)', edu2: 'Spécialisation en Orthopédie Équine – Université de Munich', edu3: 'Certification FEI en Médecine Sportive Équine',
    awards: 'Distinctions', aw1: "Prix d'Excellence en Orthopédie Équine (2016)", aw2: "Membre de l'Académie Européenne de Chirurgie Vétérinaire", aw3: 'Consultant pour la Fédération Équestre Internationale',
    intl: 'Expérience Internationale', intl1: 'Vétérinaire officiel – Jeux Olympiques (2008, 2012, 2016)', intl2: 'Chef vétérinaire – Équipe nationale allemande de saut', intl3: 'Consultant pour des écuries dans plus de 40 pays',
    phil: 'Philosophie', ph1: 'Approche holistique centrée sur le bien-être animal', ph2: 'Utilisation des dernières avancées en médecine régénérative', ph3: 'Collaboration étroite avec les propriétaires et entraîneurs',
    mission: 'Notre Mission', quote: "\"Offrir à chaque cheval les soins les plus avancés, avec compassion et expertise, pour lui permettre d'atteindre son plein potentiel tout en préservant sa santé à long terme.\"",
  },
  es: {
    passion: 'Apasionado por los caballos desde la infancia, el Dr. Nolting ha dedicado su vida a mejorar la salud y el rendimiento equinos.',
    qualHeading: 'Trayectoria y cualificaciones', qualSub: 'Una carrera excepcional al servicio de la excelencia equina',
    edu: 'Formación', edu1: 'Doctorado en Medicina Veterinaria – Universidad de Hannover (1994)', edu2: 'Especialización en Ortopedia Equina – Universidad de Múnich', edu3: 'Certificación FEI en Medicina Deportiva Equina',
    awards: 'Distinciones', aw1: 'Premio a la Excelencia en Ortopedia Equina (2016)', aw2: 'Miembro de la Academia Europea de Cirugía Veterinaria', aw3: 'Consultor de la Federación Ecuestre Internacional (FEI)',
    intl: 'Experiencia internacional', intl1: 'Veterinario oficial – Juegos Olímpicos (2008, 2012, 2016)', intl2: 'Veterinario jefe – Equipo nacional alemán de salto', intl3: 'Consultor para establos en más de 40 países',
    phil: 'Filosofía', ph1: 'Enfoque holístico centrado en el bienestar animal', ph2: 'Uso de los últimos avances en medicina regenerativa', ph3: 'Colaboración estrecha con propietarios y entrenadores',
    mission: 'Nuestra misión', quote: '«Ofrecer a cada caballo la atención más avanzada, con compasión y experiencia, para que alcance su máximo potencial preservando su salud a largo plazo.»',
  },
  pt: {
    passion: 'Apaixonado por cavalos desde a infância, o Dr. Nolting dedicou a vida a melhorar a saúde e o desempenho equino.',
    qualHeading: 'Percurso e qualificações', qualSub: 'Uma carreira excecional ao serviço da excelência equina',
    edu: 'Formação', edu1: 'Doutoramento em Medicina Veterinária – Universidade de Hannover (1994)', edu2: 'Especialização em Ortopedia Equina – Universidade de Munique', edu3: 'Certificação FEI em Medicina Desportiva Equina',
    awards: 'Distinções', aw1: 'Prémio de Excelência em Ortopedia Equina (2016)', aw2: 'Membro da Academia Europeia de Cirurgia Veterinária', aw3: 'Consultor da Federação Equestre Internacional (FEI)',
    intl: 'Experiência internacional', intl1: 'Veterinário oficial – Jogos Olímpicos (2008, 2012, 2016)', intl2: 'Veterinário-chefe – Seleção alemã de salto', intl3: 'Consultor de estábulos em mais de 40 países',
    phil: 'Filosofia', ph1: 'Abordagem holística focada no bem-estar animal', ph2: 'Utilização dos mais recentes avanços em medicina regenerativa', ph3: 'Colaboração próxima com proprietários e treinadores',
    mission: 'A nossa missão', quote: '"Oferecer a cada cavalo os cuidados mais avançados, com compaixão e especialização, para que atinja todo o seu potencial mantendo a saúde a longo prazo."',
  },
  it: {
    passion: "Appassionato di cavalli fin dall'infanzia, il Dott. Nolting ha dedicato la sua vita a migliorare la salute e le prestazioni dei cavalli.",
    qualHeading: 'Percorso e qualifiche', qualSub: "Un percorso d'eccellenza al servizio della medicina equina",
    edu: 'Formazione', edu1: 'Dottorato in Medicina Veterinaria – Università di Hannover (1994)', edu2: 'Specializzazione in Ortopedia Equina – Università di Monaco', edu3: 'Certificazione FEI in Medicina Sportiva Equina',
    awards: 'Riconoscimenti', aw1: 'Premio di Eccellenza in Ortopedia Equina (2016)', aw2: "Membro dell'Accademia Europea di Chirurgia Veterinaria", aw3: 'Consulente della Federazione Equestre Internazionale (FEI)',
    intl: 'Esperienza internazionale', intl1: 'Veterinario ufficiale – Giochi Olimpici (2008, 2012, 2016)', intl2: 'Capo veterinario – Squadra nazionale tedesca di salto', intl3: 'Consulente per scuderie in oltre 40 paesi',
    phil: 'Filosofia', ph1: 'Approccio olistico centrato sul benessere animale', ph2: 'Utilizzo delle più recenti innovazioni in medicina rigenerativa', ph3: 'Collaborazione stretta con proprietari e allenatori',
    mission: 'La nostra missione', quote: '"Offrire a ogni cavallo le cure più avanzate, con compassione e competenza, per aiutarlo a raggiungere il suo pieno potenziale preservando la salute a lungo termine."',
  },
  no: {
    passion: 'Med en livslang lidenskap for hester har Dr. Nolting viet karrieren sin til å forbedre helse og prestasjon hos hester.',
    qualHeading: 'Bakgrunn og kvalifikasjoner', qualSub: 'En unik karriere i hestens tjeneste',
    edu: 'Utdanning', edu1: 'Doktorgrad i veterinærmedisin – Universitetet i Hannover (1994)', edu2: 'Spesialisering i ortopedi for hest – Universitetet i München', edu3: 'FEI-sertifisering i idrettsmedisin for hest',
    awards: 'Utmerkelser', aw1: 'Excellence Award i hesteortopedi (2016)', aw2: 'Medlem av European Academy of Veterinary Surgery', aw3: 'Rådgiver for FEI',
    intl: 'Internasjonal erfaring', intl1: 'Offisiell veterinær – OL (2008, 2012, 2016)', intl2: 'Sjefsveterinær – Tysk landslag i sprang', intl3: 'Rådgiver for staller i over 40 land',
    phil: 'Filosofi', ph1: 'Helhetlig tilnærming med fokus på dyrevelferd', ph2: 'Bruk av de nyeste fremskrittene innen regenerativ medisin', ph3: 'Tett samarbeid med eiere og trenere',
    mission: 'Vår visjon', quote: '«Å gi hver hest den mest avanserte behandlingen, med omtanke og ekspertise, slik at den kan nå sitt fulle potensial og beholde god helse på lang sikt.»',
  },
  fi: {
    passion: 'Hevosista lapsesta asti innostunut tohtori Nolting on omistanut uransa hevosten terveyden ja suorituskyvyn parantamiseen.',
    qualHeading: 'Tausta ja pätevyys', qualSub: 'Poikkeuksellinen ura hevosten parhaaksi',
    edu: 'Koulutus', edu1: 'Tohtorintutkinto eläinlääketieteessä – Hannoverin yliopisto (1994)', edu2: 'Erikoistuminen hevosten ortopediaan – Münchenin yliopisto', edu3: 'FEI-sertifiointi hevosten urheilulääketieteessä',
    awards: 'Tunnustukset', aw1: 'Erinomaisuuspalkinto hevosten ortopediassa (2016)', aw2: 'Eurooppalaisen eläinlääketieteellisen kirurgian akatemian jäsen', aw3: 'FEI:n konsultti',
    intl: 'Kansainvälinen kokemus', intl1: 'Virallinen eläinlääkäri – olympialaiset (2008, 2012, 2016)', intl2: 'Pääeläinlääkäri – Saksan maajoukkue (esteratsastus)', intl3: 'Konsultti talleille yli 40 maassa',
    phil: 'Filosofia', ph1: 'Kokonaisvaltainen lähestymistapa eläinten hyvinvointi edellä', ph2: 'Uusimpien regeneratiivisen lääketieteen menetelmien käyttö', ph3: 'Tiivis yhteistyö omistajien ja valmentajien kanssa',
    mission: 'Missiomme', quote: '"Tarjota jokaiselle hevoselle edistyksellisintä hoitoa myötätunnolla ja asiantuntemuksella."',
  },
  sv: {
    passion: 'Med en livslång passion för hästar har Dr. Nolting ägnat sitt liv åt att förbättra hästars hälsa och prestation.',
    qualHeading: 'Bakgrund och meriter', qualSub: 'En enastående karriär i hästens tjänst',
    edu: 'Utbildning', edu1: 'Doktorsexamen i veterinärmedicin – Universitetet i Hannover (1994)', edu2: 'Specialisering i ortopedi för häst – Universitetet i München', edu3: 'FEI-certifiering i hästmedicin för sport',
    awards: 'Utmärkelser', aw1: 'Excellence Award i hästortopedi (2016)', aw2: 'Medlem i European Academy of Veterinary Surgery', aw3: 'Konsult för FEI',
    intl: 'Internationell erfarenhet', intl1: 'Officiell veterinär – Olympiska spelen (2008, 2012, 2016)', intl2: 'Chefsveterinär – Tyska landslaget i hoppning', intl3: 'Konsult för stall i över 40 länder',
    phil: 'Filosofi', ph1: 'Helhetssyn med fokus på djurvälfärd', ph2: 'Använder de senaste framstegen inom regenerativ medicin', ph3: 'Nära samarbete med ägare och tränare',
    mission: 'Vårt uppdrag', quote: '"Att ge varje häst den mest avancerade vården med omtanke och expertis."',
  },
  nl: {
    passion: 'Al sinds zijn jeugd gepassioneerd door paarden heeft Dr. Nolting zijn leven gewijd aan het verbeteren van de gezondheid en prestaties van paarden.',
    qualHeading: 'Loopbaan en kwalificaties', qualSub: 'Een uitzonderlijke loopbaan in dienst van equine excellentie',
    edu: 'Opleiding', edu1: 'Doctoraat Diergeneeskunde – Universiteit Hannover (1994)', edu2: 'Specialisatie Paardenorthopedie – Universiteit München', edu3: 'FEI-certificering in Equine Sportgeneeskunde',
    awards: 'Onderscheidingen', aw1: 'Excellence Award in Paardenorthopedie (2016)', aw2: 'Lid van de European Academy of Veterinary Surgery', aw3: 'Consultant voor de FEI',
    intl: 'Internationale ervaring', intl1: 'Officieel dierenarts – Olympische Spelen (2008, 2012, 2016)', intl2: 'Hoofddierenarts – Duits nationaal springteam', intl3: 'Consultant voor stallen in meer dan 40 landen',
    phil: 'Filosofie', ph1: 'Holistische aanpak met focus op dierenwelzijn', ph2: 'Toepassing van de nieuwste ontwikkelingen in regeneratieve geneeskunde', ph3: 'Nauwe samenwerking met eigenaren en trainers',
    mission: 'Onze missie', quote: '"Elk paard de meest geavanceerde zorg bieden, met compassie en expertise."',
  },
  ru: {
    passion: 'С детства увлечённый лошадьми, доктор Нольтинг посвятил жизнь улучшению здоровья и спортивных результатов лошадей.',
    qualHeading: 'Путь и квалификация', qualSub: 'Исключительная карьера во имя совершенства в ветеринарии',
    edu: 'Образование', edu1: 'Доктор ветеринарной медицины — Университет Ганновера (1994)', edu2: 'Специализация по ортопедии лошадей — Университет Мюнхена', edu3: 'Сертификация FEI по спортивной медицине лошадей',
    awards: 'Награды', aw1: 'Премия за достижения в ортопедии лошадей (2016)', aw2: 'Член Европейской академии ветеринарной хирургии', aw3: 'Консультант FEI',
    intl: 'Международный опыт', intl1: 'Официальный ветеринар — Олимпийские игры (2008, 2012, 2016)', intl2: 'Главный ветеринар — сборная Германии по конкуру', intl3: 'Консультант конюшен более чем в 40 странах',
    phil: 'Философия', ph1: 'Комплексный подход с акцентом на благополучие животных', ph2: 'Использование новейших достижений регенеративной медицины', ph3: 'Тесное сотрудничество с владельцами и тренерами',
    mission: 'Наша миссия', quote: '«Обеспечить каждой лошади самую современную помощь с заботой и экспертностью.»',
  },
  zh: {
    passion: '自幼热爱马匹的 Nolting 医生将一生投入到提升马匹健康与竞技表现。',
    qualHeading: '经历与资质', qualSub: '以卓越为目标的非凡职业历程',
    edu: '教育背景', edu1: '兽医学博士——汉诺威大学（1994）', edu2: '马科骨科专科——慕尼黑大学', edu3: 'FEI 马匹运动医学认证',
    awards: '荣誉与奖项', aw1: '马科骨科卓越奖（2016）', aw2: '欧洲兽医外科科学院成员', aw3: '国际马术联合会（FEI）顾问',
    intl: '国际经验', intl1: '奥运会官方兽医（2008、2012、2016）', intl2: '德国国家障碍赛队首席兽医', intl3: '为 40 多个国家的马房提供咨询',
    phil: '理念', ph1: '以动物福利为核心的整体治疗', ph2: '采用最新再生医学进展', ph3: '与马主及教练紧密协作',
    mission: '我们的使命', quote: '"以同理心与专业能力，为每一匹马提供最先进的医疗照护。"',
  },
  ja: {
    passion: '幼い頃から馬に情熱を注いできたノルティング医師は、馬の健康とパフォーマンス向上に生涯を捧げてきました。',
    qualHeading: '経歴と資格', qualSub: '馬医療の卓越性に捧げた特別なキャリア',
    edu: '学歴', edu1: '獣医学博士 — ハノーファー大学（1994）', edu2: '馬の整形外科専門 — ミュンヘン大学', edu3: 'FEI 馬スポーツ医学認定',
    awards: '受賞・称号', aw1: '馬整形外科エクセレンス賞（2016）', aw2: '欧州獣医外科学アカデミー会員', aw3: '国際馬術連盟（FEI）コンサルタント',
    intl: '国際経験', intl1: '公式獣医 — オリンピック（2008・2012・2016）', intl2: '主任獣医 — ドイツ障害飛越ナショナルチーム', intl3: '40 か国以上の厩舎へのコンサルティング',
    phil: '理念', ph1: '動物福祉を中心にしたホリスティックなアプローチ', ph2: '再生医療の最新知見を活用', ph3: 'オーナーやトレーナーとの緊密な連携',
    mission: '私たちの使命', quote: '「思いやりと専門性をもって最先端の医療を提供し、馬が最大限の力を発揮できるよう支えます。」',
  },
  ar: {
    passion: 'منذ طفولته وهو شغوف بالخيول، كرّس الدكتور نولتينج حياته لتحسين صحة الخيول وأدائها.',
    qualHeading: 'المسيرة والمؤهلات', qualSub: 'مسيرة استثنائية في خدمة التميز في طب الخيول',
    edu: 'التعليم', edu1: 'دكتوراه في الطب البيطري — جامعة هانوفر (1994)', edu2: 'تخصص في جراحة العظام للخيول — جامعة ميونخ', edu3: 'اعتماد FEI في طب الخيول الرياضي',
    awards: 'الجوائز', aw1: 'جائزة التميز في جراحة عظام الخيول (2016)', aw2: 'عضو الأكاديمية الأوروبية لجراحة الطب البيطري', aw3: 'مستشار الاتحاد الدولي للفروسية (FEI)',
    intl: 'خبرة دولية', intl1: 'طبيب بيطري رسمي — الألعاب الأولمبية (2008، 2012، 2016)', intl2: 'الطبيب البيطري الرئيسي — المنتخب الألماني لقفز الحواجز', intl3: 'استشاري لإسطبلات في أكثر من 40 دولة',
    phil: 'النهج', ph1: 'نهج شمولي يركز على رفاه الحيوان', ph2: 'استخدام أحدث تطورات الطب التجديدي', ph3: 'تعاون وثيق مع المالكين والمدربين',
    mission: 'مهمتنا', quote: '"تقديم الرعاية الأكثر تقدماً لكل حصان، بعطف وخبرة."',
  },
}

export function About() {
  const { t, language } = useLanguage()
  const c = pick(language, copy)

  const stats = [
    { value: t('aboutYearsExp'), label: t('aboutYearsLabel') },
    { value: t('aboutPatientsNum'), label: t('aboutPatientsLabel') },
    { value: t('aboutCountriesNum'), label: t('aboutCountriesLabel') },
    { value: t('aboutSurgeriesNum'), label: t('aboutSurgeriesLabel') },
  ]

  const qualifications = [
    { icon: GraduationCap, title: c.edu, items: [c.edu1, c.edu2, c.edu3] },
    { icon: Award, title: c.awards, items: [c.aw1, c.aw2, c.aw3] },
    { icon: Globe, title: c.intl, items: [c.intl1, c.intl2, c.intl3] },
    { icon: Heart, title: c.phil, items: [c.ph1, c.ph2, c.ph3] },
  ]

  return (
    <section id="about" className="relative py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">{t('aboutTag')}</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">{t('aboutTitle')}</h1>
            <p className="text-xl text-muted-foreground mb-6">{t('aboutDescription')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t('aboutBio')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.passion}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative rounded-2xl overflow-hidden premium-shadow">
              <img src={legExamination} alt="Dr. Nolting examining a horse" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="text-center p-8 bg-card rounded-2xl border border-border premium-shadow">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.qualHeading}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{c.qualSub}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="p-8 bg-card rounded-2xl border border-border premium-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center"><qual.icon className="w-7 h-7 text-accent" /></div>
                  <h3 className="font-display text-xl font-bold text-foreground">{qual.title}</h3>
                </div>
                <ul className="space-y-3">
                  {qual.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" /><span className="text-muted-foreground">{item}</span></li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden">
          <img src={horsePortrait} alt="Beautiful sport horse" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
            <div className="p-8 md:p-12 max-w-3xl">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{c.mission}</h3>
              <p className="text-white/90 text-lg leading-relaxed">{c.quote}</p>
              <p className="text-accent font-medium mt-4">— Dr. Björn Nolting</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
