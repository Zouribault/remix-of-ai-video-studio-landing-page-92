import { Achievements } from '@/components/Achievements'
import { Testimonials } from '@/components/Testimonials'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative pt-20" role="main">
        <Achievements />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
