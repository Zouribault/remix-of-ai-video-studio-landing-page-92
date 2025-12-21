import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { toast } from 'sonner'
import horsePortrait from '@/assets/horse-portrait.jpg'

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success(t('contactSuccess'))
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={horsePortrait} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
            {t('contactTag')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contactName')}</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contactEmail')}</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contactPhone')}</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contactMessage')}</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none" />
              </div>
              <button type="submit" className="w-full gold-accent font-semibold px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                <Send className="w-5 h-5" />
                {t('contactSend')}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8">
            <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{t('contactAddress')}</h4>
                  <p className="text-muted-foreground">Equine Clinic</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground">contact@dr-nolting.com</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{t('contactPhone')}</h4>
                  <p className="text-muted-foreground">+49 XXX XXXXXXX</p>
                </div>
              </div>
            </div>

            {/* Additional Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden premium-shadow"
            >
              <img 
                src={horsePortrait} 
                alt="Beautiful sport horse"
                className="w-full h-48 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
