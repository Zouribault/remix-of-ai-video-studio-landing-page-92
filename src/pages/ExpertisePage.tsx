import { Expertise } from '@/components/Expertise'
import { Gallery } from '@/components/Gallery'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative pt-20" role="main">
        <Expertise />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
