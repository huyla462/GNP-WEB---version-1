"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.")
    setFormData({ name: "", phone: "", email: "", course: "", message: "" })
  }

  const branches = [
    {
      name: "Chi nhánh 1 (Trụ sở chính)",
      address: "33B Trần Bình Trọng, phường Bình Lợi Trung, Thành phố Hồ Chí Minh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752921c1ad4ddd%3A0x7c1c3d3b3f5e5e5e!2s33B%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20B%C3%ACnh%20L%E1%BB%A3i%20Trung%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1234567890",
    },
    {
      name: "Chi nhánh 2",
      address: "145 Nguyễn Văn Thương, Thành phố Hồ Chí Minh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzIyLjgiTiAxMDbCsDQxJzIwLjQiRQ!5e0!3m2!1svi!2s!4v1234567890",
    },
    {
      name: "Chi nhánh 3",
      address: "134 Nơ Trang Long, Thành phố Hồ Chí Minh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzIyLjgiTiAxMDbCsDQxJzIwLjQiRQ!5e0!3m2!1svi!2s!4v1234567890",
    },
  ]

  const [selectedBranch, setSelectedBranch] = useState(0)

  return (
    <section id="dang-ky-tu-van" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">Liên hệ & Đăng ký</h2>
          <p className="text-pretty text-lg text-muted-foreground">Đăng ký tư vấn hoặc học thử miễn phí ngay hôm nay</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Đăng ký tư vấn</CardTitle>
              <CardDescription>Điền thông tin và chúng tôi sẽ liên hệ với bạn trong 24h</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Họ và tên *</Label>
                  <Input
                    id="name"
                    placeholder="Nhập họ và tên"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Nhập email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="course">Khóa học quan tâm</Label>
                  <Input
                    id="course"
                    placeholder="VD: IELTS, TOEIC, Giao tiếp..."
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Lời nhắn</Label>
                  <Textarea
                    id="message"
                    placeholder="Mục tiêu học tập và thắc mắc của bạn..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Đăng ký ngay
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin liên hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium mb-3">Địa chỉ các chi nhánh</p>
                    <div className="space-y-2">
                      {branches.map((branch, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedBranch(index)}
                          className={`w-full text-left p-3 rounded-lg transition-all ${
                            selectedBranch === index
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }`}
                        >
                          <p className="font-medium text-sm">{branch.name}</p>
                          <p className="text-xs mt-1">{branch.address}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Hotline</p>
                    <p className="text-sm text-muted-foreground">0286.286.2934 - 0286.286.2931</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">info@gnpenglish.edu.vn</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Giờ làm việc</p>
                    <p className="text-sm text-muted-foreground">
                      Thứ 2 - Thứ 7: 8:00 - 20:00
                      <br />
                      Chủ nhật: 8:00 - 17:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold">Học thử miễn phí</h3>
                <p className="mb-4 text-sm text-primary-foreground/90">
                  Tham gia buổi học thử để trải nghiệm phương pháp giảng dạy và môi trường học tập tại GNP English
                  Academy
                </p>
                <Button variant="secondary" className="w-full">
                  Đăng ký học thử
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-muted">
                  <iframe
                    src={branches[selectedBranch].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
