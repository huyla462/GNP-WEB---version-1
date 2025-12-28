"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, MessageSquare, Target, TrendingUp } from "lucide-react"
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
              src="/modern-english-classroom-with-students.jpg"
              alt="Lớp học GNP"
              width={400}
              height={300}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-semibold">Lớp học hiện đại</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/happy-students-learning-english.jpg"
              alt="Học viên GNP"
              width={400}
              height={300}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-semibold">Học viên tích cực</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/english-teacher-teaching-in-modern-classroom.jpg"
              alt="Giảng viên GNP"
              width={400}
              height={300}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-semibold">Giảng viên chuyên nghiệp</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-16 max-w-4xl">
          <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">
                Sứ mệnh & Tầm nhìn
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-foreground/80">
                GNP English Academy được thành lập với sứ mệnh cung cấp nền tảng giáo dục tiếng Anh toàn diện, hiện đại
                và hiệu quả cho mọi đối tượng học viên tại Việt Nam.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Chúng tôi hướng đến việc trở thành trung tâm tiếng Anh hàng đầu, nơi học viên không chỉ học ngôn ngữ mà
                còn phát triển tư duy, kỹ năng và tự tin để vươn ra thế giới.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="mb-12 text-center text-3xl font-bold">Đối tượng học viên</h3>
          <div ref={gridRef} className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Trẻ em",
                desc: "Chương trình Phonics và Cambridge cho trẻ từ 4-12 tuổi, xây dựng nền tảng vững chắc từ sớm.",
                gradient: "from-blue-500 to-blue-600",
                delay: "",
              },
              {
                icon: Target,
                title: "Học sinh - Sinh viên",
                desc: "Luyện thi các chứng chỉ quốc tế KET, PET, IELTS, TOEIC để phục vụ học tập và thi cử.",
                gradient: "from-green-500 to-green-600",
                delay: "delay-100",
              },
              {
                icon: TrendingUp,
                title: "Người đi làm",
                desc: "Tiếng Anh giao tiếp, email công sở, thuyết trình và phỏng vấn cho môi trường làm việc chuyên nghiệp.",
                gradient: "from-orange-500 to-orange-600",
                delay: "delay-200",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className={`group border-0 shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                  gridVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } ${item.delay}`}
              >
                <CardContent className="p-8">
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform group-hover:scale-110`}
                  >
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold">{item.title}</h4>
                  <p className="leading-relaxed text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <Card className="border-0 bg-white shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="mb-8 text-center text-3xl font-bold">Phương pháp giảng dạy</h3>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    icon: MessageSquare,
                    title: "Giao tiếp thực tế",
                    desc: "Ứng dụng ngay vào các tình huống thực tế hàng ngày",
                    color: "text-blue-500",
                  },
                  {
                    icon: Target,
                    title: "Thực hành tích cực",
                    desc: "Luyện tập 4 kỹ năng nghe - nói - đọc - viết đồng đều",
                    color: "text-green-500",
                  },
                  {
                    icon: BookOpen,
                    title: "Luyện thi hiệu quả",
                    desc: "Chiến lược và kỹ thuật làm bài thi chứng chỉ quốc tế",
                    color: "text-purple-500",
                  },
                  {
                    icon: TrendingUp,
                    title: "Học tương tác",
                    desc: "Công nghệ hiện đại kết hợp hoạt động nhóm sôi nổi",
                    color: "text-orange-500",
                  },
                ].map((method, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`mt-1 flex-shrink-0 ${method.color}`}>
                      <method.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold">{method.title}</h4>
                      <p className="leading-relaxed text-muted-foreground">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
