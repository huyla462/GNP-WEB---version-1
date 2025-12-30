"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, Target, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-teal-50 py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-secondary/10 to-secondary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div
          ref={ref}
          className={`mx-auto grid max-w-6xl items-center gap-12 transition-all duration-1000 md:grid-cols-2 ${
            isIntersecting ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              🎓 Trung tâm Anh ngữ uy tín
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Nâng tầm tiếng Anh,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                mở rộng tương lai
              </span>
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Chương trình đào tạo tiếng Anh toàn diện cho mọi lứa tuổi - từ giao tiếp cơ bản đến luyện thi chứng chỉ
              quốc tế IELTS, TOEIC, Cambridge.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary/90 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <Link href="/#dang-ky-tu-van">
                  Đăng ký học thử miễn phí
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 bg-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
              >
                <Link href="/khoa-hoc">Khám phá khóa học</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/trangchu-ava.jpg"
                alt="ảnh trang chủ GNP"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-2xl">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Học viên tin tưởng</div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Giảng viên chuyên nghiệp",
              desc: "Đội ngũ giáo viên chứng chỉ quốc tế",
              color: "from-blue-500 to-blue-600",
              delay: "delay-100",
            },
            {
              icon: Target,
              title: "Lộ trình cá nhân hóa",
              desc: "Học theo trình độ và mục tiêu",
              color: "from-green-500 to-green-600",
              delay: "delay-200",
            },
            {
              icon: GraduationCap,
              title: "Chuẩn khung CEFR",
              desc: "Công nhận toàn cầu",
              color: "from-purple-500 to-purple-600",
              delay: "delay-300",
            },
            {
              icon: Award,
              title: "Cam kết đầu ra",
              desc: "Bảo đảm chất lượng học tập",
              color: "from-orange-500 to-orange-600",
              delay: "delay-[400ms]",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                isIntersecting ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } ${feature.delay}`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg transition-transform group-hover:scale-110`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
