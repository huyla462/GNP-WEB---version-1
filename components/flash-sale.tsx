"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Flame } from "lucide-react"

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 3,
    minutes: 21,
    seconds: 59,
  })

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
    <div className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 rounded-full p-2.5 animate-pulse shadow-lg">
              <Flame className="h-6 w-6 md:h-7 md:w-7 text-orange-600" />
            </div>
            <div className="text-white">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">FLASH SALE</h3>
              <p className="text-sm md:text-base font-medium">Giảm đến 40% - Chỉ 7 ngày!</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {[
              { label: "Ngày", value: timeLeft.days },
              { label: "Giờ", value: timeLeft.hours },
              { label: "Phút", value: timeLeft.minutes },
              { label: "Giây", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="bg-white/95 backdrop-blur rounded-lg px-3 py-2 md:px-4 md:py-2.5 min-w-[60px] md:min-w-[70px] text-center shadow-md">
                  <div className="text-xl md:text-2xl font-bold text-gray-800 leading-none">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-600 font-medium mt-1">{item.label}</div>
                </div>
                {index < 3 && <span className="text-white text-xl md:text-2xl font-bold">:</span>}
              </div>
            ))}
          </div>

          <Button
            size="lg"
            onClick={handleRegisterClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap"
          >
            ✨ Đăng ký ngay!
          </Button>
        </div>
      </div>
    </div>
  )
}
