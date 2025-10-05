import { useState } from "react";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
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
  Eye,
  Users
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CreatorPageNew = () => {
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
        badge: 'Blogger ẩm thực',
        bio: 'Chào mọi người! Mình là Minh Ngọc, một food blogger đam mê khám phá ẩm thực Việt. Hy vọng những chia sẻ của mình sẽ giúp các bạn tìm được những món ăn ngon và quán ăn đáng thử.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
        backgroundImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&h=1080&fit=crop',
        stats: {
          supporters: 234,
          coffees: '1.2K',
          joinedDate: 'Tháng 3, 2024'
        },
        posts: [
          {
            id: 1,
            title: "Top 10 quán phở ngon nhất Hà Nội",
            description: "Sau 2 tháng đi ăn thử khắp Hà Nội, mình đã tổng hợp danh sách 10 quán phở ngon nhất...",
            time: "2 ngày trước",
            likes: 45,
            isPublic: true,
            thumbnail: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=250&fit=crop"
          },
          {
            id: 2,
            title: "Bí quyết làm bánh mì Sài Gòn tại nhà",
            description: "Hôm nay mình sẽ chia sẻ cách làm bánh mì Sài Gòn giòn tan, thơm ngon như ngoài hàng...",
            time: "1 tuần trước",
            likes: 89,
            isPublic: true,
            thumbnail: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop"
          },
          {
            id: 3,
            title: "Review 5 quán cafe view đẹp ở Đà Lạt",
            description: "Đà Lạt không chỉ nổi tiếng với thời tiết mát mẻ mà còn có rất nhiều quán cafe đẹp...",
            time: "2 tuần trước",
            likes: 67,
            isPublic: true,
            thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop"
          }
        ],
        recentSupporters: [
          { name: "Hùng Anh", time: "5 phút trước", amount: 3 },
          { name: "Thu Hà", time: "1 giờ trước", amount: 5 },
          { name: "Minh Tuấn", time: "3 giờ trước", amount: 1 }
        ]
      },
      'laovuong': {
        name: 'Lão Vương',
        badge: 'Podcast Kinh Doanh',
        bio: 'Chào mọi người! Mình là Lão Vương, một podcaster chuyên về kinh doanh và đầu tư. Hy vọng những chia sẻ của mình sẽ giúp các bạn có thêm kiến thức về kinh doanh.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
        backgroundImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920&h=1080&fit=crop',
        stats: {
          supporters: 456,
          coffees: '2.1K',
          joinedDate: 'Tháng 1, 2024'
        },
        posts: [
          {
            id: 1,
            title: "Foxconn - Quách Đài Minh",
            description: "Video này kể lại câu chuyện về cách ông Quách Đài Minh, người sáng lập Foxconn...",
            time: "2 ngày trước",
            likes: 23,
            isPublic: true,
            thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=250&fit=crop"
          },
          {
            id: 2,
            title: "Tesla - Elon Musk's Journey",
            description: "Hành trình từ PayPal đến SpaceX và Tesla của Elon Musk...",
            time: "1 tuần trước",
            likes: 45,
            isPublic: true,
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop"
          },
          {
            id: 3,
            title: "Amazon - Jeff Bezos Story",
            description: "Câu chuyện về cách Jeff Bezos xây dựng Amazon từ một cửa hàng sách online...",
            time: "2 tuần trước",
            likes: 34,
            isPublic: true,
            thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
          }
        ],
        recentSupporters: [
          { name: "Anh Tuấn", time: "10 phút trước", amount: 5 },
          { name: "Minh Hương", time: "2 giờ trước", amount: 3 },
          { name: "Đức Anh", time: "5 giờ trước", amount: 2 }
        ]
      }
    };
    
    return creators[username || 'minhngoc'] || creators['minhngoc'];
  };

  const creatorData = getCreatorData(username);

  const handleCoffeeSupport = () => {
    console.log('Supporting with:', selectedCoffeeAmount, 'coffees');
    // Handle support logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center filter blur-sm scale-110"
          style={{ 
            backgroundImage: `url(${creatorData.backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Profile Header Card */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <img
                  src={creatorData.avatar}
                  alt={creatorData.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {creatorData.name}
                  </h1>
                  <Badge className="bg-orange-500 text-white mb-4">
                    {creatorData.badge}
                  </Badge>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {creatorData.bio}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{creatorData.stats.supporters} supporters</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Coffee className="w-4 h-4" />
                      <span>{creatorData.stats.coffees} cà phê</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{creatorData.stats.joinedDate}</span>
                    </div>
                  </div>

                  {/* Navigation Tabs */}
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="bg-secondary text-secondary-foreground">
                      Home
                    </Button>
                    <Link href={`/${username}/posts`}>
                      <Button variant="outline" size="sm" className="text-foreground/80 hover:text-primary">
                        Posts ({creatorData.posts.length})
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Recent Posts */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Bài viết gần đây</h2>
                <div className="space-y-6">
                  {creatorData.posts.map((post: any) => (
                    <div key={post.id} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{post.time}</span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Support Widget & Recent Supporters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Support Widget */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Mua cà phê cho {creatorData.name}
                </h2>
                
                <div className="space-y-4">
                  {/* Coffee Selection */}
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="coffee-amount"
                        value="1"
                        checked={selectedCoffeeAmount === "1"}
                        onChange={(e) => setSelectedCoffeeAmount(e.target.value)}
                        className="text-orange-500"
                      />
                      <Coffee className="w-4 h-4" />
                      <span className="text-foreground">1 cà phê - 25.000₫</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="coffee-amount"
                        value="3"
                        checked={selectedCoffeeAmount === "3"}
                        onChange={(e) => setSelectedCoffeeAmount(e.target.value)}
                        className="text-orange-500"
                      />
                      <Coffee className="w-4 h-4" />
                      <span className="text-foreground">3 cà phê - 75.000₫</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="coffee-amount"
                        value="5"
                        checked={selectedCoffeeAmount === "5"}
                        onChange={(e) => setSelectedCoffeeAmount(e.target.value)}
                        className="text-orange-500"
                      />
                      <Coffee className="w-4 h-4" />
                      <span className="text-foreground">5 cà phê - 125.000₫</span>
                    </label>
                  </div>

                  <Button 
                    onClick={handleCoffeeSupport}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
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

            {/* Recent Supporters */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Người ủng hộ gần đây</h2>
                <div className="space-y-4">
                  {creatorData.recentSupporters.map((supporter: any, index: number) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{supporter.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{supporter.time}</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: supporter.amount }).map((_, i) => (
                            <Coffee key={i} className="w-4 h-4 text-orange-500" />
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

      <Footer />
    </div>
  );
};

export default CreatorPageNew;
