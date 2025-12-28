import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FlashSale } from "@/components/flash-sale"
import { StatsSection } from "@/components/stats-section"
import { About } from "@/components/about"
import { LearningSpaceCarousel } from "@/components/learning-space-carousel"
import { TeamCarousel } from "@/components/team-carousel"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FlashSale />
        <StatsSection />
        <About />
        <LearningSpaceCarousel />
        <TeamCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
