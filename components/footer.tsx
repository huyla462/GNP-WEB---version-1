import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/gnp-logo.png"
                alt="GNP English Academy"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              GNP English Academy - Trung tâm đào tạo tiếng Anh chất lượng cao, đồng hành cùng học viên trên hành trình
              chinh phục tiếng Anh.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-muted-foreground transition-colors hover:text-primary">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="text-muted-foreground transition-colors hover:text-primary">
                  Chương trình học
                </Link>
              </li>
              <li>
                <Link href="/#certificates" className="text-muted-foreground transition-colors hover:text-primary">
                  Chứng chỉ
                </Link>
              </li>
              <li>
                <Link href="/#roadmap" className="text-muted-foreground transition-colors hover:text-primary">
                  Lộ trình học
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 font-semibold">Chính sách</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Quy định học phí
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GNP English Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
