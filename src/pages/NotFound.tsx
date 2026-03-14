import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { pick } from '@/lib/i18n'
import type { Language } from '@/lib/translations'

const copy: Record<Language, { msg: string; back: string }> = {
  de: { msg: 'Seite nicht gefunden', back: 'Zur Startseite' },
  en: { msg: 'Page not found', back: 'Back to home' },
  fr: { msg: 'Page non trouvée', back: "Retour à l'accueil" },
  es: { msg: 'Página no encontrada', back: 'Volver al inicio' },
  pt: { msg: 'Página não encontrada', back: 'Voltar ao início' },
  it: { msg: 'Pagina non trovata', back: 'Torna alla home' },
  no: { msg: 'Siden ble ikke funnet', back: 'Til startsiden' },
  fi: { msg: 'Sivua ei löytynyt', back: 'Takaisin etusivulle' },
  sv: { msg: 'Sidan hittades inte', back: 'Till startsidan' },
  nl: { msg: 'Pagina niet gevonden', back: 'Terug naar home' },
  ru: { msg: 'Страница не найдена', back: 'На главную' },
  zh: { msg: '页面未找到', back: '返回首页' },
  ja: { msg: 'ページが見つかりません', back: 'ホームへ戻る' },
  ar: { msg: 'الصفحة غير موجودة', back: 'العودة إلى الرئيسية' },
}

export default function NotFound() {
  const { language } = useLanguage()
  const c = pick(language, copy)
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">{c.msg}</p>
        <Link to="/" className="gold-accent font-semibold px-6 py-3 rounded-lg">{c.back}</Link>
      </div>
    </div>
  )
}
