import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Calendar, Trophy, Medal, Star, Globe } from 'lucide-react'
import { pick } from '@/lib/i18n'
import type { Language } from '@/lib/translations'
import achievementsCertificate from '@/assets/achievements-certificate.jpg'

const copy: Record<Language, {
  intro: string; timelineTitle: string
  m94t: string; m94d: string; m00t: string; m00d: string; m08t: string; m08d: string
  m12t: string; m12d: string; m16t: string; m16d: string; m20t: string; m20d: string
  olympicTitle: string; olympicSub: string
  o08c: string; o08r: string; o08m: string; o12c: string; o12r: string; o12m: string; o16c: string; o16r: string; o16m: string
  awardsTitle: string; a1: string; a2: string; a3: string; a4: string
}> = {
  de: {
    intro: 'Drei Jahrzehnte Veterinärmedizin auf höchstem Niveau – geprägt von olympischen Erfolgen, medizinischen Innovationen und internationaler Anerkennung.',
    timelineTitle: 'Beruflicher Werdegang',
    m94t: 'Promotion in Veterinärmedizin', m94d: 'Universität Hannover – mit Auszeichnung',
    m00t: 'Tierarzt des deutschen Nationalteams', m00d: 'Ernennung durch den Deutschen Reiterverband',
    m08t: 'Olympische Spiele Peking', m08d: 'Offizieller Tierarzt – deutsches Springteam',
    m12t: 'Olympische Spiele London', m12d: 'Cheftierarzt der deutschen Reitsportdelegation',
    m16t: 'Exzellenzpreis Pferdeorthopädie', m16d: 'Verliehen von der Weltvereinigung der Tierärzte',
    m20t: 'Pionier der regenerativen Medizin', m20d: 'Über 1.000 PRP- und Stammzellbehandlungen',
    olympicTitle: 'Olympische Erfahrung', olympicSub: 'Im Dienst der globalen Reitsport-Exzellenz',
    o08c: 'Peking 2008', o08r: 'Offizieller Tierarzt', o08m: '2 Goldmedaillen im Team',
    o12c: 'London 2012', o12r: 'Cheftierarzt', o12m: '1 Gold, 1 Silber, 1 Bronze',
    o16c: 'Rio 2016', o16r: 'Berater', o16m: '1 Goldmedaille',
    awardsTitle: 'Preise & Auszeichnungen',
    a1: 'Exzellenz in Pferdechirurgie', a2: 'Innovation in Sportmedizin', a3: 'Beitrag zur Forschung', a4: 'Bester europäischer Praktiker',
  },
  en: {
    intro: 'Three decades of top-level veterinary practice, marked by Olympic success, medical innovation, and international recognition.',
    timelineTitle: 'Professional Timeline',
    m94t: 'Doctorate in Veterinary Medicine', m94d: 'University of Hanover – Graduated with honors',
    m00t: 'Veterinarian of the German National Team', m00d: 'Appointed by the German Equestrian Federation',
    m08t: 'Beijing Olympic Games', m08d: 'Official veterinarian – German show jumping team',
    m12t: 'London Olympic Games', m12d: 'Head veterinarian of the German equestrian delegation',
    m16t: 'Excellence Award in Equine Orthopedics', m16d: 'Awarded by the World Veterinary Association',
    m20t: 'Pioneer in Regenerative Medicine', m20d: 'Over 1,000 PRP and stem cell treatments performed',
    olympicTitle: 'Olympic Experience', olympicSub: 'Serving excellence in global equestrian sport',
    o08c: 'Beijing 2008', o08r: 'Official veterinarian', o08m: '2 team gold medals',
    o12c: 'London 2012', o12r: 'Head veterinarian', o12m: '1 gold, 1 silver, 1 bronze',
    o16c: 'Rio 2016', o16r: 'Consultant', o16m: '1 gold medal',
    awardsTitle: 'Awards & Recognition',
    a1: 'Excellence in Equine Surgery', a2: 'Innovation in Sports Medicine', a3: 'Contribution to Research', a4: 'Best European Practitioner',
  },
  fr: {
    intro: "Trois décennies de pratique vétérinaire au plus haut niveau, marquées par des succès olympiques, des innovations médicales et une reconnaissance internationale.",
    timelineTitle: 'Parcours Professionnel',
    m94t: 'Doctorat en Médecine Vétérinaire', m94d: 'Université de Hanovre - Mention Très Bien',
    m00t: "Vétérinaire de l'Équipe Nationale Allemande", m00d: 'Nomination par la Fédération Équestre Allemande',
    m08t: 'Jeux Olympiques de Pékin', m08d: 'Vétérinaire officiel - Équipe allemande de saut',
    m12t: 'Jeux Olympiques de Londres', m12d: 'Chef vétérinaire de la délégation équestre allemande',
    m16t: "Prix d'Excellence en Orthopédie Équine", m16d: "Décerné par l'Association Mondiale Vétérinaire",
    m20t: 'Pionnier en Médecine Régénérative', m20d: 'Plus de 1000 traitements PRP et cellules souches réalisés',
    olympicTitle: 'Expérience Olympique', olympicSub: "Au service de l'excellence équestre mondiale",
    o08c: 'Pékin 2008', o08r: 'Vétérinaire officiel', o08m: "2 médailles d'or pour l'équipe",
    o12c: 'Londres 2012', o12r: 'Chef vétérinaire', o12m: '1 or, 1 argent, 1 bronze',
    o16c: 'Rio 2016', o16r: 'Consultant', o16m: "1 médaille d'or",
    awardsTitle: 'Prix et Distinctions',
    a1: 'Excellence en Chirurgie Équine', a2: 'Innovation en Médecine Sportive', a3: 'Contribution à la Recherche', a4: 'Meilleur Praticien Européen',
  },
  es: {
    intro: 'Tres décadas de práctica veterinaria al más alto nivel, con éxitos olímpicos, innovación médica y reconocimiento internacional.',
    timelineTitle: 'Trayectoria profesional',
    m94t: 'Doctorado en Medicina Veterinaria', m94d: 'Universidad de Hannover – Con honores',
    m00t: 'Veterinario del equipo nacional alemán', m00d: 'Nombramiento por la Federación Ecuestre Alemana',
    m08t: 'Juegos Olímpicos de Pekín', m08d: 'Veterinario oficial – equipo alemán de salto',
    m12t: 'Juegos Olímpicos de Londres', m12d: 'Veterinario jefe de la delegación ecuestre alemana',
    m16t: 'Premio de Excelencia en Ortopedia Equina', m16d: 'Otorgado por la Asociación Mundial Veterinaria',
    m20t: 'Pionero en medicina regenerativa', m20d: 'Más de 1.000 tratamientos PRP y células madre',
    olympicTitle: 'Experiencia olímpica', olympicSub: 'Al servicio de la excelencia ecuestre mundial',
    o08c: 'Pekín 2008', o08r: 'Veterinario oficial', o08m: '2 oros por equipos',
    o12c: 'Londres 2012', o12r: 'Veterinario jefe', o12m: '1 oro, 1 plata, 1 bronce',
    o16c: 'Río 2016', o16r: 'Consultor', o16m: '1 oro',
    awardsTitle: 'Premios y distinciones', a1: 'Excelencia en cirugía equina', a2: 'Innovación en medicina deportiva', a3: 'Contribución a la investigación', a4: 'Mejor profesional europeo',
  },
  pt: {
    intro: 'Três décadas de prática veterinária ao mais alto nível, com conquistas olímpicas, inovação médica e reconhecimento internacional.',
    timelineTitle: 'Percurso profissional',
    m94t: 'Doutoramento em Medicina Veterinária', m94d: 'Universidade de Hannover – Com distinção',
    m00t: 'Veterinário da seleção nacional alemã', m00d: 'Nomeação pela Federação Equestre Alemã',
    m08t: 'Jogos Olímpicos de Pequim', m08d: 'Veterinário oficial – equipa alemã de salto',
    m12t: 'Jogos Olímpicos de Londres', m12d: 'Veterinário-chefe da delegação equestre alemã',
    m16t: 'Prémio de Excelência em Ortopedia Equina', m16d: 'Atribuído pela Associação Mundial Veterinária',
    m20t: 'Pioneiro em medicina regenerativa', m20d: 'Mais de 1.000 tratamentos PRP e células estaminais',
    olympicTitle: 'Experiência olímpica', olympicSub: 'Ao serviço da excelência equestre mundial',
    o08c: 'Pequim 2008', o08r: 'Veterinário oficial', o08m: '2 medalhas de ouro por equipas',
    o12c: 'Londres 2012', o12r: 'Veterinário-chefe', o12m: '1 ouro, 1 prata, 1 bronze',
    o16c: 'Rio 2016', o16r: 'Consultor', o16m: '1 medalha de ouro',
    awardsTitle: 'Prémios e distinções', a1: 'Excelência em cirurgia equina', a2: 'Inovação em medicina desportiva', a3: 'Contribuição para a investigação', a4: 'Melhor profissional europeu',
  },
  it: {
    intro: 'Tre decenni di attività veterinaria ai massimi livelli, tra successi olimpici, innovazione medica e riconoscimento internazionale.',
    timelineTitle: 'Percorso professionale',
    m94t: 'Dottorato in Medicina Veterinaria', m94d: 'Università di Hannover – Con lode',
    m00t: 'Veterinario della nazionale tedesca', m00d: 'Nomina della Federazione Equestre Tedesca',
    m08t: 'Olimpiadi di Pechino', m08d: 'Veterinario ufficiale – squadra tedesca di salto',
    m12t: 'Olimpiadi di Londra', m12d: 'Capo veterinario della delegazione equestre tedesca',
    m16t: 'Premio di Eccellenza in Ortopedia Equina', m16d: 'Assegnato dalla World Veterinary Association',
    m20t: 'Pioniere in medicina rigenerativa', m20d: 'Oltre 1.000 trattamenti PRP e cellule staminali',
    olympicTitle: 'Esperienza olimpica', olympicSub: "Al servizio dell'eccellenza equestre mondiale",
    o08c: 'Pechino 2008', o08r: 'Veterinario ufficiale', o08m: '2 ori a squadre',
    o12c: 'Londra 2012', o12r: 'Capo veterinario', o12m: '1 oro, 1 argento, 1 bronzo',
    o16c: 'Rio 2016', o16r: 'Consulente', o16m: '1 oro',
    awardsTitle: 'Premi e riconoscimenti', a1: 'Eccellenza in chirurgia equina', a2: 'Innovazione in medicina sportiva', a3: 'Contributo alla ricerca', a4: 'Miglior professionista europeo',
  },
  no: { intro: 'Tre tiår med veterinærpraksis på toppnivå, preget av olympiske resultater, medisinsk innovasjon og internasjonal anerkjennelse.', timelineTitle: 'Karriere', m94t: 'Doktorgrad i veterinærmedisin', m94d: 'Universitetet i Hannover – Med utmerkelse', m00t: 'Veterinær for det tyske landslaget', m00d: 'Utnevnt av det tyske rytterforbundet', m08t: 'OL i Beijing', m08d: 'Offisiell veterinær – tysk spranglag', m12t: 'OL i London', m12d: 'Sjefsveterinær for den tyske delegasjonen', m16t: 'Excellence-pris i hesteortopedi', m16d: 'Tildelt av World Veterinary Association', m20t: 'Pioner innen regenerativ medisin', m20d: 'Over 1 000 PRP- og stamcellebehandlinger', olympicTitle: 'Olympisk erfaring', olympicSub: 'I tjeneste for global hestesport på toppnivå', o08c: 'Beijing 2008', o08r: 'Offisiell veterinær', o08m: '2 gullmedaljer i lag', o12c: 'London 2012', o12r: 'Sjefsveterinær', o12m: '1 gull, 1 sølv, 1 bronse', o16c: 'Rio 2016', o16r: 'Konsulent', o16m: '1 gullmedalje', awardsTitle: 'Priser og utmerkelser', a1: 'Exellence i hestekirurgi', a2: 'Innovasjon i idrettsmedisin', a3: 'Bidrag til forskning', a4: 'Beste europeiske praktiker' },
  fi: { intro: 'Kolme vuosikymmentä huipputason eläinlääkintätyötä: olympiamenestystä, lääketieteellistä innovaatiota ja kansainvälistä tunnustusta.', timelineTitle: 'Ammatillinen ura', m94t: 'Eläinlääketieteen tohtori', m94d: 'Hannoverin yliopisto – Kunniamaininnalla', m00t: 'Saksan maajoukkueen eläinlääkäri', m00d: 'Nimitys Saksan ratsastajaliitolta', m08t: 'Pekingin olympialaiset', m08d: 'Virallinen eläinlääkäri – Saksan esteratsastusjoukkue', m12t: 'Lontoon olympialaiset', m12d: 'Saksan delegaation pääeläinlääkäri', m16t: 'Erinomaisuuspalkinto hevosten ortopediassa', m16d: 'Myöntänyt World Veterinary Association', m20t: 'Regeneratiivisen lääketieteen edelläkävijä', m20d: 'Yli 1 000 PRP- ja kantasoluhoitoa', olympicTitle: 'Olympiakokemus', olympicSub: 'Maailmanluokan hevosurheilun tukena', o08c: 'Peking 2008', o08r: 'Virallinen eläinlääkäri', o08m: '2 joukkuekultaa', o12c: 'Lontoo 2012', o12r: 'Pääeläinlääkäri', o12m: '1 kulta, 1 hopea, 1 pronssi', o16c: 'Rio 2016', o16r: 'Konsultti', o16m: '1 kulta', awardsTitle: 'Palkinnot ja tunnustukset', a1: 'Erinomaisuus hevosten kirurgiassa', a2: 'Innovaatio urheilulääketieteessä', a3: 'Panostus tutkimukseen', a4: 'Paras eurooppalainen praktiikko' },
  sv: { intro: 'Tre decennier av veterinärpraktik på högsta nivå – med olympiska framgångar, medicinsk innovation och internationellt erkännande.', timelineTitle: 'Karriär', m94t: 'Doktorsexamen i veterinärmedicin', m94d: 'Universitetet i Hannover – Med utmärkelse', m00t: 'Veterinär för tyska landslaget', m00d: 'Utnämnd av tyska ridsportförbundet', m08t: 'OS i Peking', m08d: 'Officiell veterinär – tyska hopplaget', m12t: 'OS i London', m12d: 'Chefsveterinär för tyska delegationens ridsport', m16t: 'Excellence Award i hästortopedi', m16d: 'Tilldelad av World Veterinary Association', m20t: 'Pionjär inom regenerativ medicin', m20d: 'Över 1 000 PRP- och stamcellsbehandlingar', olympicTitle: 'Olympisk erfarenhet', olympicSub: 'I tjänst för global ridsport i toppklass', o08c: 'Peking 2008', o08r: 'Officiell veterinär', o08m: '2 lagguld', o12c: 'London 2012', o12r: 'Chefsveterinär', o12m: '1 guld, 1 silver, 1 brons', o16c: 'Rio 2016', o16r: 'Konsult', o16m: '1 guld', awardsTitle: 'Priser och utmärkelser', a1: 'Excellens inom hästkirurgi', a2: 'Innovation inom idrottsmedicin', a3: 'Bidrag till forskning', a4: 'Bästa europeiska praktiker' },
  nl: { intro: 'Drie decennia veterinaire praktijk op topniveau, met olympisch succes, medische innovatie en internationale erkenning.', timelineTitle: 'Professionele loopbaan', m94t: 'Doctoraat Diergeneeskunde', m94d: 'Universiteit Hannover – Met onderscheiding', m00t: 'Dierenarts van het Duitse nationale team', m00d: 'Benoemd door de Duitse hippische federatie', m08t: 'Olympische Spelen Beijing', m08d: 'Officieel dierenarts – Duits springteam', m12t: 'Olympische Spelen Londen', m12d: 'Hoofddierenarts van de Duitse delegatie', m16t: 'Excellence Award in Paardenorthopedie', m16d: 'Toegekend door de World Veterinary Association', m20t: 'Pionier in regeneratieve geneeskunde', m20d: 'Meer dan 1.000 PRP- en stamcelbehandelingen', olympicTitle: 'Olympische ervaring', olympicSub: 'In dienst van wereldwijde hippische topkwaliteit', o08c: 'Beijing 2008', o08r: 'Officieel dierenarts', o08m: '2 teamgouden', o12c: 'Londen 2012', o12r: 'Hoofddierenarts', o12m: '1 goud, 1 zilver, 1 brons', o16c: 'Rio 2016', o16r: 'Consultant', o16m: '1 goud', awardsTitle: 'Prijzen en onderscheidingen', a1: 'Excellentie in paardenchirurgie', a2: 'Innovatie in sportgeneeskunde', a3: 'Bijdrage aan onderzoek', a4: 'Beste Europese practitioner' },
  ru: { intro: 'Три десятилетия практики на высшем уровне: олимпийские успехи, медицинские инновации и международное признание.', timelineTitle: 'Профессиональный путь', m94t: 'Доктор ветеринарной медицины', m94d: 'Университет Ганновера — с отличием', m00t: 'Ветеринар сборной Германии', m00d: 'Назначение немецкой федерацией конного спорта', m08t: 'Олимпиада в Пекине', m08d: 'Официальный ветеринар — команда по конкуру', m12t: 'Олимпиада в Лондоне', m12d: 'Главный ветеринар немецкой делегации', m16t: 'Премия за достижения в ортопедии лошадей', m16d: 'Присуждена World Veterinary Association', m20t: 'Пионер регенеративной медицины', m20d: 'Более 1 000 процедур PRP и стволовых клеток', olympicTitle: 'Олимпийский опыт', olympicSub: 'На службе мирового конного спорта', o08c: 'Пекин 2008', o08r: 'Официальный ветеринар', o08m: '2 золота в командном', o12c: 'Лондон 2012', o12r: 'Главный ветеринар', o12m: '1 золото, 1 серебро, 1 бронза', o16c: 'Рио 2016', o16r: 'Консультант', o16m: '1 золото', awardsTitle: 'Награды и отличия', a1: 'Достижения в хирургии лошадей', a2: 'Инновации в спортивной медицине', a3: 'Вклад в исследования', a4: 'Лучший европейский практик' },
  zh: { intro: '三十年的顶级兽医实践：奥运级别的成绩、医学创新与国际认可。', timelineTitle: '职业历程', m94t: '兽医学博士', m94d: '汉诺威大学——荣誉毕业', m00t: '德国国家队兽医', m00d: '由德国马术协会任命', m08t: '北京奥运会', m08d: '官方兽医——德国障碍赛队', m12t: '伦敦奥运会', m12d: '德国马术代表团首席兽医', m16t: '马科骨科卓越奖', m16d: '由世界兽医协会授予', m20t: '再生医学先驱', m20d: '完成 1,000+ 例 PRP 与干细胞治疗', olympicTitle: '奥运经验', olympicSub: '服务全球马术卓越', o08c: '北京 2008', o08r: '官方兽医', o08m: '团体 2 枚金牌', o12c: '伦敦 2012', o12r: '首席兽医', o12m: '1 金 1 银 1 铜', o16c: '里约 2016', o16r: '顾问', o16m: '1 枚金牌', awardsTitle: '奖项与荣誉', a1: '马科外科卓越', a2: '运动医学创新', a3: '科研贡献', a4: '欧洲最佳临床兽医' },
  ja: { intro: '30年にわたる最高水準の獣医実務。オリンピックでの実績、医療の革新、国際的評価。', timelineTitle: 'キャリア', m94t: '獣医学博士', m94d: 'ハノーファー大学（優秀成績）', m00t: 'ドイツ代表チーム獣医', m00d: 'ドイツ馬術連盟より任命', m08t: '北京オリンピック', m08d: '公式獣医 — ドイツ障害飛越チーム', m12t: 'ロンドンオリンピック', m12d: 'ドイツ馬術代表団 主任獣医', m16t: '馬整形外科エクセレンス賞', m16d: 'World Veterinary Associationより授与', m20t: '再生医療の先駆者', m20d: 'PRP・幹細胞治療 1,000件以上', olympicTitle: 'オリンピック経験', olympicSub: '世界の馬術競技を支える', o08c: '北京 2008', o08r: '公式獣医', o08m: '団体 金2', o12c: 'ロンドン 2012', o12r: '主任獣医', o12m: '金1・銀1・銅1', o16c: 'リオ 2016', o16r: 'コンサルタント', o16m: '金1', awardsTitle: '受賞・表彰', a1: '馬外科の卓越性', a2: 'スポーツ医学の革新', a3: '研究への貢献', a4: '欧州ベストプラクティショナー' },
  ar: { intro: 'ثلاثة عقود من الممارسة البيطرية على أعلى مستوى، تتضمن نجاحات أولمبية وابتكارات طبية وتقديراً دولياً.', timelineTitle: 'المسيرة المهنية', m94t: 'دكتوراه في الطب البيطري', m94d: 'جامعة هانوفر — بتفوق', m00t: 'الطبيب البيطري للمنتخب الألماني', m00d: 'تعيين من الاتحاد الألماني للفروسية', m08t: 'أولمبياد بكين', m08d: 'طبيب بيطري رسمي — فريق ألمانيا لقفز الحواجز', m12t: 'أولمبياد لندن', m12d: 'الطبيب البيطري الرئيسي للوفد الألماني', m16t: 'جائزة التميز في جراحة عظام الخيول', m16d: 'مُنحت من World Veterinary Association', m20t: 'رائد في الطب التجديدي', m20d: 'أكثر من 1000 علاج PRP وخلايا جذعية', olympicTitle: 'خبرة أولمبية', olympicSub: 'في خدمة التميز العالمي في رياضة الفروسية', o08c: 'بكين 2008', o08r: 'طبيب بيطري رسمي', o08m: 'ذهبيتان للفريق', o12c: 'لندن 2012', o12r: 'الطبيب البيطري الرئيسي', o12m: 'ذهب 1، فضة 1، برونز 1', o16c: 'ريو 2016', o16r: 'مستشار', o16m: 'ذهب 1', awardsTitle: 'الجوائز والتكريم', a1: 'التميز في جراحة الخيول', a2: 'الابتكار في طب الرياضة', a3: 'المساهمة في البحث', a4: 'أفضل ممارس أوروبي' },
}

export function Achievements() {
  const { t, language } = useLanguage()
  const c = pick(language, copy)
  const milestones = [
    { year: '1994', title: c.m94t, desc: c.m94d, icon: Calendar },
    { year: '2000', title: c.m00t, desc: c.m00d, icon: Trophy },
    { year: '2008', title: c.m08t, desc: c.m08d, icon: Medal },
    { year: '2012', title: c.m12t, desc: c.m12d, icon: Medal },
    { year: '2016', title: c.m16t, desc: c.m16d, icon: Star },
    { year: '2020', title: c.m20t, desc: c.m20d, icon: Globe },
  ]
  const awards = [
    { title: c.a1, org: 'ECVS', year: '2018' },
    { title: c.a2, org: 'FEI', year: '2019' },
    { title: c.a3, org: 'AAEP', year: '2021' },
    { title: c.a4, org: 'FEEVA', year: '2022' },
  ]
  const olympicGames = [
    { city: c.o08c, role: c.o08r, medals: c.o08m },
    { city: c.o12c, role: c.o12r, medals: c.o12m },
    { city: c.o16c, role: c.o16r, medals: c.o16m },
  ]

  return (
    <section id="achievements" className="relative py-24 bg-card">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative rounded-2xl overflow-hidden premium-shadow">
              <img src={achievementsCertificate} alt="Certificate of Veterinary Excellence" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">{t('achievementsTag')}</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">{t('achievementsTitle')}</h1>
            <p className="text-xl text-muted-foreground mb-6">{t('achievementsSubtitle')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.intro}</p>
          </motion.div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12"><h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.timelineTitle}</h2></div>
          <div className="max-w-4xl mx-auto"><div className="relative"><div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="relative flex gap-6 mb-8 last:mb-0">
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-accent rounded-full items-center justify-center z-10"><m.icon className="w-6 h-6 text-primary-foreground" /></div>
                <div className="flex-1 p-6 bg-background rounded-2xl border border-border premium-shadow">
                  <span className="inline-block md:hidden px-3 py-1 bg-accent text-primary-foreground rounded-full text-sm font-bold mb-3">{m.year}</span>
                  <div className="hidden md:block text-accent font-bold text-lg mb-1">{m.year}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div></div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12"><h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.olympicTitle}</h2><p className="text-xl text-muted-foreground">{c.olympicSub}</p></div>
          <div className="grid md:grid-cols-3 gap-8">
            {olympicGames.map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="p-8 bg-background rounded-2xl border border-border text-center premium-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"><Medal className="w-8 h-8 text-accent" /></div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{g.city}</h3>
                <p className="text-accent font-medium mb-2">{g.role}</p>
                <p className="text-sm text-muted-foreground">{g.medals}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12"><h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">{c.awardsTitle}</h2></div>
          <div className="grid md:grid-cols-4 gap-6">
            {awards.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="p-6 bg-background rounded-2xl border border-accent/30 text-center">
                <Trophy className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-display font-bold text-foreground mb-1">{a.title}</h4>
                <p className="text-sm text-accent font-medium">{a.org}</p>
                <p className="text-sm text-muted-foreground">{a.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
