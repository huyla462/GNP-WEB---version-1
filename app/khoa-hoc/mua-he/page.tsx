import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Palmtree, Users, Clock, Award, CheckCircle2, Sun, Waves } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SummerEnglishPage() {
  const highlights = [
    "Kết hợp học và vui chơi với các hoạt động ngoại khóa",
    "Camp tiếng Anh với các chủ đề hấp dẫn mỗi tuần",
    "Tổ chức các buổi picnic, dã ngoại bằng tiếng Anh",
    "Dự án nhóm và thuyết trình cuối khóa",
    "Chứng nhận hoàn thành và báo cáo chi tiết",
    "Tặng bộ học liệu và đồ dùng học tập",
  ]

  const weeks = [
    {
      week: "Tuần 1-2",
      theme: "Adventure & Exploration",
      description: "Khám phá thế giới xung quanh qua tiếng Anh với các hoạt động phiêu lưu thú vị",
      color: "from-orange-500 to-red-500",
    },
    {
      week: "Tuần 3-4",
      theme: "Arts & Creativity",
      description: "Phát triển khả năng sáng tạo qua nghệ thuật, âm nhạc và kể chuyện",
      color: "from-purple-500 to-pink-500",
    },
    {
      week: "Tuần 5-6",
      theme: "Science & Nature",
      description: "Khám phá khoa học và thiên nhiên với các thí nghiệm và hoạt động thực tế",
      color: "from-green-500 to-teal-500",
    },
    {
      week: "Tuần 7-8",
      theme: "Global Culture",
      description: "Tìm hiểu văn hóa các nước trên thế giới qua tiếng Anh",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-full text-sm font-semibold">
                <Sun className="inline-block w-4 h-4 mr-2" />
                Chương trình đặc biệt mùa hè 2025
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Summer Camp
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                  Tiếng Anh 2025
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Mùa hè thú vị với chương trình học tiếng Anh kết hợp hoạt động ngoại khóa, giúp trẻ vừa học vừa chơi,
                phát triển toàn diện.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700"
                  asChild
                >
                  <Link href="/#dang-ky-tu-van">Đăng ký Summer Camp</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Xem lịch trình chi tiết
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/happy-students-learning-english.jpg"
                alt="Summer English Camp"
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
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 mx-auto mb-3 text-orange-600" />
              <div className="text-2xl font-bold text-gray-900">15-20</div>
              <div className="text-sm text-gray-600">Học viên/lớp</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 mx-auto mb-3 text-yellow-600" />
              <div className="text-2xl font-bold text-gray-900">8 tuần</div>
              <div className="text-sm text-gray-600">Thời gian khóa học</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-shadow">
              <Palmtree className="w-10 h-10 mx-auto mb-3 text-amber-600" />
              <div className="text-2xl font-bold text-gray-900">5 ngày/tuần</div>
              <div className="text-sm text-gray-600">Lịch học</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 mx-auto mb-3 text-red-600" />
              <div className="text-2xl font-bold text-gray-900">Chứng nhận</div>
              <div className="text-sm text-gray-600">Hoàn thành khóa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
              Điểm nổi bật chương trình
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Themes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Chủ đề theo tuần</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {weeks.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                ></div>
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-orange-600 mb-2">{item.week}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.theme}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-yellow-600 text-white relative overflow-hidden">
        <Waves className="absolute bottom-0 left-0 w-full h-32 opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Sun className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold mb-6">Đăng ký ngay để không bỏ lỡ mùa hè đáng nhớ!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Ưu đãi đặc biệt cho đăng ký sớm - Giảm đến 30%</p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6" asChild>
            <Link href="/#dang-ky-tu-van">Đăng ký Summer Camp 2025</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
