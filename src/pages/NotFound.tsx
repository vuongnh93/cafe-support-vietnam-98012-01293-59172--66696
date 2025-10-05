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
    </div>
  );
};

export default NotFound;
