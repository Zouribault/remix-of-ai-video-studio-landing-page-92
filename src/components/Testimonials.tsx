import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import testimonial1 from '@/assets/testimonial-1.jpg'
import testimonial2 from '@/assets/testimonial-2.jpg'
import testimonial3 from '@/assets/testimonial-3.jpg'

const testimonials = [
  {
    name: 'Maria Schneider',
    role: 'Propriétaire de chevaux de dressage',
    image: testimonial1,
    quote: "Le Dr. Nolting a sauvé la carrière de mon cheval. Après une blessure grave au tendon, je pensais que tout était fini. Grâce à son expertise en médecine régénérative, mon cheval concourt à nouveau au plus haut niveau.",
    rating: 5,
  },
  {
    name: 'Hans Weber',
    role: 'Cavalier professionnel de saut',
    image: testimonial2,
    quote: "En 15 ans de compétition internationale, je n'ai jamais rencontré un vétérinaire aussi compétent et dévoué. Sa connaissance approfondie de l'orthopédie équine est inégalée.",
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    role: 'Entraîneur équestre',
    image: testimonial3,
    quote: "Nous confions tous nos chevaux de compétition au Dr. Nolting. Son approche préventive et ses diagnostics précis nous ont permis d'éviter de nombreuses blessures graves.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
            Témoignages
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des propriétaires de chevaux et des cavaliers professionnels partagent leur expérience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl border border-border p-8 premium-shadow relative"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
