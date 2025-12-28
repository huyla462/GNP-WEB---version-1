import { Header } from "@/components/header"
import { CoursesShowcase } from "@/components/courses-showcase"
import { Footer } from "@/components/footer"

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CoursesShowcase />
      </main>
      <Footer />
    </div>
  )
}
