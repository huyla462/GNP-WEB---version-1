"use client"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Users, Award, Building2, Globe } from "lucide-react"

export function StatsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  const stats = [
    { icon: Users, value: "5000+", label: "Học viên", gradient: "from-blue-400 to-blue-500" },
    { icon: Award, value: "100+", label: "Học viên IELTS 7.0+", gradient: "from-orange-400 to-orange-500" },
    { icon: Building2, value: "5+", label: "Năm hoạt động", gradient: "from-green-400 to-green-500" },
    { icon: Globe, value: "3+", label: "Trung tâm quốc tế", gradient: "from-purple-400 to-purple-500" },
  ]

  return (
    <section className="bg-gradient-to-br from-orange-600 to-orange-500 py-20 text-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto grid max-w-5xl gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center transition-all duration-700 ${
                isIntersecting ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${stat.gradient} shadow-xl`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="mb-2 text-4xl font-bold">{stat.value}</div>
              <div className="text-orange-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
