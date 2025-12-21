import { Contact } from '@/components/Contact'
import { FAQ } from '@/components/FAQ'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative pt-20" role="main">
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
