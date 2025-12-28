import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock, Award, CheckCircle2, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PreschoolEnglishPage() {
  const highlights = [
    "Phương pháp giảng dạy qua trò chơi và âm nhạc",
    "Giáo trình chuẩn Cambridge YLE Starters",
    "Lớp học nhỏ, tối đa 12-15 học sinh",
    "Giáo viên có chứng chỉ quốc tế TESOL/CELTA",
    "Trang bị nền tảng phát âm chuẩn từ nhỏ",
    "Phát triển toàn diện 4 kỹ năng Nghe-Nói-Đọc-Viết",
  ]

  const curriculum = [
    {
      title: "Alphabet & Phonics",
      description: "Làm quen với bảng chữ cái và phát âm cơ bản qua các bài hát, trò chơi vui nhộn",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Basic Vocabulary",
      description: "Từ vựng cơ bản về gia đình, màu sắc, động vật, đồ vật quen thuộc",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Simple Sentences",
      description: "Các câu giao tiếp đơn giản hàng ngày phù hợp với lứa tuổi mầm non",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Songs & Stories",
      description: "Học qua các bài hát tiếng Anh và câu chuyện ngắn sinh động, hấp dẫn",
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                <Sparkles className="inline-block w-4 h-4 mr-2" />
                Dành cho trẻ 3-6 tuổi
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Tiếng Anh
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Mẫu Giáo
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Khóa học tiếng Anh cho trẻ mầm non với phương pháp giảng dạy vui nhộn, giúp bé làm quen với tiếng Anh
                một cách tự nhiên và hứng thú.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                  asChild
                >
                  <Link href="/#dang-ky-tu-van">Đăng ký học thử miễn phí</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 bg-transparent"
                >
                  Tải brochure
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/happy-children-learning-english-in-colorful-classr.jpg"
                alt="Trẻ em học tiếng Anh"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 mx-auto mb-3 text-pink-600" />
              <div className="text-2xl font-bold text-gray-900">12-15</div>
              <div className="text-sm text-gray-600">Học viên/lớp</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 mx-auto mb-3 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900">6-9 tháng</div>
              <div className="text-sm text-gray-600">Thời gian khóa học</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">3 buổi/tuần</div>
              <div className="text-sm text-gray-600">Tần suất học</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 mx-auto mb-3 text-amber-600" />
              <div className="text-2xl font-bold text-gray-900">Cambridge</div>
              <div className="text-sm text-gray-600">YLE Starters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Điểm nổi bật
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nội dung chương trình</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Star className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold mb-6">Bắt đầu hành trình tiếng Anh cho bé ngay hôm nay!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Đăng ký ngay để nhận ưu đãi đặc biệt và buổi học thử miễn phí
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
            <Link href="/#dang-ky-tu-van">Đăng ký ngay</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
