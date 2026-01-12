"use client"
import Image from "next/image"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function About() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: gridRef, isIntersecting: gridVisible } = useIntersectionObserver({ threshold: 0.1 })

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

        <div
          className={`mx-auto mb-16 grid max-w-6xl gap-6 transition-all duration-700 md:grid-cols-3 ${
            isIntersecting ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } delay-200`}
        >
          <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/gnp-english-33b-tran-binh-trong-branch.jpg"
              alt="Chi nhánh 1 - 33B Trần Bình Trọng"
              width={400}
              height={300}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-semibold text-lg">Chi nhánh 1</p>
              <p className="text-sm">33B Trần Bình Trọng</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/gnp-english-145-nguyen-van-thuong-branch.jpg"
              alt="Chi nhánh 2 - 145 Nguyễn Văn Thương"
              width={400}
              height={300}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-semibold text-lg">Chi nhánh 2</p>
              <p className="text-sm">145 Nguyễn Văn Thương</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/gnp-english-134-no-trang-long-branch.jpg"
              alt="Chi nhánh 3 - 134 Nơ Trang Long"
              width={400}
              height={300}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-semibold text-lg">Chi nhánh 3</p>
              <p className="text-sm">134 Nơ Trang Long</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
