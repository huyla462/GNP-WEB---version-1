"use client"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { BranchesCarousel } from "./branches-carousel"

export function About() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="about" className="bg-gradient-to-b from-white to-orange-50/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isIntersecting ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Về chúng tôi
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">GNP English Academy</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Đồng hành cùng hành trình chinh phục tiếng Anh của bạn với chương trình đào tạo chất lượng cao và đội ngũ
            giảng viên tận tâm.
          </p>
        </div>

        <BranchesCarousel />
      </div>
    </section>
  )
}
