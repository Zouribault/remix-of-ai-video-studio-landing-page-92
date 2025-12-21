'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-2xl font-bold">Dr. Björn Nolting</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">{t('footerPrivacy')}</a>
            <a href="#" className="hover:text-accent transition-colors">{t('footerTerms')}</a>
          </div>
          <div className="text-sm opacity-80">
            © {currentYear} Dr. Björn Nolting. {t('footerRights')}
          </div>
        </div>
      </div>
    </footer>
  )
}
