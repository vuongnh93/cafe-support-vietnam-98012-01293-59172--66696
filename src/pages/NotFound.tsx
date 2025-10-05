import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Coffee, Home } from "lucide-react";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-coffee rounded-full flex items-center justify-center">
              <Coffee className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-coffee bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              Oops! Trang không tìm thấy
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-8">
              Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/">
              <Button size="lg" className="w-full bg-gradient-coffee hover:opacity-90">
                <Home className="w-4 h-4 mr-2" />
                Về trang chủ
              </Button>
            </Link>
            
            <div className="flex justify-center space-x-4 text-sm">
              <Link href="/creators" className="text-primary hover:underline">
                Khám phá creators
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/auth" className="text-primary hover:underline">
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Ẩn footer trên mobile */}
      <div className="hidden md:block">
        <div className="bg-muted/30 border-t border-border py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div className="col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-coffee rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-coffee bg-clip-text text-transparent">
                    Coffee Support
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Nền tảng hỗ trợ creator #1 Việt Nam
                </p>
              </div>

              {/* Product */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Sản phẩm</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Tính năng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Bảng giá
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Câu chuyện thành công
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Tài nguyên</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Hướng dẫn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Hỗ trợ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Công ty</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Điều khoản
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Chính sách
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>© 2025 Coffee Support Vietnam. Made with ❤️ for Vietnamese creators.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
