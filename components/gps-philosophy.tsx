"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Sparkles } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function GPSPhilosophy() {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver({ threshold: 0.1 })

  const pillars = [
    {
      icon: Brain,
      title: "Growth Mindset",
      titleVi: "Tư Duy Phát Triển",
      shortDesc: "Nền móng của mỗi thành công",
      description: "Phát triển tư duy tích cực, luôn sẵn sàng học hỏi từ những sai lầm và vượt qua thách thức.",
      highlights: [
        "Không ngại sai – Không sợ thất bại",
        "Luôn sẵn sàng học hỏi – Hoàn thiện bản thân",
        "Biết lắng nghe – Tiếp nhận góp ý tích cực",
        "Hình thành thái độ học tập chủ động – Hợp tác – Bền bỉ",
      ],
      accentColor: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-200",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Users,
      title: "People",
      titleVi: "Con Người – Trách Nhiệm Xã Hội",
      shortDesc: "Giá trị của một con người không chỉ nằm ở thành công cá nhân",
      description: "Xây dựng những công dân có trách nhiệm, biết sống vì người khác và đóng góp cho cộng đồng.",
      highlights: [
        "Người biết sống vì người khác",
        "Người có tinh thần trách nhiệm với gia đình và xã hội",
        "Người hiểu rõ: muốn thành công bền vững, phải tạo ra giá trị cho cộng đồng trước",
      ],
      accentColor: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
    },
    {
      icon: Sparkles,
      title: "Skills",
      titleVi: "Kỹ Năng Hội Nhập – Bản Lĩnh Bước Ra Thế Giới",
      shortDesc: "Với trung tâm, tiếng Anh ngày nay không chỉ là một môn học, mà là",
      description: "Phát triển các kỹ năng thực tế giúp học viên thành công trong học tập và cuộc sống toàn cầu.",
      highlights: [
        "Kỹ năng ngôn ngữ",
        "Kỹ năng làm bài kiểm tra – thì cử",
        "Kỹ năng giao tiếp",
        "Kỹ năng thuyết trình",
        "Kỹ năng làm việc nhóm",
        "Kỹ năng quản lý cảm xúc",
        "Nghệ thuật sử dụng ngôn từ",
        "Tư duy phân biệt và xử lý vấn đề",
      ],
      accentColor: "from-orange-500 to-amber-600",
      borderColor: "border-orange-200",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section id="gps-philosophy" className="relative bg-gradient-to-b from-slate-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto mb-20 max-w-3xl text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary uppercase tracking-wider">
            Triết Lý Đào Tạo
          </div>
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
            Training Philosophy <span className="text-primary">G.P.S</span>
          </h2>
          <p className="text-xl font-semibold text-primary mb-6">Growth Mindset – People – Skills</p>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Trong bối cảnh thế giới không ngừng biến động và hội nhập sâu rộng, tiếng Anh ngày nay không chỉ là một môn
            học, mà là{" "}
            <span className="font-semibold text-foreground">
              chia khóa mở ra trí thức, cơ hội và tương lai của thế hệ trẻ
            </span>
            . Tuy nhiên, trung tâm tin rằng:
          </p>
        </div>

        {/* Three Pillars Grid */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 mb-8 sm:mb-16 transition-all duration-700 ${
            cardsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-2 ${pillar.borderColor} ${pillar.bgColor} transition-all duration-500 hover:shadow-lg sm:hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2`}
              >
                {/* Background Accent */}
                <div
                  className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${pillar.accentColor} opacity-10 group-hover:opacity-20 transition-opacity`}
                />

                <CardContent className="relative p-1.5 sm:p-4 lg:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`mb-1.5 sm:mb-3 lg:mb-4 inline-flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-gradient-to-br ${pillar.accentColor} shadow-md sm:shadow-lg flex-shrink-0`}
                  >
                    <IconComponent className="h-4.5 w-4.5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-0.5 sm:mb-2 text-xs sm:text-sm lg:text-2xl font-bold text-foreground line-clamp-2">{pillar.title}</h3>
                  <p className="mb-1.5 sm:mb-2 lg:mb-3 text-xs font-semibold text-primary line-clamp-1">{pillar.titleVi}</p>

                  {/* Short Description */}
                  <p className="mb-1.5 sm:mb-3 lg:mb-4 text-xs sm:text-xs lg:text-sm italic text-muted-foreground border-l-4 border-primary pl-1.5 sm:pl-3 lg:pl-4 line-clamp-2">
                    "{pillar.shortDesc}"
                  </p>

                  {/* Main Description */}
                  <p className="mb-1.5 sm:mb-3 lg:mb-4 text-xs sm:text-xs lg:text-base leading-relaxed text-foreground hidden sm:block line-clamp-2">
                    {pillar.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-0.5 sm:space-y-1.5 lg:space-y-2 flex-grow overflow-hidden">
                    <p className="font-semibold text-xs uppercase tracking-wide text-muted-foreground hidden sm:block">
                      Học viên được rèn luyện để:
                    </p>
                    <ul className="space-y-0.5 sm:space-y-1">
                      {pillar.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-1 sm:gap-2">
                          <span
                            className={`mt-0.5 sm:mt-1 h-1 w-1 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r ${pillar.accentColor} flex-shrink-0`}
                          />
                          <span className="text-xs sm:text-sm text-foreground leading-snug line-clamp-2">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            )
          })}
        </div>

        {/* Summary */}
        <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">Hệ Phương Pháp Đào Tạo G.P.S</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Triết lý G.P.S được hiện thực hóa thông qua hệ thống phương pháp đào tạo hiện đại:
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary mt-0.5">•</span>
                    <span>
                      <strong>Natural Approach</strong> – Tiếp cận tự nhiên, giúp học viên tiếp thu ngôn ngữ như tiếng
                      mẹ đẻ
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary mt-0.5">•</span>
                    <span>
                      <strong>Communicative Language Teaching (CLT)</strong> – Giao tiếp làm trung tâm
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary mt-0.5">•</span>
                    <span>
                      <strong>Task-Based Learning (TBL)</strong> – Học qua nhiệm vụ
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary mt-0.5">•</span>
                    <span>
                      <strong>Project-Based Learning (PBL)</strong> – Học qua dự án, thuyết trình
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary mt-0.5">•</span>
                    <span>
                      <strong>Ngữ pháp ứng dụng</strong> – Học để dùng, không học vet
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-6 border border-primary/10">
                  <p className="font-bold text-primary mb-2">Vai Trò Của Đội Ngũ Giáo Viên</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Giáo viên không chỉ là người truyền đạt kiến thức, mà còn là:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>
                      ✓ <strong>Người truyền cảm hứng</strong>
                    </li>
                    <li>
                      ✓ <strong>Người đồng hành</strong>
                    </li>
                    <li>
                      ✓ <strong>Người định hướng tư duy và nhân cách</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
