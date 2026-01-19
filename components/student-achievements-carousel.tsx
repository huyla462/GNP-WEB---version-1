"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

const achievements = [
  {
    name: "Nguyễn Minh Anh",
    achievement: "IELTS 8.5",
    school: "Đại học Ngoại Thương",
    image: "/happy-student-with-certificate.jpg",
  },
  {
    name: "Trần Hoàng Long",
    achievement: "TOEIC 990/990",
    school: "Đại học Kinh Tế TP.HCM",
    image: "/male-student-success.jpg",
  },
  {
    name: "Lê Thị Hương",
    achievement: "Cambridge C2",
    school: "Đại học KHXH & NV",
    image: "/female-student-achievement.jpg",
  },
  {
    name: "Phạm Quốc Bảo",
    achievement: "IELTS 8.0",
    school: "Đại học Kinh Tế Kỹ Thuật",
    image: "/happy-student-with-certificate.jpg",
  },
  {
    name: "Nguyễn Thị Linh",
    achievement: "TOEIC 950",
    school: "Trường Đại học FPT",
    image: "/female-student-achievement.jpg",
  },
]

export function StudentAchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
    setIsAutoPlaying(false)
  }

  const getVisibleMembers = () => {
    const members = []
    const count = 3 // Always show 3 cards
    for (let i = 0; i < count; i++) {
      members.push(achievements[(currentIndex + i) % achievements.length])
    }
    return members
  }

  const cardWidth = "w-[calc(33.333%-0.75rem)]" // Equal width for 3 cards

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Vinh Danh Học Viên
            </span>
          </h2>
          <p className="text-gray-700 text-sm md:text-lg max-w-3xl mx-auto">
            Những thành tựu xuất sắc của học viên GNP English Academy
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg -ml-3 md:-ml-6 h-10 w-10 md:h-12 md:w-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <div className="overflow-hidden px-4 md:px-8">
            <div className="flex gap-3 md:gap-6 justify-center transition-transform duration-500 ease-in-out">
              {getVisibleMembers().map((student, index) => (
                <div
                  key={`${student.name}-${index}`}
                  className={`flex-shrink-0 ${cardWidth} transition-all duration-500`}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full">
                    <div className="relative h-48 md:h-64 lg:h-80 bg-gradient-to-br from-indigo-100 to-teal-100">
                      <Image
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 md:p-5 text-center bg-gradient-to-b from-indigo-500 to-teal-600 text-white min-h-[100px] flex flex-col justify-center">
                      <h4 className="font-bold text-sm md:text-lg mb-2 line-clamp-2">{student.name}</h4>
                      <div className="bg-yellow-400 text-gray-900 font-bold py-1 px-3 rounded-full inline-block text-xs md:text-sm mb-2 mx-auto">
                        {student.achievement}
                      </div>
                      <p className="text-xs md:text-sm opacity-90">{student.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg -mr-3 md:-mr-6 h-10 w-10 md:h-12 md:w-12"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {achievements.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-orange-600" : "w-2 bg-gray-300"
              }`}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
