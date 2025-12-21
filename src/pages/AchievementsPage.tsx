import { Achievements } from '@/components/Achievements'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative pt-20" role="main">
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
