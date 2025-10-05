import { useState } from "react";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Home, 
  FileText, 
  Crown, 
  ShoppingBag, 
  Share2, 
  Edit3, 
  Plus,
  User,
  ChevronDown,
  Play,
  Youtube,
  Heart,
  MessageCircle,
  Camera,
  Coffee,
  Calendar,
  Eye
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CreatorPage = () => {
  const { username } = useParams();
  const [supportAmount, setSupportAmount] = useState("");
  const [supporterName, setSupporterName] = useState("");
  const [supportMessage, setSupportMessage] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedCoffeeAmount, setSelectedCoffeeAmount] = useState("3");
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  // Mock creator data based on username
  const getCreatorData = (username?: string) => {
    const creators: Record<string, any> = {
      'minhngoc': {
        name: 'Minh Ngọc',
        title: 'Blogger ẩm thực',
        bio: 'Chào mọi người! Mình là Minh Ngọc, một food blogger đam mê khám phá ẩm thực Việt. Hy vọng những chia sẻ của mình sẽ giúp các bạn tìm được những món ăn ngon và quán ăn đáng thử.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
        stats: {
          supporters: 234,
          coffees: '1.2K',
          joinDate: 'Tháng 3, 2024'
        },
        posts: [
          {
            id: 1,
            title: 'Top 10 quán phở ngon nhất Hà Nội',
            description: 'Sau 2 tháng đi ăn thử khắp Hà Nội, mình đã tổng hợp danh sách 10 quán phở ngon nhất...',
            time: '2 ngày trước',
            views: '3.2K',
            likes: 45,
            thumbnail: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=200&fit=crop'
          },
          {
            id: 2,
            title: 'Bí quyết làm bánh mì Sài Gòn tại nhà',
            description: 'Hôm nay mình sẽ chia sẻ cách làm bánh mì Sài Gòn giòn tan, thơm ngon như ngoài hàng...',
            time: '1 tuần trước',
            views: '2.8K',
            likes: 89,
            thumbnail: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?w=400&h=200&fit=crop'
          },
          {
            id: 3,
            title: 'Review 5 quán cafe view đẹp ở Đà Lạt',
            description: 'Đà Lạt không chỉ nổi tiếng với thời tiết mát mẻ mà còn có rất nhiều quán cafe đẹp...',
            time: '2 tuần trước',
            views: '1.9K',
            likes: 67,
            thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=200&fit=crop'
          }
        ],
        recentSupporters: [
          { name: 'Hùng Anh', amount: 3, time: '5 phút trước' },
          { name: 'Thu Hà', amount: 5, time: '1 giờ trước' },
          { name: 'Minh Tuấn', amount: 1, time: '3 giờ trước' }
        ]
      },
      'laovuong': {
        name: 'Lão Vương',
        title: 'Podcast Kinh Doanh',
        bio: 'Chúng ta sẽ cùng nhau mổ xẻ các mô hình kinh doanh cốt lõi, rèn luyện tư duy chiến lược và xây dựng nền tảng vững chắc cho sự nghiệp của bạn.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
        stats: {
          supporters: 456,
          coffees: '2.3K',
          joinDate: 'Tháng 1, 2024'
        },
        posts: [
          {
            id: 1,
            title: 'Bài học kinh doanh từ Foxconn',
            description: 'Phân tích chiến lược và bài học từ gã khổng lồ sản xuất',
            time: '2 ngày trước',
            views: '1.2K',
            likes: 45,
            thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop'
          },
          {
            id: 2,
            title: 'Chiến lược đàm phán thành công',
            description: 'Bí quyết đàm phán để đạt được thỏa thuận tốt nhất',
            time: '1 tuần trước',
            views: '856',
            likes: 23,
            thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop'
          }
        ],
        recentSupporters: [
          { name: 'Anh Minh', amount: 2, time: '10 phút trước' },
          { name: 'Hương Lan', amount: 1, time: '2 giờ trước' }
        ]
      }
    };

    return creators[username || ''] || creators['minhngoc'];
  };

  const creatorData = getCreatorData(username);

  const handleSupport = () => {
    console.log("Supporting with amount:", supportAmount);
    // Handle support logic
  };

  const handleCoffeeSupport = () => {
    const amount = selectedCoffeeAmount === "1" ? "25.000₫" : 
                   selectedCoffeeAmount === "3" ? "75.000₫" : "125.000₫";
    console.log("Supporting with coffee amount:", amount);
    // Handle coffee support logic
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Creator Profile */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={creatorData.avatar} alt={creatorData.name} />
                    <AvatarFallback>{creatorData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-foreground mb-2">{creatorData.name}</h1>
                    <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {creatorData.title}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {creatorData.bio}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{creatorData.stats.supporters} supporters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{creatorData.stats.coffees} cà phê</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{creatorData.stats.joinDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Tabs */}
            <div className="flex gap-4 border-b border-border">
              <Button variant="default" className="rounded-b-none">
                Home
              </Button>
              <Button variant="outline" className="rounded-b-none">
                Posts ({creatorData.posts.length})
              </Button>
            </div>

            {/* Recent Posts */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Bài viết gần đây</h2>
              
              {creatorData.posts.map((post: any) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-48 h-32 object-cover"
                      />
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{post.time}</span>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Supporters */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Người ủng hộ gần đây</h2>
                <div className="space-y-3">
                  {creatorData.recentSupporters.map((supporter: any, index: number) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{supporter.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{supporter.time}</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: supporter.amount }).map((_, i) => (
                            <Coffee key={i} className="w-4 h-4 text-secondary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <Link href="/">
                    <Button variant="ghost" size="sm">
                      Về trang chủ
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Support Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Buy Coffee */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Mua cà phê cho {creatorData.name}
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="coffee-amount"
                          value="1"
                          checked={selectedCoffeeAmount === "1"}
                          onChange={(e) => setSelectedCoffeeAmount(e.target.value)}
                          className="text-secondary"
                        />
                        <span className="text-foreground">1 cà phê - 25.000₫</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="coffee-amount"
                          value="3"
                          checked={selectedCoffeeAmount === "3"}
                          onChange={(e) => setSelectedCoffeeAmount(e.target.value)}
                          className="text-secondary"
                        />
                        <span className="text-foreground">3 cà phê - 75.000₫</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="coffee-amount"
                          value="5"
                          checked={selectedCoffeeAmount === "5"}
                          onChange={(e) => setSelectedCoffeeAmount(e.target.value)}
                          className="text-secondary"
                        />
                        <span className="text-foreground">5 cà phê - 125.000₫</span>
                      </label>
                    </div>

                    <Button 
                      onClick={handleCoffeeSupport}
                      className="w-full bg-gradient-coffee hover:opacity-90"
                      size="lg"
                    >
                      Ủng hộ ngay
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Hỗ trợ qua MoMo, ZaloPay, hoặc thẻ
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Supporters Duplicate */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Người ủng hộ gần đây</h2>
                  <div className="space-y-3">
                    {creatorData.recentSupporters.map((supporter: any, index: number) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{supporter.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{supporter.time}</span>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: supporter.amount }).map((_, i) => (
                              <Coffee key={i} className="w-4 h-4 text-secondary" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatorPage;
