"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Zap } from "lucide-react"
import Image from "next/image"

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 3,
    minutes: 21,
    seconds: 59,
  })

  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  const currentYear = currentDate.getFullYear()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRegisterClick = () => {
    const contactSection = document.getElementById("dang-ky-tu-van")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/lien-he"
    }
  }

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Promotional Content */}
          <div className="flex flex-col gap-6">
            {/* Header with Month */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative bg-orange-500 rounded-full p-3 shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-orange-400 text-sm font-semibold tracking-wide">KHUYẾN MÃI HẠN CHẾ</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
                  Sale Tháng {currentMonth}/{currentYear}
                </h2>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                Nâng cao kỹ năng tiếng Anh với <span className="text-orange-400">chiết khấu đặc biệt</span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Tham gia các khóa học chất lượng cao của GNP English và nhận ngay ưu đãi lên đến{" "}
                <span className="font-semibold text-orange-400">40%</span>. Cơ hội giới hạn chỉ trong tháng này!
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Kết thúc trong:
              </p>
              <div className="flex gap-2 md:gap-3">
                {[
                  { label: "Ngày", value: timeLeft.days },
                  { label: "Giờ", value: timeLeft.hours },
                  { label: "Phút", value: timeLeft.minutes },
                  { label: "Giây", value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center flex-1">
                    <div className="bg-orange-500/20 border border-orange-500/40 rounded-lg w-full py-2 md:py-3 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-orange-400 leading-none">
                        {String(item.value).padStart(2, "0")}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1.5 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={handleRegisterClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full md:w-auto rounded-lg relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">✨ Đăng ký ngay</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Right: Course Sale Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/gnp-english-course-sale-offer.jpg"
                alt="Khóa học giảm giá GNP English"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

              <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                -40%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
