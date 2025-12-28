import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would normally come from a database or CMS
const getArticleData = (id: string) => {
  const articles: Record<string, any> = {
    "1": {
      title: "Lễ khai giảng khóa học Mùa Hè 2025",
      date: "2025-01-15",
      readTime: "5 phút đọc",
      category: "Sự kiện",
      image: "/summer-english-class-opening-ceremony.jpg",
      content: `
        <p>Ngày 15/01/2025, GNP English Academy đã tổ chức Lễ khai giảng khóa học tiếng Anh Mùa Hè 2025 với sự tham gia của hơn 200 học viên và phụ huynh.</p>
        
        <h2>Chương trình đặc sắc</h2>
        <p>Buổi lễ khai giảng diễn ra trong không khí vui tươi, náo nhiệt với nhiều hoạt động thú vị:</p>
        <ul>
          <li>Tiết mục văn nghệ từ học viên</li>
          <li>Trò chơi tương tác bằng tiếng Anh</li>
          <li>Giới thiệu đội ngũ giáo viên và chương trình học</li>
          <li>Giao lưu và kết bạn giữa các học viên</li>
        </ul>
        
        <h2>Khóa học Mùa Hè đặc biệt</h2>
        <p>Khóa học Mùa Hè 2025 của GNP được thiết kế đặc biệt với phương pháp học tập sinh động, kết hợp giữa học và chơi, giúp các em vừa học tiếng Anh hiệu quả vừa có một mùa hè bổ ích.</p>
        
        <p>Các em học viên sẽ được trải nghiệm nhiều hoạt động thú vị như: dã ngoại học tiếng Anh, tham quan bảo tàng, hoạt động ngoại khóa, và các buổi giao lưu với người bản xứ.</p>
        
        <h2>Đăng ký ngay</h2>
        <p>Hiện tại, GNP vẫn đang nhận đăng ký cho các khóa học Mùa Hè. Phụ huynh quan tâm có thể liên hệ hotline: 0286.286.2934 để được tư vấn chi tiết.</p>
      `,
    },
    "3": {
      title: "Học viên GNP đạt IELTS 8.5 sau 6 tháng học",
      date: "2025-01-12",
      readTime: "6 phút đọc",
      category: "Thành tích",
      image: "/student-achievement-ielts-certificate.jpg",
      content: `
        <p>Chúng tôi vô cùng tự hào khi chia sẻ thành tích xuất sắc của học viên Nguyễn Văn A - đạt 8.5 IELTS Overall sau 6 tháng học tập tại GNP English Academy.</p>
        
        <h2>Hành trình chinh phục IELTS</h2>
        <p>Bắt đầu với điểm đầu vào 5.5, Văn A đã kiên trì học tập và vượt qua nhiều thử thách để đạt được mục tiêu 8.5 IELTS. Dưới đây là chia sẻ của em về quá trình học tập:</p>
        
        <blockquote>"Tôi đã rất lo lắng khi bắt đầu khóa học vì nền tảng tiếng Anh còn yếu. Nhưng với sự hướng dẫn tận tình của các thầy cô GNP và phương pháp học tập khoa học, tôi đã dần cải thiện từng kỹ năng một."</blockquote>
        
        <h2>Bí quyết thành công</h2>
        <ul>
          <li><strong>Luyện tập đều đặn:</strong> Học viên dành 2-3 giờ mỗi ngày để luyện tập các kỹ năng</li>
          <li><strong>Tham gia lớp học nghiêm túc:</strong> Không bỏ lỡ bất kỳ buổi học nào</li>
          <li><strong>Làm bài tập về nhà đầy đủ:</strong> Hoàn thành tất cả bài tập được giao</li>
          <li><strong>Tham khảo tài liệu phong phú:</strong> Đọc sách, xem phim, nghe podcast tiếng Anh</li>
          <li><strong>Mock test định kỳ:</strong> Thực hành với đề thi thật để làm quen</li>
        </ul>
        
        <h2>Lời cảm ơn</h2>
        <p>Văn A gửi lời cảm ơn sâu sắc đến đội ngũ giáo viên GNP đã luôn đồng hành và hỗ trợ em trong suốt hành trình chinh phục IELTS.</p>
      `,
    },
    "5": {
      title: "Ưu đãi đặc biệt khóa học IELTS Tết 2025",
      date: "2025-01-14",
      readTime: "3 phút đọc",
      category: "Khuyến mãi",
      image: "/ielts-course-promotion-discount.jpg",
      content: `
        <p>Chào mừng Tết Nguyên Đán 2025, GNP English Academy triển khai chương trình ưu đãi đặc biệt dành cho khóa học IELTS với mức giảm giá lên đến 30%!</p>
        
        <h2>Ưu đãi áp dụng</h2>
        <ul>
          <li><strong>Giảm 30% học phí</strong> cho khóa IELTS 6 tháng</li>
          <li><strong>Giảm 25% học phí</strong> cho khóa IELTS 3 tháng</li>
          <li><strong>Tặng kèm:</strong> Bộ tài liệu IELTS độc quyền trị giá 1.5 triệu</li>
          <li><strong>Miễn phí:</strong> 2 buổi học thử và kiểm tra đầu vào</li>
        </ul>
        
        <h2>Thời gian áp dụng</h2>
        <p>Chương trình chỉ áp dụng từ ngày <strong>15/01/2025 đến 15/02/2025</strong> hoặc cho đến khi đủ số lượng học viên đăng ký.</p>
        
        <h2>Điều kiện tham gia</h2>
        <p>Đăng ký và thanh toán trước ngày 15/02/2025 để được hưởng ưu đãi. Số lượng có hạn, chỉ 50 suất đầu tiên.</p>
        
        <h2>Liên hệ đăng ký</h2>
        <p>Hotline: <strong>0286.286.2934 - 0286.286.2931</strong></p>
        <p>Hoặc đăng ký trực tiếp tại các chi nhánh:</p>
        <ul>
          <li>Chi nhánh 1 (Trụ sở chính): 33B Trần Bình Trọng, phường Bình Lợi Trung, TP.HCM</li>
          <li>Chi nhánh 2: 145 Nguyễn Văn Thương, TP.HCM</li>
          <li>Chi nhánh 3: 134 Nơ Trang Long, TP.HCM</li>
        </ul>
      `,
    },
    "7": {
      title: "5 bí quyết học từ vựng hiệu quả",
      date: "2025-01-13",
      readTime: "7 phút đọc",
      category: "Phương pháp học",
      image: "/vocabulary-learning-methods.jpg",
      content: `
        <p>Học từ vựng là một trong những thử thách lớn nhất khi học tiếng Anh. Dưới đây là 5 bí quyết được chứng minh giúp bạn ghi nhớ từ vựng lâu dài và hiệu quả.</p>
        
        <h2>1. Học từ vựng theo ngữ cảnh</h2>
        <p>Thay vì học từ riêng lẻ, hãy học từ trong câu và ngữ cảnh cụ thể. Điều này giúp bạn hiểu cách sử dụng từ một cách tự nhiên.</p>
        <p><strong>Ví dụ:</strong> Thay vì chỉ học "delighted" = vui mừng, hãy học: "I was delighted to hear the good news."</p>
        
        <h2>2. Sử dụng phương pháp lặp lại ngắt quãng</h2>
        <p>Ôn tập từ vựng theo chu kỳ: sau 1 ngày, 3 ngày, 1 tuần, 2 tuần, 1 tháng. Phương pháp này tận dụng cách não bộ ghi nhớ thông tin.</p>
        
        <h2>3. Tạo liên kết hình ảnh và cảm xúc</h2>
        <p>Kết nối từ vựng với hình ảnh hoặc trải nghiệm cá nhân của bạn. Não bộ ghi nhớ tốt hơn khi có yếu tố cảm xúc.</p>
        
        <h2>4. Thực hành viết và nói</h2>
        <p>Đừng chỉ đọc và nghe. Hãy sử dụng từ vựng mới trong văn viết và hội thoại hàng ngày để củng cố trí nhớ.</p>
        
        <h2>5. Sử dụng công nghệ hỗ trợ</h2>
        <p>Tận dụng các ứng dụng học từ vựng như Anki, Quizlet, hoặc Memrise để ôn tập mọi lúc mọi nơi.</p>
        
        <h2>Kết luận</h2>
        <p>Học từ vựng cần sự kiên trì và phương pháp đúng đắn. Áp dụng 5 bí quyết trên, bạn sẽ thấy sự tiến bộ rõ rệt trong vốn từ vựng của mình.</p>
      `,
    },
  }
  return articles[id] || null
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; id: string }>
}) {
  const { category, id } = await params
  const article = getArticleData(id)

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Header />
        <main className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold">Bài viết không tồn tại</h1>
            <Button asChild>
              <Link href="/tin-tuc">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại tin tức
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="py-8 md:py-16">
        <article className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/tin-tuc">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại tin tức
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                {article.category}
              </span>
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl">{article.title}</h1>
            <div className="mb-8 flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(article.date).toLocaleDateString("vi-VN")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{article.readTime}</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Chia sẻ
              </Button>
            </div>

            {/* Featured Image */}
            <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: "1.8",
              }}
            />

            {/* CTA Section */}
            <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground">
              <h3 className="mb-4 text-2xl font-bold">Quan tâm đến khóa học của chúng tôi?</h3>
              <p className="mb-6 text-primary-foreground/90">Đăng ký ngay để nhận tư vấn chi tiết và ưu đãi đặc biệt</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/#dang-ky-tu-van">Đăng ký tư vấn</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <Link href="/khoa-hoc">Xem khóa học</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
