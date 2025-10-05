import { Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/coffee-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-cream opacity-50" />
      
      {/* Coffee beans decoration */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
              <Coffee className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-accent-foreground">
                Nền tảng hỗ trợ creator #1 Việt Nam
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Nhận hỗ trợ từ{" "}
              <span className="bg-gradient-coffee bg-clip-text text-transparent">
                người hâm mộ
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tạo trang miễn phí để fan có thể mời bạn một ly cà phê. 
              Thanh toán dễ dàng qua VietQR, MoMo, VNPAY trong vòng 30 giây.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-coffee hover:opacity-90 shadow-coffee text-lg h-14 px-8"
              >
                Bắt đầu miễn phí
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg h-14 px-8 border-2"
              >
                Xem demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Creators</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Supporters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">5 tỷ+</div>
                <div className="text-sm text-muted-foreground">VNĐ hỗ trợ</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-coffee opacity-20 blur-3xl rounded-3xl" />
            <img
              src={heroImage}
              alt="Vietnamese coffee culture"
              className="relative rounded-3xl shadow-coffee w-full object-cover"
            />
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-warm p-6 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-coffee rounded-xl flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Vừa nhận</div>
                  <div className="text-lg font-bold text-primary">50.000 ₫</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
