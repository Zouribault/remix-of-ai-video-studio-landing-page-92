import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative" role="main">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
