import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Equipment } from '@/components/Equipment'
import { TrustBadges } from '@/components/TrustBadges'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative" role="main">
        <Hero />
        <About />
        <TrustBadges />
        <Services />
        <Equipment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
