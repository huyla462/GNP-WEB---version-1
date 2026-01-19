"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

const teamMembers = [
  {
    name: "ThS. Phạm Vũ Phi Hồ",
    position: "Cố Vấn Chuyên Môn Học Thuật",
    image: "/professional-teacher-in-business-attire.jpg",
  },
  {
    name: "ThS. Phùng Nguyễn Hạnh Nguyên",
    position: "Chủ tịch Hội đồng quản trị",
    image: "/professional-female-teacher-in-orange.jpg",
  },
  {
    name: "ThS. Phan Ngọc Hòa",
    position: "Quyền Tổng Giám đốc",
    image: "/professional-male-director.jpg",
  },
  {
    name: "Cô Vũ Thùy Hoài Diệp",
    position: "Giám đốc Điều hành",
    image: "/professional-female-director.png",
  },
  {
    name: "ThS. Nguyễn Thị Thúy",
    position: "Trưởng Phòng Hành Chính Nhân Sự",
    image: "/professional-hr-manager.jpg",
  },
]

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    setIsAutoPlaying(false)
  }

  const getVisibleMembers = () => {
    const members = []
    const count = 3 // Always show 3 cards
    for (let i = 0; i < count; i++) {
      members.push(teamMembers[(currentIndex + i) % teamMembers.length])
    }
    return members
  }

  const cardWidth = "w-[calc(33.333%-0.75rem)]" // Equal width for 3 cards

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-indigo-600">ĐỘI NGŨ GIÁO VIÊN</span>
          </h2>
          <h3 className="text-xl md:text-3xl font-bold text-orange-500 mb-6">CỦA HỆ THỐNG GIÁO DỤC GNP</h3>
          <p className="text-gray-700 text-sm md:text-lg max-w-3xl mx-auto">
            Trái tim của Hệ thống giáo dục GNP là đội ngũ giáo viên chuyên môn cao, giàu kinh nghiệm, tận tâm và nhiệt
            huyết.
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
              {getVisibleMembers().map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className={`flex-shrink-0 ${cardWidth} transition-all duration-500`}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full">
                    <div className="relative h-48 md:h-64 lg:h-80 bg-gradient-to-br from-orange-100 to-gray-100">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <Image src="/images/gnp-logo.png" alt="GNP" width={50} height={16} className="h-4 w-auto" />
                      </div>
                    </div>
                    <div className="p-3 md:p-5 text-center bg-gradient-to-b from-orange-500 to-orange-600 text-white min-h-[80px] md:min-h-[100px] flex flex-col justify-center">
                      <h4 className="font-bold text-sm md:text-lg mb-2 line-clamp-2">{member.name}</h4>
                      <p className="text-xs md:text-sm opacity-90 line-clamp-2">{member.position}</p>
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
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-orange-500" : "w-2 bg-gray-300"
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
