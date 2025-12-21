import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Calendar } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { toast } from 'sonner'
import horsePortrait from '@/assets/horse-portrait.jpg'

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success(t('contactSuccess'))
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      primary: 'Clinique Équine Dr. Nolting',
      secondary: 'Pferdeklinik Straße 12, 30175 Hanovre, Allemagne',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      primary: '+49 511 123 4567',
      secondary: 'Urgences 24h/24: +49 511 123 4568',
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'contact@dr-nolting.com',
      secondary: 'urgences@dr-nolting.com',
    },
    {
      icon: Clock,
      title: 'Horaires',
      primary: 'Lundi - Vendredi: 8h00 - 18h00',
      secondary: 'Samedi: 9h00 - 13h00 (sur RDV)',
    },
  ]

  const subjects = [
    'Consultation générale',
    'Examen de boiterie',
    'Chirurgie programmée',
    'Urgence',
    'Deuxième avis médical',
    'Suivi post-opératoire',
    'Autre',
  ]

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={horsePortrait} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
            {t('contactTag')}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{info.title}</h4>
              <p className="text-foreground text-sm mb-1">{info.primary}</p>
              <p className="text-muted-foreground text-xs">{info.secondary}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Formulaire de Contact
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contactName')} *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contactEmail')} *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contactPhone')}</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                    placeholder="+49 XXX XXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Sujet *</label>
                  <select 
                    required 
                    value={formData.subject} 
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contactMessage')} *</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all" 
                  placeholder="Décrivez votre demande, les symptômes de votre cheval, ou toute information pertinente..."
                />
              </div>
              <button type="submit" className="w-full gold-accent font-semibold px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                <Send className="w-5 h-5" />
                {t('contactSend')}
              </button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8">
            
            {/* Emergency Box */}
            <div className="p-6 bg-accent/10 rounded-2xl border border-accent/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">Urgences 24h/24</h4>
                  <p className="text-accent font-bold text-lg">+49 511 123 4568</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Pour les situations d'urgence (coliques, fractures, hémorragies), 
                notre équipe est disponible jour et nuit.
              </p>
            </div>

            {/* Appointment Info */}
            <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display font-bold text-foreground">Prendre Rendez-vous</h4>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  Délai moyen pour un rendez-vous: 2-3 jours ouvrés
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  Consultations sur place ou en déplacement
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  Préparez l'historique médical de votre cheval
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  Radiographies et échographies disponibles sur place
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border h-48 bg-card flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent/30 mx-auto mb-2" />
                <p className="text-muted-foreground">Carte interactive</p>
                <p className="text-sm text-muted-foreground">Hanovre, Allemagne</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
