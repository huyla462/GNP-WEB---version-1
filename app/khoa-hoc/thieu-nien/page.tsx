import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock, Award, CheckCircle2, Target, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeenEnglishPage() {
  const highlights = [
    "Giáo trình Cambridge English for Schools",
    "Phát triển tư duy phản biện bằng tiếng Anh",
    "Luyện thi chứng chỉ Cambridge KET, PET, FCE",
    "Học tập tương tác với công nghệ hiện đại",
    "Dự án nhóm và thuyết trình chuyên sâu",
    "Chuẩn bị cho kỳ thi THPT Quốc gia",
  ]

  const levels = [
    {
      level: "Level 1-2",
      title: "Foundation",
      description: "Xây dựng nền tảng vững chắc về ngữ pháp, từ vựng và kỹ năng giao tiếp cơ bản",
      color: "from-blue-500 to-indigo-500",
      target: "Cambridge KET",
    },
    {
      level: "Level 3-4",
      title: "Intermediate",
      description: "Phát triển kỹ năng giao tiếp và viết học thuật, mở rộng vốn từ vựng chuyên sâu",
      color: "from-indigo-500 to-purple-500",
      target: "Cambridge PET",
    },
    {
      level: "Level 5-6",
      title: "Upper-Intermediate",
      description: "Hoàn thiện 4 kỹ năng, tự tin giao tiếp trong nhiều tình huống phức tạp",
      color: "from-purple-500 to-pink-500",
      target: "Cambridge FCE",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Target className="inline-block w-4 h-4 mr-2" />
                Dành cho học sinh 7-12 tuổi
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Tiếng Anh
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Thiếu Niên
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Chương trình tiếng Anh toàn diện cho học sinh THCS, kết hợp học tập và luyện thi chứng chỉ quốc tế
                Cambridge.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <Link href="/#dang-ky-tu-van">Đăng ký học thử miễn phí</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Kiểm tra trình độ
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/teenagers-studying-ielts-english-in-modern-classro.jpg"
                alt="Thiếu niên học tiếng Anh"
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
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 mx-auto mb-3 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900">12-15</div>
              <div className="text-sm text-gray-600">Học viên/lớp</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 mx-auto mb-3 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">9-12 tháng</div>
              <div className="text-sm text-gray-600">Mỗi cấp độ</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">3 buổi/tuần</div>
              <div className="text-sm text-gray-600">Tần suất học</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 mx-auto mb-3 text-pink-600" />
              <div className="text-2xl font-bold text-gray-900">Cambridge</div>
              <div className="text-sm text-gray-600">KET/PET/FCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
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
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Các cấp độ học</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {levels.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                ></div>
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-blue-600 mb-2">{item.level}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold">
                    🎯 {item.target}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold mb-6">Khởi đầu hành trình chinh phục tiếng Anh!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Đăng ký ngay để nhận ưu đãi và tham gia lớp học thử miễn phí
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
            <Link href="/#dang-ky-tu-van">Đăng ký ngay</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
