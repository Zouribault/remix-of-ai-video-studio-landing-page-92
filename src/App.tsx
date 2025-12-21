import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { Toaster } from './components/ui/sonner'
import Index from './pages/Index'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ExpertisePage from './pages/ExpertisePage'
import AchievementsPage from './pages/AchievementsPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </LanguageProvider>
  )
}
