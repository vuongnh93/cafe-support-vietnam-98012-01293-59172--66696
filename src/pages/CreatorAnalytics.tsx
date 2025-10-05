import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Coffee, 
  Users, 
  DollarSign,
  Eye,
  Heart,
  Share2
} from "lucide-react";

const analyticsData = {
  overview: {
    totalViews: 12458,
    viewsChange: 12.5,
    totalLikes: 2341,
    likesChange: 8.3,
    totalShares: 456,
    sharesChange: -2.1,
    engagement: 18.8,
    engagementChange: 5.2,
  },
  monthlyData: [
    { month: "T1", coffees: 65, supporters: 15, revenue: 1625000 },
    { month: "T2", coffees: 78, supporters: 18, revenue: 1950000 },
    { month: "T3", coffees: 92, supporters: 22, revenue: 2300000 },
    { month: "T4", coffees: 105, supporters: 28, revenue: 2625000 },
    { month: "T5", coffees: 88, supporters: 20, revenue: 2200000 },
    { month: "T6", coffees: 89, supporters: 21, revenue: 2225000 },
  ],
  topPosts: [
    { title: "Top 10 quán phở ngon nhất Hà Nội", views: 3245, likes: 432, shares: 89, date: "2 ngày trước" },
    { title: "Bí quyết làm bánh mì Sài Gòn tại nhà", views: 2876, likes: 389, shares: 156, date: "1 tuần trước" },
    { title: "Review 5 quán cafe view đẹp ở Đà Lạt", views: 2103, likes: 298, shares: 67, date: "2 tuần trước" },
  ],
  demographics: {
    gender: [
      { label: "Nam", value: 45, color: "bg-blue-500" },
      { label: "Nữ", value: 52, color: "bg-pink-500" },
      { label: "Khác", value: 3, color: "bg-purple-500" },
    ],
    age: [
      { label: "18-24", value: 35, color: "bg-green-500" },
      { label: "25-34", value: 42, color: "bg-blue-500" },
      { label: "35-44", value: 18, color: "bg-purple-500" },
      { label: "45+", value: 5, color: "bg-orange-500" },
    ],
  }
};

const CreatorAnalytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/creator-dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics & Insights</h1>
            <p className="text-muted-foreground">Theo dõi hiệu suất và phát triển của bạn</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Tổng quan</TabsTrigger>
            <TabsTrigger value="revenue">Doanh thu</TabsTrigger>
            <TabsTrigger value="audience">Khán giả</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-4">
                  <Eye className="w-8 h-8 text-blue-500" />
                  <div className={`flex items-center gap-1 text-sm ${analyticsData.overview.viewsChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {analyticsData.overview.viewsChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {Math.abs(analyticsData.overview.viewsChange)}%
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{analyticsData.overview.totalViews.toLocaleString()}</h3>
                <p className="text-sm text-muted-foreground">Lượt xem</p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-4">
                  <Heart className="w-8 h-8 text-red-500" />
                  <div className={`flex items-center gap-1 text-sm ${analyticsData.overview.likesChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {analyticsData.overview.likesChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {Math.abs(analyticsData.overview.likesChange)}%
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{analyticsData.overview.totalLikes.toLocaleString()}</h3>
                <p className="text-sm text-muted-foreground">Lượt thích</p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-4">
                  <Share2 className="w-8 h-8 text-purple-500" />
                  <div className={`flex items-center gap-1 text-sm ${analyticsData.overview.sharesChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {analyticsData.overview.sharesChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {Math.abs(analyticsData.overview.sharesChange)}%
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{analyticsData.overview.totalShares.toLocaleString()}</h3>
                <p className="text-sm text-muted-foreground">Lượt chia sẻ</p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                  <div className={`flex items-center gap-1 text-sm ${analyticsData.overview.engagementChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {analyticsData.overview.engagementChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {Math.abs(analyticsData.overview.engagementChange)}%
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{analyticsData.overview.engagement}%</h3>
                <p className="text-sm text-muted-foreground">Engagement Rate</p>
              </Card>
            </div>

            {/* Top Posts */}
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Bài viết nổi bật</h3>
              <div className="space-y-4">
                {analyticsData.topPosts.map((post, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{post.title}</h4>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{post.shares}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Revenue Tab */}
          <TabsContent value="revenue" className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Doanh thu 6 tháng qua</h3>
              <div className="space-y-6">
                {analyticsData.monthlyData.map((item) => (
                  <div key={item.month}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.month}</span>
                      <span className="text-sm font-bold text-foreground">{item.revenue.toLocaleString()}₫</span>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Coffee className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">{item.coffees} cà phê</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item.supporters} supporters</span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-coffee rounded-full transition-all"
                        style={{ width: `${(item.revenue / 2625000) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-foreground">12,925,000₫</h3>
                <p className="text-sm text-muted-foreground">Tổng doanh thu (6 tháng)</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <Coffee className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-foreground">517</h3>
                <p className="text-sm text-muted-foreground">Tổng cà phê nhận được</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground">124</h3>
                <p className="text-sm text-muted-foreground">Tổng supporters</p>
              </Card>
            </div>
          </TabsContent>

          {/* Audience Tab */}
          <TabsContent value="audience" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Gender Demographics */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-6">Phân bố giới tính</h3>
                <div className="space-y-4">
                  {analyticsData.demographics.gender.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                        <span className="text-sm font-bold text-foreground">{item.value}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Age Demographics */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-6">Phân bố độ tuổi</h3>
                <div className="space-y-4">
                  {analyticsData.demographics.age.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                        <span className="text-sm font-bold text-foreground">{item.value}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Active Hours */}
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Giờ hoạt động cao nhất</h3>
              <div className="grid grid-cols-12 gap-2">
                {Array.from({ length: 24 }, (_, i) => {
                  const activity = Math.random() * 100;
                  return (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-secondary to-secondary/50 rounded transition-all hover:from-secondary/80"
                        style={{ height: `${activity}px` }}
                        title={`${i}:00 - ${activity.toFixed(0)}% hoạt động`}
                      />
                      <span className="text-xs text-muted-foreground">{i}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default CreatorAnalytics;
