import { useState } from "react";
import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Coffee, 
  Heart, 
  MessageSquare, 
  Share2, 
  Calendar,
  Eye,
  ArrowLeft
} from "lucide-react";
import { toast } from "sonner";

// Fake data for demo
const postsData = {
  "top-10-quan-pho-ha-noi": {
    id: "1",
    title: "Top 10 quán phở ngon nhất Hà Nội",
    coverImage: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1200&h=600&fit=crop",
    category: "Review",
    tags: ["ẩm thực", "hà nội", "phở"],
    publishedDate: "2 ngày trước",
    readTime: "8 phút đọc",
    views: 3245,
    likes: 432,
    shares: 89,
    creator: {
      name: "Minh Ngọc",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Minh",
      bio: "Food blogger đam mê khám phá ẩm thực Việt",
      slug: "minh-ngoc"
    },
    content: `
Sau 2 tháng đi ăn thử khắp các ngõ ngách Hà Nội, mình đã tổng hợp được danh sách 10 quán phở ngon nhất theo đánh giá cá nhân. Mỗi quán đều có điểm đặc biệt riêng, từ nước dùng, thịt bò đến cách phục vụ.

## 1. Phở Thìn - Lò Đúc

Quán phở lâu đời và nổi tiếng nhất Hà Nội. Điểm đặc biệt của Phở Thìn là thịt bò được xào sơ với mỡ hành trước khi cho vào tô phở. Nước dùng trong, ngọt tự nhiên từ xương.

**Địa chỉ:** 13 Lò Đúc, Hoàn Kiếm  
**Giá:** 50,000₫ - 70,000₫  
**Giờ mở cửa:** 6:00 - 10:00, 17:00 - 21:00

## 2. Phở Gia Truyền Bát Đàn

Nằm trong con ngõ nhỏ ở phố cổ, quán phở này giữ được hương vị truyền thống qua nhiều thế hệ. Thịt bò mềm, tái vừa phải, ăn kèm với quẩy giòn rất ngon.

**Địa chỉ:** 49 Bát Đàn, Hoàn Kiếm  
**Giá:** 45,000₫ - 65,000₫  
**Giờ mở cửa:** 6:30 - 10:30, 17:30 - 21:30

## 3. Phở Suông - Hàng Gà

Phở Suông nổi tiếng với nước dùng đậm đà, thơm mùi thảo quả và hồi. Thịt bò luôn tươi ngon, gân giòn dai. Không gian quán tuy nhỏ nhưng luôn đông khách.

**Địa chỉ:** 24 Hàng Gà, Hoàn Kiếm  
**Giá:** 50,000₫ - 75,000₫  
**Giờ mở cửa:** 6:00 - 11:00

## 4. Phở 10 Lý Quốc Sư

Một trong những quán phở được khách Tây yêu thích nhất. Nước dùng vừa miệng, không quá ngọt. Quán sạch sẽ, phục vụ nhanh nhẹn.

**Địa chỉ:** 10 Lý Quốc Sư, Hoàn Kiếm  
**Giá:** 60,000₫ - 80,000₫  
**Giờ mở cửa:** 6:00 - 22:00

## 5. Phở Vui - Nguyễn Chí Thanh

Dù nằm xa khu phố cổ nhưng Phở Vui vẫn luôn đông khách nhờ chất lượng ổn định. Điểm cộng là quán rộng rãi, thoáng mát.

**Địa chỉ:** 225 Nguyễn Chí Thanh, Đống Đa  
**Giá:** 45,000₫ - 65,000₫  
**Giờ mở cửa:** 6:00 - 22:00

## Kết luận

Mỗi quán phở đều có hương vị riêng, không thể nói quán nào ngon nhất mà chỉ có thể nói quán nào phù hợp với khẩu vị của bạn. Hãy thử hết cả 10 quán để tìm ra quán phở yêu thích của riêng mình nhé!

Nếu các bạn thích bài viết này, đừng quên ủng hộ mình một ly cà phê để mình có động lực tiếp tục review thêm nhiều quán ngon nữa nhé! ☕
    `,
    relatedPosts: [
      {
        slug: "bi-quyet-lam-banh-mi",
        title: "Bí quyết làm bánh mì Sài Gòn tại nhà",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
        date: "1 tuần trước"
      },
      {
        slug: "review-cafe-da-lat",
        title: "Review 5 quán cafe view đẹp ở Đà Lạt",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
        date: "2 tuần trước"
      }
    ]
  }
};

const commentsData = [
  {
    id: 1,
    author: "Hùng Anh",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hung",
    content: "Cảm ơn bạn vì bài review chi tiết! Mình đã thử Phở Thìn rồi và thật sự rất ngon!",
    time: "2 giờ trước",
    likes: 12
  },
  {
    id: 2,
    author: "Thu Hà",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ThuHa",
    content: "Phở Bát Đàn là phở yêu thích của mình từ nhỏ đến giờ. Hương vị không đổi qua bao nhiêu năm 😊",
    time: "5 giờ trước",
    likes: 8
  },
  {
    id: 3,
    author: "Minh Tuấn",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan",
    content: "Bạn nên thử thêm Phở Sướng ở Tây Hồ nữa, cũng rất ngon đấy!",
    time: "1 ngày trước",
    likes: 5
  }
];

const PostDetail = () => {
  const { postSlug } = useParams();
  const [selectedAmount, setSelectedAmount] = useState("3");
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  
  const post = postSlug ? postsData[postSlug as keyof typeof postsData] : null;

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Đã bỏ thích" : "Đã thích bài viết!");
  };

  const handleShare = () => {
    toast.success("Đã copy link bài viết!");
  };

  const handleComment = () => {
    if (!comment.trim()) {
      toast.error("Vui lòng nhập nội dung bình luận!");
      return;
    }
    toast.success("Đã đăng bình luận!");
    setComment("");
  };

  const handleSupport = () => {
    toast.success("Cảm ơn bạn đã ủng hộ!");
  };

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Bài viết không tồn tại</h1>
          <Link to="/">
            <Button>Về trang chủ</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 mt-16">
        {/* Cover Image */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Post Header */}
              <Card className="p-8 bg-card border-border">
                {/* Tags & Category */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">#{tag}</Badge>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishedDate}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{post.views.toLocaleString()} lượt xem</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg mb-6">
                  <Link to={`/creator/${post.creator.slug}`}>
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-secondary/20 hover:ring-secondary transition-all cursor-pointer">
                      <img src={post.creator.avatar} alt={post.creator.name} />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link to={`/creator/${post.creator.slug}`}>
                      <h3 className="font-semibold text-foreground hover:text-secondary transition-colors cursor-pointer">
                        {post.creator.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{post.creator.bio}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pb-6 border-b border-border">
                  <Button 
                    variant={isLiked ? "default" : "outline"} 
                    size="sm"
                    onClick={handleLike}
                    className={isLiked ? "bg-red-500 hover:bg-red-600" : ""}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                    {post.likes + (isLiked ? 1 : 0)}
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {commentsData.length}
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Chia sẻ
                  </Button>
                </div>

                {/* Post Content */}
                <div className="prose prose-lg max-w-none mt-8">
                  <div className="text-foreground leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
                </div>
              </Card>

              {/* Comments Section */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Bình luận ({commentsData.length})
                </h3>

                {/* Add Comment */}
                <div className="mb-6">
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Viết bình luận của bạn..."
                    rows={3}
                    className="mb-3"
                  />
                  <div className="flex justify-end">
                    <Button size="sm" onClick={handleComment}>
                      Đăng bình luận
                    </Button>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Comments List */}
                <div className="space-y-6">
                  {commentsData.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-muted shrink-0">
                        <img src={comment.avatar} alt={comment.author} />
                      </div>
                      <div className="flex-1">
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-1">
                            {comment.author}
                          </h4>
                          <p className="text-sm text-foreground">{comment.content}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>{comment.time}</span>
                          <button className="hover:text-foreground transition-colors">
                            Thích ({comment.likes})
                          </button>
                          <button className="hover:text-foreground transition-colors">
                            Trả lời
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Related Posts */}
              {post.relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Bài viết liên quan
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {post.relatedPosts.map((relatedPost) => (
                      <Card 
                        key={relatedPost.slug} 
                        className="overflow-hidden bg-card border-border hover:shadow-warm transition-all cursor-pointer"
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {relatedPost.date}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Support Card */}
              <Card className="p-6 bg-card border-border sticky top-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-secondary/20 mx-auto mb-4">
                    <img src={post.creator.avatar} alt={post.creator.name} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Ủng hộ {post.creator.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Mua cà phê cho tác giả nếu bạn thích bài viết này
                  </p>
                </div>

                <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount} className="mb-6">
                  <div className="space-y-3">
                    {[
                      { value: "1", label: "1 cà phê", price: "25.000₫" },
                      { value: "3", label: "3 cà phê", price: "75.000₫" },
                      { value: "5", label: "5 cà phê", price: "125.000₫" },
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                        <RadioGroupItem value={option.value} id={`support-${option.value}`} />
                        <Label htmlFor={`support-${option.value}`} className="flex-1 cursor-pointer">
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

                <Button className="w-full bg-gradient-coffee mb-4" size="lg" onClick={handleSupport}>
                  <Coffee className="w-4 h-4 mr-2" />
                  Ủng hộ ngay
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Hỗ trợ qua MoMo, ZaloPay, hoặc thẻ
                </p>

                <Separator className="my-6" />

                <Link to={`/creator/${post.creator.slug}`}>
                  <Button variant="outline" className="w-full">
                    Xem trang của {post.creator.name}
                  </Button>
                </Link>
              </Card>

              {/* Share Card */}
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Chia sẻ bài viết
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="w-full">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" onClick={handleShare}>
                    Copy link
                  </Button>
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

export default PostDetail;