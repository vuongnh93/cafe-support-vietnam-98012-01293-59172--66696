import { Coffee, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-coffee rounded-xl flex items-center justify-center shadow-warm">
            <Coffee className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-coffee bg-clip-text text-transparent">
            Coffee Support
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Tính năng
          </a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
            Cách hoạt động
          </a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Bảng giá
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex" onClick={() => window.location.href = '/auth'}>
            Đăng nhập
          </Button>
          <Button className="bg-gradient-coffee hover:opacity-90 shadow-warm" onClick={() => window.location.href = '/auth'}>
            Tạo trang miễn phí
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
