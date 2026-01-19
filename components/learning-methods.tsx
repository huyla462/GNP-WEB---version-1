"use client"

import { BookOpen, Users, Target, Lightbulb, Globe } from "lucide-react"

const methods = [
  {
    icon: BookOpen,
    title: "Natural Approach",
    description: "Tiếp cận tự nhiên, giúp học viên tiếp thu ngôn ngữ như tiếng mẹ đẻ",
  },
  {
    icon: Users,
    title: "Communicative Language Teaching (CLT)",
    description: "Giao tiếp làm trung tâm - Phát triển kỹ năng giao tiếp thực tế",
  },
  {
    icon: Target,
    title: "Task-Based Learning (TBL)",
    description: "Học qua nhiệm vụ - Thực hành ngôn ngữ qua các bài tập có mục đích",
  },
  {
    icon: Lightbulb,
    title: "Project-Based Learning (PBL)",
    description: "Học qua dự án, thuyết trình - Phát triển kỹ năng tư duy và sáng tạo",
  },
  {
    icon: Globe,
    title: "Ngữ Pháp Ứng Dụng",
    description: "Học để dùng, không học vet - Ứng dụng ngôn ngữ trong thực tế",
  },
]

export function LearningMethods() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Phương Pháp Học Tập</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            GNP English Academy áp dụng các phương pháp giảng dạy tiên tiến, kết hợp lý thuyết và thực hành để giúp học viên phát triển toàn diện
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {methods.map((method, index) => {
            const Icon = method.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-lg border border-gray-200 p-4 hover:border-orange-500 hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-center font-bold text-slate-900 mb-2 text-xs md:text-sm">{method.title}</h3>
                <p className="text-center text-gray-600 text-xs leading-relaxed">{method.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
