import { Services } from '@/components/Services'
import { FAQ } from '@/components/FAQ'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative pt-20" role="main">
        <Services />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
