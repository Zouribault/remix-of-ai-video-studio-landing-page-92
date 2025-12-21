import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqItems = [
  {
    question: "Quels types de blessures traitez-vous le plus fréquemment ?",
    answer: "Nous traitons principalement les blessures orthopédiques : tendinites, lésions articulaires, fractures, problèmes de dos et de locomotion. Notre expertise couvre l'ensemble du système musculo-squelettique équin, des sabots jusqu'à la colonne vertébrale."
  },
  {
    question: "Comment se déroule une première consultation ?",
    answer: "La première consultation comprend un examen clinique complet, une analyse de la démarche, et si nécessaire, des examens d'imagerie (radiographie, échographie, IRM). Nous prenons le temps de comprendre l'historique complet de votre cheval et vos objectifs."
  },
  {
    question: "Proposez-vous des consultations à domicile ou en déplacement ?",
    answer: "Oui, nous nous déplaçons dans toute l'Europe pour des consultations, des urgences et le suivi de chevaux de compétition. Nous intervenons également lors de grands événements équestres internationaux."
  },
  {
    question: "Quels sont les délais de récupération typiques après une chirurgie ?",
    answer: "Les délais varient selon le type d'intervention. Une arthroscopie simple peut permettre une reprise du travail en 4-6 semaines, tandis qu'une reconstruction tendineuse peut nécessiter 6-12 mois. Chaque protocole est personnalisé selon le patient."
  },
  {
    question: "Utilisez-vous des traitements de médecine régénérative ?",
    answer: "Absolument. Nous sommes pionniers dans l'utilisation de la thérapie par cellules souches, du PRP (plasma riche en plaquettes), et de l'IRAP. Ces traitements biologiques accélèrent la guérison et améliorent la qualité des tissus réparés."
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer: "Vous pouvez nous contacter par téléphone, email ou via le formulaire de contact sur ce site. Pour les urgences, un numéro dédié est disponible 24h/24. Nous vous répondons généralement sous 24 heures."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/5 transition-colors"
              >
                <span className="font-display font-bold text-foreground pr-4">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-5"
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
