import { useParams, Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Users, Heart, Calendar, ArrowLeft, Eye } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Fake data for demo
const creatorsData = {
  "minh-ngoc": {
    name: "Minh Ngọc",
    category: "Blogger ẩm thực",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Minh",
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop",
    bio: "Chào mọi người! Mình là Minh Ngọc, một food blogger đam mê khám phá ẩm thực Việt. Hy vọng những chia sẻ của mình sẽ giúp các bạn tìm được những món ăn ngon và quán ăn đáng thử.",
    supporters: 234,
    totalCoffees: "1.2K",
    memberSince: "Tháng 3, 2024",
    recentSupporters: [
      { name: "Hùng Anh", amount: 3, time: "5 phút trước" },
      { name: "Thu Hà", amount: 5, time: "1 giờ trước" },
      { name: "Minh Tuấn", amount: 1, time: "3 giờ trước" },
    ],
    posts: [
      {
        id: "1",
        slug: "top-10-quan-pho-ha-noi",
        title: "Top 10 quán phở ngon nhất Hà Nội",
        date: "2 ngày trước",
        likes: 45,
        views: 3245,
        preview: "Sau 2 tháng đi ăn thử khắp Hà Nội, mình đã tổng hợp danh sách 10 quán phở ngon nhất...",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=500&fit=crop",
        category: "Review"
      },
      {
        id: "2",
        slug: "bi-quyet-lam-banh-mi",
        title: "Bí quyết làm bánh mì Sài Gòn tại nhà",
        date: "1 tuần trước",
        likes: 89,
        views: 2876,
        preview: "Hôm nay mình sẽ chia sẻ cách làm bánh mì Sài Gòn giòn tan, thơm ngon như ngoài hàng...",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=500&fit=crop",
        category: "Tutorial"
      },
      {
        id: "3",
        slug: "review-cafe-da-lat",
        title: "Review 5 quán cafe view đẹp ở Đà Lạt",
        date: "2 tuần trước",
        likes: 67,
        views: 2103,
        preview: "Đà Lạt không chỉ nổi tiếng với thời tiết mát mẻ mà còn có rất nhiều quán cafe đẹp...",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop",
        category: "Review"
      },
      {
        id: "4",
        slug: "am-thuc-hue",
        title: "Khám phá ẩm thực Huế - Từ bún bò đến cơm hến",
        date: "3 tuần trước",
        likes: 54,
        views: 1892,
        preview: "Ẩm thực Huế tinh tế và đa dạng, hãy cùng mình khám phá những món ăn đặc trưng...",
        image: "https://images.unsplash.com/photo-1559070169-a3077159ee16?w=800&h=500&fit=crop",
        category: "Travel"
      },
      {
        id: "5",
        slug: "mon-an-vat-sai-gon",
        title: "10 món ăn vặt Sài Gòn phải thử một lần",
        date: "1 tháng trước",
        likes: 78,
        views: 2456,
        preview: "Từ bánh tráng trộn đến ốc, Sài Gòn có vô vàn món ăn vặt hấp dẫn...",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=500&fit=crop",
        category: "Street Food"
      },
      {
        id: "6",
        slug: "nau-an-chay",
        title: "Hướng dẫn nấu các món chay ngon đơn giản",
        date: "1 tháng trước",
        likes: 42,
        views: 1567,
        preview: "Ăn chay không còn nhàm chán với những công thức đơn giản này...",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop",
        category: "Cooking"
      }
    ]
  },
  "tuan-anh": {
    name: "Tuấn Anh",
    category: "YouTuber công nghệ",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop",
    bio: "Tech reviewer & enthusiast. Review các sản phẩm công nghệ mới nhất, hướng dẫn sử dụng và chia sẻ tips & tricks.",
    supporters: 567,
    totalCoffees: "3.4K",
    memberSince: "Tháng 1, 2024",
    recentSupporters: [
      { name: "Quang Huy", amount: 5, time: "10 phút trước" },
      { name: "Lan Anh", amount: 3, time: "2 giờ trước" },
    ],
    posts: [
      {
        id: "7",
        slug: "review-iphone-15-pro",
        title: "Review iPhone 15 Pro Max sau 1 tháng sử dụng",
        date: "3 ngày trước",
        likes: 156,
        views: 4521,
        preview: "Đây là những gì mình nghĩ về iPhone 15 Pro Max sau 1 tháng trải nghiệm thực tế...",
        image: "https://images.unsplash.com/photo-1592286927505-2fd1307fb628?w=800&h=500&fit=crop",
        category: "Review"
      },
      {
        id: "8",
        slug: "macbook-air-m3",
        title: "MacBook Air M3 - Đáng mua hay không?",
        date: "1 tuần trước",
        likes: 98,
        views: 3245,
        preview: "So sánh chi tiết MacBook Air M3 với M2 và M1...",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
        category: "Review"
      }
    ]
  },
  "linh-chi": {
    name: "Linh Chi",
    category: "Podcaster",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linh",
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=400&fit=crop",
    bio: "Host của podcast 'Chuyện Đêm Khuya' - nơi mình chia sẻ những câu chuyện về cuộc sống, tình yêu và sự nghiệp.",
    supporters: 189,
    totalCoffees: "890",
    memberSince: "Tháng 5, 2024",
    recentSupporters: [
      { name: "Đức Anh", amount: 2, time: "30 phút trước" },
    ],
    posts: [
      {
        id: "9",
        slug: "podcast-45-vuot-qua-that-bai",
        title: "Podcast #45: Làm sao để vượt qua thất bại",
        date: "1 ngày trước",
        likes: 67,
        views: 1892,
        preview: "Trong tập này, mình nói chuyện với chị Mai Anh về hành trình vượt qua khó khăn...",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop",
        category: "Podcast"
      },
      {
        id: "10",
        slug: "cuoc-song-y-nghia",
        title: "Cuộc sống ý nghĩa là gì?",
        date: "1 tuần trước",
        likes: 45,
        views: 1456,
        preview: "Chia sẻ về quan điểm sống và những bài học từ cuộc đời...",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
        category: "Life"
      }
    ]
  },
  "hoang-nam": {
    name: "Hoàng Nam",
    category: "Nhà văn",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hoang",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=400&fit=crop",
    bio: "Tác giả của các cuốn truyện ngắn về đời sống đô thị. Mình viết về những con người bình thường với những câu chuyện không bình thường.",
    supporters: 423,
    totalCoffees: "2.1K",
    memberSince: "Tháng 2, 2024",
    recentSupporters: [
      { name: "Phương Anh", amount: 5, time: "15 phút trước" },
      { name: "Việt Anh", amount: 3, time: "1 giờ trước" },
    ],
    posts: [
      {
        id: "11",
        slug: "nguoi-la-tren-tau-dien",
        title: "Truyện ngắn: Người lạ trên tàu điện",
        date: "4 ngày trước",
        likes: 123,
        views: 2876,
        preview: "Chiều đó, tôi gặp một người phụ nữ trên tàu điện. Cô ấy có đôi mắt buồn...",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop",
        category: "Truyện ngắn"
      },
      {
        id: "12",
        slug: "ha-noi-mua-thu",
        title: "Hà Nội mùa thu trong tôi",
        date: "2 tuần trước",
        likes: 89,
        views: 2103,
        preview: "Những con phố rải lá vàng, hương cà phê sáng sớm...",
        image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&h=500&fit=crop",
        category: "Tản văn"
      }
    ]
  },
};

const Creator = () => {
  const { creatorId } = useParams();
  const [selectedAmount, setSelectedAmount] = useState("3");
  const [activeTab, setActiveTab] = useState("home");
  
  const creator = creatorId ? creatorsData[creatorId as keyof typeof creatorsData] : null;

  if (!creator) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Creator không tồn tại</h1>
          <Link to="/">
            <Button>Về trang chủ</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-20">
        {/* Cover Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={creator.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Header */}
              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-background shrink-0">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      {creator.name}
                    </h1>
                    <Badge variant="secondary" className="mb-3">
                      {creator.category}
                    </Badge>
                    <p className="text-muted-foreground mb-4">{creator.bio}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold text-foreground">{creator.supporters}</span> supporters
                      </div>
                      <div className="flex items-center gap-2 text-secondary font-semibold">
                        <Coffee className="w-4 h-4" />
                        <span>{creator.totalCoffees}</span> cà phê
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {creator.memberSince}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="w-full">
                  <TabsTrigger value="home" className="flex-1">Home</TabsTrigger>
                  <TabsTrigger value="posts" className="flex-1">Posts ({creator.posts.length})</TabsTrigger>
                </TabsList>

                {/* Home Tab */}
                <TabsContent value="home" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Bài viết gần đây</h2>
                    <div className="space-y-4">
                      {creator.posts.slice(0, 3).map((post) => (
                        <Link key={post.id} to={`/post/${post.slug}`}>
                          <Card className="p-6 bg-card border-border hover:shadow-warm transition-all cursor-pointer">
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-3">{post.preview}</p>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">{post.date}</span>
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <Heart className="w-4 h-4" />
                                <span>{post.likes}</span>
                              </div>
                            </div>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Recent Supporters */}
                  <Card className="p-6 bg-card border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Người ủng hộ gần đây
                    </h3>
                    <div className="space-y-3">
                      {creator.recentSupporters.map((supporter, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-foreground">{supporter.name}</p>
                              <p className="text-xs text-muted-foreground">{supporter.time}</p>
                            </div>
                            <div className="flex items-center gap-1 text-secondary font-semibold">
                              <Coffee className="w-4 h-4" />
                              <span>{supporter.amount}</span>
                            </div>
                          </div>
                          {index < creator.recentSupporters.length - 1 && (
                            <Separator className="mt-3" />
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                {/* Posts Tab */}
                <TabsContent value="posts" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {creator.posts.map((post) => (
                      <Link key={post.id} to={`/post/${post.slug}`}>
                        <Card className="overflow-hidden bg-card border-border hover:shadow-warm transition-all cursor-pointer group">
                          <div className="h-48 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-5">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="secondary" className="text-xs">
                                {post.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{post.date}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {post.preview}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{post.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="w-3 h-3" />
                                <span>{post.likes}</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>

                  {creator.posts.length === 0 && (
                    <Card className="p-12 bg-card border-border text-center">
                      <p className="text-muted-foreground">Chưa có bài viết nào</p>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar - Support Section */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border sticky top-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Mua cà phê cho {creator.name}
                </h3>
                
                <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount} className="mb-6">
                  <div className="space-y-3">
                    {[
                      { value: "1", label: "1 cà phê", price: "25.000₫" },
                      { value: "3", label: "3 cà phê", price: "75.000₫" },
                      { value: "5", label: "5 cà phê", price: "125.000₫" },
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Coffee className="w-4 h-4 text-secondary" />
                              <span className="font-medium">{option.label}</span>
                            </div>
                            <span className="text-muted-foreground text-sm">{option.price}</span>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>

                <Button className="w-full mb-4 bg-gradient-coffee" size="lg">
                  Ủng hộ ngay
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Hỗ trợ qua MoMo, ZaloPay, hoặc thẻ
                </p>
              </Card>

              {/* Recent Supporters */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Người ủng hộ gần đây
                </h3>
                <div className="space-y-3">
                  {creator.recentSupporters.map((supporter, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">{supporter.name}</p>
                          <p className="text-xs text-muted-foreground">{supporter.time}</p>
                        </div>
                        <div className="flex items-center gap-1 text-secondary font-semibold">
                          <Coffee className="w-4 h-4" />
                          <span>{supporter.amount}</span>
                        </div>
                      </div>
                      {index < creator.recentSupporters.length - 1 && (
                        <Separator className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <Link to="/">
            <Button variant="ghost" className="mt-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Về trang chủ
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Creator;
