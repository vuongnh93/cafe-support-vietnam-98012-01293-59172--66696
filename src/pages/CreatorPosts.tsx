import { useState } from "react";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Heart,
  Eye,
  Calendar,
  Lock,
  Users,
  Globe,
  Filter,
  Plus,
  Edit,
  Trash2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CreatorPosts = () => {
  const params = useParams();
  const username = (params as any)?.username as string;
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock creator data based on username
  const getCreatorData = (username: string) => {
    if (username === "laovuong") {
      return {
        name: "Lão Vương",
        title: "Podcast Kinh Doanh",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bannerColor: "from-green-600 to-green-800",
        posts: [
          {
            id: 1,
            title: "Foxconn - Quách Đài Minh",
            category: "CÂU CHUYỆN KINH DOANH 1",
            thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=250&fit=crop",
            date: "Oct 05, 2025",
            views: 2,
            likes: 0,
            isPublic: false,
            description: "Video này kể lại câu chuyện về cách ông Quách Đài Minh, người sáng lập Foxconn, đã giành được hợp đồng sản xuất đầu tiên cho Apple."
          },
          {
            id: 2,
            title: "Tesla - Elon Musk's Journey",
            category: "CÂU CHUYỆN KINH DOANH 2",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
            date: "Oct 04, 2025",
            views: 15,
            likes: 8,
            isPublic: false,
            description: "Hành trình từ PayPal đến SpaceX và Tesla của Elon Musk - những bài học về tầm nhìn và sự kiên trì."
          },
          {
            id: 3,
            title: "Amazon - Jeff Bezos Story",
            category: "CÂU CHUYỆN KINH DOANH 3",
            thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
            date: "Oct 03, 2025",
            views: 8,
            likes: 5,
            isPublic: false,
            description: "Câu chuyện về cách Jeff Bezos xây dựng Amazon từ một cửa hàng sách online thành đế chế thương mại điện tử."
          },
          {
            id: 4,
            title: "Khởi nghiệp với 1000$",
            category: "TIPS KINH DOANH",
            thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
            date: "Oct 01, 2025",
            views: 125,
            likes: 23,
            isPublic: true,
            description: "Làm thế nào để bắt đầu kinh doanh với số vốn ít ỏi và tạo ra lợi nhuận bền vững."
          },
          {
            id: 5,
            title: "Bí quyết đàm phán thành công",
            category: "KỸ NĂNG MỀM",
            thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
            date: "Sep 28, 2025",
            views: 89,
            likes: 17,
            isPublic: true,
            description: "Những chiến thuật đàm phán hiệu quả giúp bạn đạt được mục tiêu trong mọi cuộc thương lượng."
          }
        ]
      };
    } else {
      return {
        name: "Minh Ngọc",
        title: "Food Blogger",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        bannerColor: "from-orange-500 to-red-500",
        posts: [
          {
            id: 1,
            title: "Top 10 quán phở ngon nhất Hà Nội",
            category: "REVIEW ẨM THỰC",
            thumbnail: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=250&fit=crop",
            date: "2 ngày trước",
            views: 3200,
            likes: 45,
            isPublic: true,
            description: "Sau 2 tháng thử nghiệm, tôi đã tổng hợp danh sách 10 quán phở ngon nhất Hà Nội."
          },
          {
            id: 2,
            title: "Bí quyết làm bánh mì Sài Gòn tại nhà",
            category: "CÔNG THỨC NẤU ĂN",
            thumbnail: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop",
            date: "1 tuần trước",
            views: 2800,
            likes: 89,
            isPublic: true,
            description: "Chia sẻ công thức làm bánh mì Sài Gòn giòn tan và thơm ngon như ngoài hàng."
          },
          {
            id: 3,
            title: "Review 5 quán cafe view đẹp ở Đà Lạt",
            category: "DU LỊCH ĐÀ LẠT",
            thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop",
            date: "2 tuần trước",
            views: 1900,
            likes: 67,
            isPublic: true,
            description: "Đà Lạt không chỉ nổi tiếng với thời tiết mát mẻ mà còn có nhiều quán cafe view đẹp."
          },
          {
            id: 4,
            title: "Công thức nước chấm bún bò Huế chuẩn vị",
            category: "CÔNG THỨC NẤU ĂN",
            thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
            date: "3 tuần trước",
            views: 45,
            likes: 12,
            isPublic: false,
            description: "Bí quyết pha nước chấm bún bò Huế đậm đà, chua ngọt hài hòa như ở quê nhà."
          },
          {
            id: 5,
            title: "Hướng dẫn làm nem nướng Nha Trang",
            category: "CÔNG THỨC NẤU ĂN",
            thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop",
            date: "1 tháng trước",
            views: 32,
            likes: 8,
            isPublic: false,
            description: "Công thức chi tiết làm nem nướng Nha Trang thơm ngon, dai giòn đúng điệu."
          }
        ]
      };
    }
  };

  const creatorData = getCreatorData(username);
  const publicPosts = creatorData.posts.filter(post => post.isPublic);
  const supporterPosts = creatorData.posts.filter(post => !post.isPublic);
  
  const filteredPosts = selectedFilter === "public" ? publicPosts : 
                       selectedFilter === "supporters" ? supporterPosts : 
                       creatorData.posts;

  const filters = [
    { key: "all", label: "Tất cả", count: creatorData.posts.length },
    { key: "public", label: "Công khai", count: publicPosts.length },
    { key: "supporters", label: "Supporters Only", count: supporterPosts.length }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner Section */}
      <section className={`pt-16 bg-gradient-to-br ${creatorData.bannerColor} relative overflow-hidden`}>
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-6 mb-6">
            <Link href={`/${username}`}>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Trang chủ
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {creatorData.name.toUpperCase()}
              </h1>
              <p className="text-xl text-white/90">
                {creatorData.title.toUpperCase()}
              </p>
            </div>
            <img
              src={creatorData.avatar}
              alt={creatorData.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/30 object-cover"
            />
          </div>
        </div>
        
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 left-8 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute top-16 left-16 w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="absolute top-24 left-24 w-3 h-3 bg-white/40 rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-24 right-24 w-1 h-1 bg-white/20 rounded-full"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Quản lý bài viết</h2>
              <Link href={`/${username}/create-post`}>
                <Button className="bg-gradient-coffee hover:opacity-90">
                  <Plus className="w-4 h-4 mr-2" />
                  Tạo bài viết mới
                </Button>
              </Link>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={selectedFilter === filter.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.key)}
                  className="flex items-center gap-2"
                >
                  {filter.key === "public" && <Globe className="w-4 h-4" />}
                  {filter.key === "supporters" && <Users className="w-4 h-4" />}
                  {filter.key === "all" && <Filter className="w-4 h-4" />}
                  {filter.label} ({filter.count})
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative">
                    {/* Post Thumbnail */}
                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                      {post.isPublic ? (
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <>
                          {/* Blurred background for supporters only */}
                          <div 
                            className="w-full h-full bg-cover bg-center filter blur-sm scale-110"
                            style={{ backgroundImage: `url(${post.thumbnail})` }}
                          ></div>
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="text-2xl font-bold mb-2">BUSINESS PODCAST</div>
                              <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                                <Heart className="w-8 h-8" />
                              </div>
                              <div className="text-lg font-medium">Supporters only</div>
                            </div>
                          </div>
                          {/* Lock icon */}
                          <div className="absolute top-3 right-3">
                            <Lock className="w-5 h-5 text-orange-500" />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Post Content */}
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {post.category}
                      </Badge>
                      
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {post.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} views</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Link href={`/${username}/post-editor/${post.id}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Edit className="w-4 h-4 mr-2" />
                            Chỉnh sửa
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="px-3 text-red-500 hover:text-red-700 hover:border-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  {selectedFilter === "public" && "Chưa có bài viết công khai nào."}
                  {selectedFilter === "supporters" && "Chưa có bài viết dành cho supporters."}
                  {selectedFilter === "all" && "Chưa có bài viết nào."}
                </div>
                <Link href={`/${username}/create-post`}>
                  <Button className="bg-gradient-coffee hover:opacity-90">
                    <Plus className="w-4 h-4 mr-2" />
                    Tạo bài viết đầu tiên
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default CreatorPosts;
