import { motion } from 'framer-motion'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage, languages } from '@/contexts/LanguageContext'

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentLang = languages.find(l => l.code === language)

  const navLinks = [
    { path: '/about', label: t('navAbout') },
    { path: '/services', label: t('navServices') },
    { path: '/expertise', label: t('navExpertise') },
    { path: '/achievements', label: t('navAchievements') },
    { path: '/contact', label: t('navContact') },
  ]

  const isHomePage = location.pathname === '/'

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 w-full z-50"
      >
        <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ${
          isScrolled || !isHomePage ? 'glass-navbar' : 'bg-transparent'
        }`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <Link to="/" className="font-display text-2xl font-bold text-white">
                Dr. Nolting
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-accent' 
                      : 'text-white/90 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 glass-effect px-3 py-2 rounded-lg text-white">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{currentLang?.flag}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl py-2 w-48 max-h-64 overflow-y-auto z-50">
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                        className={`w-full px-4 py-2 text-left hover:bg-accent/10 flex items-center gap-3 ${language === lang.code ? 'bg-accent/20 text-accent' : 'text-foreground'}`}>
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="hidden sm:block gold-accent font-semibold px-6 py-3 rounded-lg">
                  {t('heroCTA')}
                </Link>
              </motion.div>

              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden glass-effect p-3 rounded-full text-white">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} className="fixed top-0 right-0 h-full w-72 bg-card/95 backdrop-blur-xl z-40 p-6 pt-20">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium py-2 text-lg ${
                  location.pathname === link.path 
                    ? 'text-accent' 
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}
