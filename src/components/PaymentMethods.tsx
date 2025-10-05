import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto play effect
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= paymentMethods.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= paymentMethods.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? paymentMethods.length - 1 : prevIndex - 1
    );
  };

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

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel container */}
          <div 
            className="overflow-hidden rounded-lg"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 1.2)}%)`,
                width: `${paymentMethods.length * (100 / 1.2)}%`
              }}
            >
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / paymentMethods.length}%` }}
                >
                  <Card
                    className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card border-border relative overflow-hidden group animate-fade-in-up h-full"
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
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {paymentMethods.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-coffee w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
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
