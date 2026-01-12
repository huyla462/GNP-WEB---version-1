"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false)
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)

  const courseCategories = [
    { name: "Tiếng Anh Mẫu Giáo (3-6 tuổi)", href: "/khoa-hoc/mau-giao" },
    { name: "Tiếng Anh Mùa Hè 2025", href: "/khoa-hoc/mua-he" },
    { name: "Tiếng Anh Thiếu Niên (7-12 tuổi)", href: "/khoa-hoc/thieu-nien" },
    { name: "Tiếng Anh IELTS", href: "/khoa-hoc/ielts" },
  ]

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Khóa học", href: "/khoa-hoc", hasDropdown: true },
    { name: "Tuyển dụng", href: "/tuyen-dung" },
    { name: "Liên hệ", href: "/lien-he" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/gnp-logo.png" alt="GNP English Academy" width={140} height={48} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.name}
                className="relative group"
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-all hover:text-primary hover:scale-105">
                  {item.name}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-all duration-200 ${
                    coursesDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="py-2">
                    {courseCategories.map((course) => (
                      <Link
                        key={course.name}
                        href={course.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-coral-50 hover:text-coral-600 transition-colors border-l-4 border-transparent hover:border-coral-500"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-foreground/80 transition-all hover:text-primary hover:scale-105"
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
            <Link href="/kiem-tra-trinh-do">Kiểm tra trình độ</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-primary/80 shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/lien-he">Đăng ký tư vấn</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    className="flex w-full items-center justify-between text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {/* Mobile courses submenu */}
                  {mobileCoursesOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-primary/20 pl-4">
                      {courseCategories.map((course) => (
                        <Link
                          key={course.name}
                          href={course.href}
                          className="text-sm text-foreground/70 transition-colors hover:text-primary"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setMobileCoursesOpen(false)
                          }}
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ),
            )}
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/kiem-tra-trinh-do" onClick={() => setMobileMenuOpen(false)}>
                  Kiểm tra trình độ
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/#dang-ky-tu-van" onClick={() => setMobileMenuOpen(false)}>
                  Đăng ký tư vấn
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
