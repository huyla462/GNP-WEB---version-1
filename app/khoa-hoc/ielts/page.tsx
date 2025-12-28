import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock, Award, CheckCircle2, TrendingUp, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IELTSPage() {
  const highlights = [
    "Giáo viên có chứng chỉ IELTS 8.0+ và kinh nghiệm giảng dạy",
    "Học liệu độc quyền và bài tập thực hành phong phú",
    "Luyện thi theo chiến lược từng band điểm cụ thể",
    "Mock test định kỳ theo chuẩn British Council",
    "Chữa bài chi tiết và feedback cá nhân hóa",
    "Cam kết đầu ra hoặc học lại miễn phí",
  ]

  const courses = [
    {
      name: "IELTS Foundation",
      target: "4.0 - 5.0",
      description: "Xây dựng nền tảng vững chắc cho người mới bắt đầu với IELTS",
      color: "from-emerald-500 to-teal-500",
      duration: "3 tháng",
    },
    {
      name: "IELTS Intermediate",
      target: "5.5 - 6.5",
      description: "Phát triển kỹ năng và chiến thuật làm bài hiệu quả",
      color: "from-blue-500 to-cyan-500",
      duration: "4 tháng",
    },
    {
      name: "IELTS Advanced",
      target: "7.0 - 8.0+",
      description: "Hoàn thiện kỹ năng và đạt band điểm cao cho du học",
      color: "from-purple-500 to-pink-500",
      duration: "3-4 tháng",
    },
  ]

  const skills = [
    { name: "Listening", icon: "🎧", color: "bg-blue-100 text-blue-700" },
    { name: "Reading", icon: "📖", color: "bg-green-100 text-green-700" },
    { name: "Writing", icon: "✍️", color: "bg-purple-100 text-purple-700" },
    { name: "Speaking", icon: "💬", color: "bg-orange-100 text-orange-700" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
                <Trophy className="inline-block w-4 h-4 mr-2" />
                Luyện thi IELTS chuyên sâu
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                IELTS
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                  Chinh Phục Band 7.0+
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Khóa học IELTS toàn diện với phương pháp giảng dạy hiện đại, cam kết đầu ra rõ ràng cho du học và làm
                việc quốc tế.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700"
                  asChild
                >
                  <Link href="/#dang-ky-tu-van">Đăng ký học thử miễn phí</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-transparent"
                >
                  Kiểm tra trình độ IELTS
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/ielts-test-preparation.jpg"
                alt="IELTS Preparation"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Skills */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Luyện thi 4 kỹ năng toàn diện</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl ${skill.color} hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <div className="text-lg font-bold">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 mx-auto mb-3 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">8-12</div>
              <div className="text-sm text-gray-600">Học viên/lớp</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 mx-auto mb-3 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">3-4 tháng</div>
              <div className="text-sm text-gray-600">Thời gian khóa học</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-pink-600" />
              <div className="text-2xl font-bold text-gray-900">4 buổi/tuần</div>
              <div className="text-sm text-gray-600">Tần suất học</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 mx-auto mb-3 text-rose-600" />
              <div className="text-2xl font-bold text-gray-900">Cam kết</div>
              <div className="text-sm text-gray-600">Đầu ra rõ ràng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
              Điểm nổi bật
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-md hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Các khóa học IELTS</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                ></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.name}</h3>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-700 rounded-full text-lg font-bold mb-4">
                    Band {course.target}
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold mb-6">Bắt đầu hành trình chinh phục IELTS ngay hôm nay!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ưu đãi đặc biệt - Tặng 4 buổi học mock test khi đăng ký sớm
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
            <Link href="/#dang-ky-tu-van">Đăng ký ngay</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
