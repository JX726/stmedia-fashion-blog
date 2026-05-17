import Header from '@/components/header'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Mission from '@/components/mission'
import Services from '@/components/services'
import Process from '@/components/process'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Mission />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
