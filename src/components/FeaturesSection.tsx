import { Coffee, Smartphone, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Smartphone,
    title: "Thanh toán Việt Nam",
    description: "VietQR, MoMo, VNPAY, SePay - nhận tiền trong 30 giây",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Thiết lập 5 phút",
    description: "Tạo trang của bạn và bắt đầu nhận hỗ trợ ngay lập tức",
    color: "text-primary",
  },
  {
    icon: Coffee,
    title: "Linh hoạt giá coffee",
    description: "Tùy chỉnh giá từ 10.000₫ - 500.000₫ mỗi ly cà phê",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "An toàn & minh bạch",
    description: "Theo dõi mọi giao dịch, rút tiền 24/7",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Phân tích chi tiết",
    description: "Xem ai hỗ trợ bạn, thu nhập theo ngày/tháng",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Membership tiers",
    description: "Tạo các gói thành viên với quyền lợi riêng",
    color: "text-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mọi thứ bạn cần để{" "}
            <span className="bg-gradient-coffee bg-clip-text text-transparent">
              phát triển
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Công cụ đầy đủ để xây dựng cộng đồng và kiếm thu nhập bền vững
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-coffee flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
