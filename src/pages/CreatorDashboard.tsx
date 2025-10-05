import { Link, useLocation, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { 
  Coffee, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Settings,
  PenSquare,
  BarChart3,
  Heart
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Fake data
const dashboardData = {
  creator: {
    name: "Minh Ngọc",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Minh",
    bio: "Food blogger & content creator",
  },
  stats: {
    totalSupporters: 234,
    totalCoffees: 1247,
    thisMonthCoffees: 89,
    monthlyGoal: 100,
    totalEarnings: "31,175,000₫",
    thisMonthEarnings: "2,225,000₫",
  },
  recentSupporters: [
    { name: "Hùng Anh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hung", amount: 3, time: "5 phút trước", message: "Cảm ơn bạn vì những nội dung hữu ích!" },
    { name: "Thu Hà", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ThuHa", amount: 5, time: "1 giờ trước", message: "Rất thích video mới nhất của bạn!" },
    { name: "Minh Tuấn", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan", amount: 1, time: "3 giờ trước", message: "" },
    { name: "Lan Anh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lan", amount: 2, time: "5 giờ trước", message: "Keep it up! 💪" },
  ],
  weeklyChart: [
    { day: "T2", coffees: 12 },
    { day: "T3", coffees: 15 },
    { day: "T4", coffees: 8 },
    { day: "T5", coffees: 20 },
    { day: "T6", coffees: 18 },
    { day: "T7", coffees: 10 },
    { day: "CN", coffees: 6 },
  ]
};

const CreatorDashboard = () => {
  const progressPercent = (dashboardData.stats.thisMonthCoffees / dashboardData.stats.monthlyGoal) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-secondary/20">
              <img src={dashboardData.creator.avatar} alt={dashboardData.creator.name} className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Xin chào, {dashboardData.creator.name}! 👋</h1>
              <p className="text-muted-foreground">{dashboardData.creator.bio}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to="/creator-settings">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </Link>
            <Link to="/create-post">
              <Button size="sm" className="bg-gradient-coffee">
                <PenSquare className="w-4 h-4 mr-2" />
                Tạo bài viết
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-secondary" />
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{dashboardData.stats.totalSupporters}</h3>
            <p className="text-sm text-muted-foreground">Tổng supporters</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <Coffee className="w-8 h-8 text-primary" />
              <span className="text-xs text-muted-foreground">+12 tuần này</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">{dashboardData.stats.totalCoffees}</h3>
            <p className="text-sm text-muted-foreground">Tổng cà phê nhận được</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-green-600" />
              <span className="text-xs text-muted-foreground">Tháng này</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">{dashboardData.stats.thisMonthEarnings}</h3>
            <p className="text-sm text-muted-foreground">Thu nhập tháng này</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              <Link to="/creator-analytics">
                <Button variant="ghost" size="sm" className="text-xs">
                  Xem chi tiết
                </Button>
              </Link>
            </div>
            <h3 className="text-2xl font-bold text-foreground">{dashboardData.stats.totalEarnings}</h3>
            <p className="text-sm text-muted-foreground">Tổng thu nhập</p>
          </Card>
        </div>

        {/* Monthly Goal */}
        <Card className="p-6 mb-8 bg-card border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Mục tiêu tháng này</h3>
              <p className="text-sm text-muted-foreground">
                {dashboardData.stats.thisMonthCoffees} / {dashboardData.stats.monthlyGoal} cà phê
              </p>
            </div>
            <span className="text-2xl font-bold text-secondary">{Math.round(progressPercent)}%</span>
          </div>
          <Progress value={progressPercent} className="h-3" />
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Chart */}
          <Card className="p-6 lg:col-span-2 bg-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">Hoạt động 7 ngày qua</h3>
            <div className="flex items-end justify-between gap-2 h-48">
              {dashboardData.weeklyChart.map((item) => (
                <div key={item.day} className="flex flex-col items-center flex-1 gap-2">
                  <div className="relative w-full bg-gradient-to-t from-secondary to-secondary/50 rounded-t-lg transition-all hover:from-secondary/80 hover:to-secondary/30"
                       style={{ height: `${(item.coffees / 20) * 100}%` }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-foreground">
                      {item.coffees}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{item.day}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Supporters */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Supporters gần đây</h3>
              <Link to="/supporter-management">
                <Button variant="ghost" size="sm" className="text-xs">
                  Xem tất cả
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {dashboardData.recentSupporters.map((supporter, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-muted shrink-0">
                    <img src={supporter.avatar} alt={supporter.name} className="w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm text-foreground truncate">{supporter.name}</p>
                      <div className="flex items-center gap-1 text-secondary font-semibold text-sm">
                        <Coffee className="w-3 h-3" />
                        <span>{supporter.amount}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{supporter.time}</p>
                    {supporter.message && (
                      <p className="text-xs text-muted-foreground mt-1 italic">"{supporter.message}"</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link to="/create-post" className="group">
            <Card className="p-6 bg-card border-border hover:shadow-warm transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-coffee flex items-center justify-center">
                  <PenSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">Tạo bài viết mới</h4>
                  <p className="text-xs text-muted-foreground">Chia sẻ nội dung mới</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/supporter-management" className="group">
            <Card className="p-6 bg-card border-border hover:shadow-warm transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">Quản lý supporters</h4>
                  <p className="text-xs text-muted-foreground">Cảm ơn supporters</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/creator-analytics" className="group">
            <Card className="p-6 bg-card border-border hover:shadow-warm transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">Xem analytics</h4>
                  <p className="text-xs text-muted-foreground">Insights & Reports</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatorDashboard;
