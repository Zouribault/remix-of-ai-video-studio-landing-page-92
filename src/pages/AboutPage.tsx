import { About } from '@/components/About'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative pt-20" role="main">
        <About />
      </main>
      <Footer />
    </div>
  )
}
