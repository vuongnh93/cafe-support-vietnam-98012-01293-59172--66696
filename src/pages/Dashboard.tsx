import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Coffee, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Settings,
  BarChart3,
  Heart,
  MessageSquare,
  Edit
} from "lucide-react";

// Fake data for demo
const stats = {
  totalSupporters: 234,
  monthlyCoffees: 45,
  totalRevenue: "5.850.000₫",
  growthRate: "+12%"
};

const recentSupporters = [
  { name: "Hùng Anh", amount: 3, message: "Cảm ơn bạn vì những review chi tiết!", time: "5 phút trước" },
  { name: "Thu Hà", amount: 5, message: "Yêu content của bạn quá!", time: "1 giờ trước" },
  { name: "Minh Tuấn", amount: 1, message: "", time: "3 giờ trước" },
  { name: "Lan Anh", amount: 2, message: "Chờ video mới nhé!", time: "5 giờ trước" },
  { name: "Quang Huy", amount: 3, message: "", time: "1 ngày trước" },
];

const monthlyData = [
  { month: "T1", amount: 32 },
  { month: "T2", amount: 38 },
  { month: "T3", amount: 41 },
  { month: "T4", amount: 45 },
];

const Dashboard = () => {
  const [profileData, setProfileData] = useState({
    name: "Minh Ngọc",
    category: "Blogger ẩm thực",
    bio: "Chào mọi người! Mình là Minh Ngọc, một food blogger đam mê khám phá ẩm thực Việt.",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Creator Dashboard
              </h1>
              <p className="text-muted-foreground">
                Quản lý trang và theo dõi thống kê của bạn
              </p>
            </div>
            <Link to="/creator/minh-ngoc">
              <Button variant="outline">
                Xem trang công khai
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="overview">
                <BarChart3 className="w-4 h-4 mr-2" />
                Tổng quan
              </TabsTrigger>
              <TabsTrigger value="supporters">
                <Heart className="w-4 h-4 mr-2" />
                Supporters
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="w-4 h-4 mr-2" />
                Cài đặt
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-card border-border animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">Tổng Supporters</p>
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stats.totalSupporters}</p>
                  <p className="text-sm text-secondary mt-1">{stats.growthRate} so với tháng trước</p>
                </Card>

                <Card className="p-6 bg-card border-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">Cà phê tháng này</p>
                    <Coffee className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stats.monthlyCoffees}</p>
                  <p className="text-sm text-muted-foreground mt-1">1 cà phê = 25.000₫</p>
                </Card>

                <Card className="p-6 bg-card border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">Doanh thu</p>
                    <DollarSign className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stats.totalRevenue}</p>
                  <p className="text-sm text-muted-foreground mt-1">Tháng 4/2024</p>
                </Card>

                <Card className="p-6 bg-card border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">Tăng trưởng</p>
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stats.growthRate}</p>
                  <p className="text-sm text-muted-foreground mt-1">Tháng qua</p>
                </Card>
              </div>

              {/* Charts Section */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Số cà phê nhận được
                  </h3>
                  <div className="space-y-4">
                    {monthlyData.map((data) => (
                      <div key={data.month} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{data.month}</span>
                          <span className="font-semibold text-foreground">{data.amount} cà phê</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-coffee h-2 rounded-full transition-all"
                            style={{ width: `${(data.amount / 50) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Tin nhắn gần đây
                  </h3>
                  <div className="space-y-4">
                    {recentSupporters.filter(s => s.message).map((supporter, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-foreground">{supporter.name}</p>
                          <div className="flex items-center gap-1 text-secondary text-sm">
                            <Coffee className="w-3 h-3" />
                            <span>{supporter.amount}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{supporter.message}</p>
                        <Separator />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Supporters Tab */}
            <TabsContent value="supporters" className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Người ủng hộ gần đây
                </h3>
                <div className="space-y-4">
                  {recentSupporters.map((supporter, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <p className="font-medium text-foreground">{supporter.name}</p>
                            <div className="flex items-center gap-1 text-secondary font-semibold">
                              <Coffee className="w-4 h-4" />
                              <span>{supporter.amount}</span>
                            </div>
                          </div>
                          {supporter.message && (
                            <div className="flex items-start gap-2 text-sm">
                              <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5" />
                              <p className="text-muted-foreground">{supporter.message}</p>
                            </div>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">{supporter.time}</p>
                        </div>
                      </div>
                      {index < recentSupporters.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Thông tin trang
                  </h3>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Chỉnh sửa
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Tên hiển thị</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Danh mục</Label>
                    <Input
                      id="category"
                      value={profileData.category}
                      onChange={(e) => setProfileData({...profileData, category: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Giới thiệu</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button className="bg-gradient-coffee">
                    Lưu thay đổi
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Liên kết mạng xã hội
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input id="facebook" placeholder="https://facebook.com/..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input id="instagram" placeholder="https://instagram.com/..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="youtube">YouTube</Label>
                    <Input id="youtube" placeholder="https://youtube.com/..." />
                  </div>
                  <Button className="bg-gradient-coffee">
                    Lưu liên kết
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
