import { Card } from "@/components/ui/card";

const paymentMethods = [
  {
    name: "VietQR",
    description: "Quét mã thanh toán",
    icon: "🏦",
    popular: true,
  },
  {
    name: "MoMo",
    description: "Ví điện tử",
    icon: "💰",
    popular: true,
  },
  {
    name: "VNPAY",
    description: "Thẻ ATM/Visa",
    icon: "💳",
    popular: false,
  },
  {
    name: "SePay",
    description: "Chuyển khoản",
    icon: "🏧",
    popular: false,
  },
];

const PaymentMethods = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Thanh toán{" "}
            <span className="bg-gradient-coffee bg-clip-text text-transparent">
              siêu nhanh
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tích hợp đầy đủ các phương thức thanh toán phổ biến tại Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {paymentMethods.map((method, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card border-border relative overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {method.popular && (
                <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-coffee text-primary-foreground text-xs font-semibold rounded-full">
                  Phổ biến
                </div>
              )}
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {method.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Nhận tiền trong vòng <span className="font-semibold text-secondary">30 giây</span> sau khi fan thanh toán
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
