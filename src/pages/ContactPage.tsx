import { Contact } from '@/components/Contact'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative pt-20" role="main">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
