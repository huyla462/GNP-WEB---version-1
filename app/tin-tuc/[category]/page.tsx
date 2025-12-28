import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Sample data (in real app, this would come from database)
const allNews = {
  "su-kien": {
    name: "Sự kiện",
    articles: [
      {
        id: 1,
        title: "VIỆT NAM VÔ ĐỊCH!",
        description: "QUÁ TỰ HÀO RỒI VIỆT NAM ƠI!",
        date: "2025-12-19",
        time: "12:02 AM",
        image: "/summer-english-class-opening-ceremony.jpg",
      },
      {
        id: 2,
        title: "Ngày hội Tiếng Anh GNP 2025",
        description: "Sự kiện giao lưu văn hóa và trải nghiệm tiếng Anh sống động cho học viên",
        date: "2025-01-10",
        time: "10:00 AM",
        image: "/english-festival-event.jpg",
      },
      {
        id: 3,
        title: "KIẾN THỨC CŨNG CỐ – ĐỘT PHÁ ĐIỂM SỐ",
        description: "Những lý do bạn nên tăng tốc để đạt được điểm cao vào cuối kỳ thi",
        date: "2025-12-17",
        time: "07:15 AM",
        image: "/english-festival-event.jpg",
      },
      {
        id: 4,
        title: "HỆ THỐNG GIÁO DỤC GNP ĐỒNG HÀNH CÙNG SINH VIÊN HỌC VIÊN CĂN BỘ TP. HỒ...",
        description:
          "Ngày 08/12/2025, Đại hội Chi hội KSC-LUAT nhiệm kỳ 2025 - 2026 (Chi hội thuộc Hội Sinh viên Học viên Cán bộ TP.HCM) đã diễn ra tại...",
        date: "2025-12-13",
        time: "02:55 PM",
        image: "/english-festival-event.jpg",
      },
      {
        id: 5,
        title: "ĐỐI BÓNG GNP SỐI NỖI THAM GIA MÔN BÓNG ĐÁ TẠI ĐẠI HỘI TDTT LIÊN PHƯỜNG...",
        description:
          "Sáng ngày 10/12/2025, trong khuôn khổ Đại hội Thể dục Thể thao Liên phường năm 2025, đội bóng đã thống giáo dục GNP đã ra quân...",
        date: "2025-12-10",
        time: "09:39 PM",
        image: "/english-festival-event.jpg",
      },
    ],
  },
  "thanh-tich": {
    name: "Thành tích",
    articles: [
      {
        id: 1,
        title: "ĐẠI HỘI HỘI DOANH NGHIỆP THÀNH MỸ TÂY LẦN THỨ I - NHIỆM KỲ 2025 – 2030",
        description:
          "Ngày 12/12/2025 vừa qua, Hệ thống Giáo dục GNP đã có mặt tại Khu Du Lịch Tân Cảng để tham gia Đại hội Hội Doanh nghiệp Thành M...",
        date: "2025-12-17",
        time: "07:44 AM",
        image: "/student-achievement-ielts-certificate.jpg",
      },
      {
        id: 2,
        title: "100% học viên lớp IELTS đạt mục tiêu",
        description: "Khóa học IELTS tháng 12 kết thúc với kết quả ấn tượng",
        date: "2025-01-08",
        time: "03:00 PM",
        image: "/successful-ielts-students-class.jpg",
      },
      {
        id: 3,
        title: "DEAR SANTA... (LÁ THƯ GỬI ÔNG GIÁ NOEL)",
        description:
          "Mỗi điều ước nhỏ bé đều xứng được lắng nghe... Hãy cùng GNP gửi gắm ước mơ của của con với ông già Noel và chờ điều kỳ diệu chạm tới!",
        date: "2025-12-13",
        time: "03:09 PM",
        image: "/successful-ielts-students-class.jpg",
      },
      {
        id: 4,
        title: "KIẾN THỨC CŨNG CỐ – ĐỘT PHÁ ĐIỂM SỐ!",
        description: "Giảm 30% học phí khi đăng ký trọn gói đến hết HK2 (05/2026)",
        date: "2025-12-11",
        time: "02:52 PM",
        image: "/successful-ielts-students-class.jpg",
      },
      {
        id: 5,
        title: "CHÚC MỪNG BÀ NGUYỄN THỊ THÚY - GIỮ NHIỆM VỤ TRƯỞNG PHÒNG HÀNH CHÍNH...",
        description:
          "Chiều nay ngày 08/12/2025, ông Phan Ngọc Hóa - Quyền Tổng Giám đốc Công ty Cổ phần Giáo dục GNP đã trao Quyết định giữ nhiệm...",
        date: "2025-12-09",
        time: "05:31 PM",
        image: "/successful-ielts-students-class.jpg",
      },
    ],
  },
  "khuyen-mai": {
    name: "Khuyến mãi",
    articles: [
      {
        id: 1,
        title: "Ưu đãi đặc biệt khóa học IELTS Tết 2025",
        description: "Giảm 30% học phí cho khóa IELTS đăng ký trước Tết Nguyên Đán",
        date: "2025-01-14",
        time: "09:00 AM",
        image: "/ielts-course-promotion-discount.jpg",
      },
      {
        id: 2,
        title: "Tặng tài liệu học tập trị giá 2 triệu đồng",
        description: "Nhận ngay bộ tài liệu độc quyền khi đăng ký khóa học dài hạn",
        date: "2025-01-11",
        time: "02:00 PM",
        image: "/free-study-materials-books.jpg",
      },
    ],
  },
  "phuong-phap-hoc": {
    name: "Phương pháp học",
    articles: [
      {
        id: 1,
        title: "5 bí quyết học từ vựng hiệu quả",
        description: "Những phương pháp được chứng minh giúp ghi nhớ từ vựng lâu dài",
        date: "2025-01-13",
        time: "08:00 AM",
        image: "/vocabulary-learning-methods.jpg",
      },
      {
        id: 2,
        title: "Cách luyện phát âm chuẩn như người bản ngữ",
        description: "Hướng dẫn chi tiết các bước luyện phát âm tiếng Anh chuẩn",
        date: "2025-01-09",
        time: "04:30 PM",
        image: "/pronunciation-practice-speaking.jpg",
      },
    ],
  },
}

export default function CategoryNewsPage({ params }: { params: { category: string } }) {
  const categoryData = allNews[params.category as keyof typeof allNews]

  if (!categoryData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{categoryData.name}</h1>
            <p className="text-lg text-muted-foreground">
              Tất cả bài viết thuộc danh mục {categoryData.name.toLowerCase()}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {categoryData.articles.map((article) => (
              <Link key={article.id} href={`/tin-tuc/${params.category}/${article.id}`}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-xl">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 w-full md:h-auto md:w-48 flex-shrink-0">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col justify-between p-6">
                      <div>
                        <h3 className="mb-2 line-clamp-2 text-lg font-bold group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{article.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>
                          Ngày đăng: {new Date(article.date).toLocaleDateString("vi-VN")} {article.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">1</button>
            <button className="rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-muted">2</button>
            <button className="rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-muted">3</button>
            <button className="rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-muted">4</button>
            <button className="rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-muted">Next</button>
            <button className="rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-muted">Last</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
