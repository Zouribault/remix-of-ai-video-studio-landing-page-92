import { LanguageProvider } from './contexts/LanguageContext'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <main className="relative" role="main">
          <section id="hero" aria-label="Hero section">
            <Hero />
          </section>
          <section id="about" aria-label="About section">
            <About />
          </section>
          <section id="services" aria-label="Services section">
            <Services />
          </section>
          <section id="contact" aria-label="Contact section">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
