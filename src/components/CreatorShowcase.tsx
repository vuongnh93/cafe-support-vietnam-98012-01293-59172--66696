import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Users } from "lucide-react";
import { Link } from "react-router-dom";

const creators = [
  {
    id: "minh-ngoc",
    name: "Minh Ngọc",
    category: "Blogger ẩm thực",
    supporters: 234,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Minh",
    totalCoffees: "1.2K",
  },
  {
    id: "tuan-anh",
    name: "Tuấn Anh",
    category: "YouTuber công nghệ",
    supporters: 567,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan",
    totalCoffees: "3.4K",
  },
  {
    id: "linh-chi",
    name: "Linh Chi",
    category: "Podcaster",
    supporters: 189,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linh",
    totalCoffees: "890",
  },
  {
    id: "hoang-nam",
    name: "Hoàng Nam",
    category: "Nhà văn",
    supporters: 423,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hoang",
    totalCoffees: "2.1K",
  },
];

const CreatorShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tham gia cộng đồng{" "}
            <span className="bg-gradient-coffee bg-clip-text text-transparent">
              creators
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hàng ngàn người sáng tạo đang nhận hỗ trợ từ fan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {creators.map((creator, index) => (
            <Link key={index} to={`/creator/${creator.id}`}>
              <Card
                className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card border-border group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-muted group-hover:ring-secondary transition-all">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {creator.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {creator.category}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{creator.supporters}</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary font-semibold">
                      <Coffee className="w-4 h-4" />
                      <span>{creator.totalCoffees}</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-gradient-coffee group-hover:text-primary-foreground group-hover:border-transparent transition-all"
                  >
                    Mua cà phê
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/creators">
            <Button size="lg" variant="outline" className="border-2">
              Xem tất cả creators
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CreatorShowcase;
