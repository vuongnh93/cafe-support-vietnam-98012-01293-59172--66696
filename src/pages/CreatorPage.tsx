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
  const params = useParams();
  const username = (params as any)?.username as string;
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
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button variant="default" size="sm" className="bg-secondary text-secondary-foreground">
              Home
            </Button>
            <Button variant="outline" size="sm" className="text-foreground/80 hover:text-primary">
              Posts ({creatorData.posts.length})
            </Button>
            <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
              Membership
            </Link>
            <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
              Shop
            </Link>
            <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-primary">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Page
            </Button>
            <Button size="sm" className="bg-gradient-coffee">
              <Plus className="w-4 h-4 mr-2" />
              Create
            </Button>
            
            {/* Account Menu */}
            <div className="relative">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-gradient-coffee rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-primary-foreground" />
                </div>
                <ChevronDown className="w-4 h-4" />
              </Button>
              
              {isAccountMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link href={`/${username}`} className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    View my page
                  </Link>
                  <Link href="/creator-dashboard" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Dashboard
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    My account
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Refer a creator
                  </Link>
                  <hr className="my-2 border-border" />
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors text-red-500">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Header Section */}
      <section className="pt-16 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                {creatorData.name.toUpperCase()} {creatorData.title.toUpperCase()}
              </h1>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-4 rounded-none">
                SUBSCRIBE
              </Button>
            </div>
            
            <div className="absolute top-8 right-8">
              <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <img
                  src={creatorData.avatar}
                  alt={creatorData.name}
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute top-20 left-32 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-32 left-16 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-32 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-32 right-16 w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-foreground">About {creatorData.name}</h2>
                  <Button variant="ghost" size="sm">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {creatorData.bio}
                </p>
              </CardContent>
            </Card>


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
                    Support {creatorData.name}
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
