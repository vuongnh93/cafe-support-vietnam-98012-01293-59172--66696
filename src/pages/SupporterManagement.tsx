import { useState } from "react";
import { Link, useLocation, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Search, 
  Coffee, 
  Heart, 
  MessageSquare,
  Mail,
  Filter,
  Download
} from "lucide-react";
import { toast } from "sonner";

const supportersData = {
  all: [
    { 
      id: 1,
      name: "Hùng Anh", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hung",
      email: "hunganh@example.com",
      totalCoffees: 45,
      totalAmount: "1,125,000₫",
      firstSupport: "3 tháng trước",
      lastSupport: "5 phút trước",
      status: "active",
      message: "Rất thích nội dung của bạn!"
    },
    { 
      id: 2,
      name: "Thu Hà", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ThuHa",
      email: "thuha@example.com",
      totalCoffees: 38,
      totalAmount: "950,000₫",
      firstSupport: "4 tháng trước",
      lastSupport: "1 giờ trước",
      status: "active",
      message: "Cảm ơn vì những video hữu ích!"
    },
    { 
      id: 3,
      name: "Minh Tuấn", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan",
      email: "minhtuan@example.com",
      totalCoffees: 25,
      totalAmount: "625,000₫",
      firstSupport: "2 tháng trước",
      lastSupport: "3 giờ trước",
      status: "active",
      message: ""
    },
    { 
      id: 4,
      name: "Lan Anh", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lan",
      email: "lananh@example.com",
      totalCoffees: 18,
      totalAmount: "450,000₫",
      firstSupport: "1 tháng trước",
      lastSupport: "1 ngày trước",
      status: "active",
      message: "Keep up the good work!"
    },
    { 
      id: 5,
      name: "Việt Anh", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Viet",
      email: "vietanh@example.com",
      totalCoffees: 52,
      totalAmount: "1,300,000₫",
      firstSupport: "5 tháng trước",
      lastSupport: "2 ngày trước",
      status: "vip",
      message: "Supporter #1 của bạn!"
    },
    { 
      id: 6,
      name: "Phương Anh", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong",
      email: "phuonganh@example.com",
      totalCoffees: 8,
      totalAmount: "200,000₫",
      firstSupport: "2 tuần trước",
      lastSupport: "1 tuần trước",
      status: "new",
      message: ""
    },
  ]
};

const SupporterManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredSupporters = supportersData.all.filter(supporter => 
    supporter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supporter.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const topSupporters = [...supportersData.all].sort((a, b) => b.totalCoffees - a.totalCoffees).slice(0, 3);
  const newSupporters = supportersData.all.filter(s => s.status === "new");

  const handleSendThankYou = (supporter: typeof supportersData.all[0]) => {
    toast.success(`Đã gửi lời cảm ơn đến ${supporter.name}!`);
  };

  const handleExport = () => {
    toast.success("Đã xuất danh sách supporters thành công!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/creator-dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Quản lý Supporters</h1>
              <p className="text-muted-foreground">Theo dõi và cảm ơn những người ủng hộ bạn</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Lọc
            </Button>
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="w-4 h-4 mr-2" />
              Xuất dữ liệu
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <Coffee className="w-8 h-8 text-secondary mb-3" />
            <h3 className="text-2xl font-bold text-foreground">{supportersData.all.length}</h3>
            <p className="text-sm text-muted-foreground">Tổng supporters</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <Heart className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-2xl font-bold text-foreground">
              {supportersData.all.reduce((sum, s) => sum + s.totalCoffees, 0)}
            </h3>
            <p className="text-sm text-muted-foreground">Tổng cà phê nhận được</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
            <MessageSquare className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-2xl font-bold text-foreground">
              {supportersData.all.filter(s => s.message).length}
            </h3>
            <p className="text-sm text-muted-foreground">Tin nhắn nhận được</p>
          </Card>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">Tất cả ({supportersData.all.length})</TabsTrigger>
            <TabsTrigger value="top">Top Supporters ({topSupporters.length})</TabsTrigger>
            <TabsTrigger value="new">Mới ({newSupporters.length})</TabsTrigger>
          </TabsList>

          {/* All Supporters Tab */}
          <TabsContent value="all" className="space-y-6">
            {/* Search Bar */}
            <Card className="p-4 bg-card border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Tìm kiếm theo tên hoặc email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </Card>

            {/* Supporters List */}
            <div className="space-y-4">
              {filteredSupporters.map((supporter) => (
                <Card key={supporter.id} className="p-6 bg-card border-border hover:shadow-warm transition-all">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Avatar & Info */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-muted shrink-0">
                        <img src={supporter.avatar} alt={supporter.name} className="w-full h-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{supporter.name}</h3>
                          {supporter.status === "vip" && (
                            <Badge className="bg-gradient-coffee">VIP</Badge>
                          )}
                          {supporter.status === "new" && (
                            <Badge variant="secondary">Mới</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{supporter.email}</p>
                        {supporter.message && (
                          <p className="text-sm text-muted-foreground italic">"{supporter.message}"</p>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 text-sm">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-secondary font-semibold mb-1">
                          <Coffee className="w-4 h-4" />
                          <span>{supporter.totalCoffees}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">cà phê</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-foreground mb-1">{supporter.totalAmount}</p>
                        <p className="text-xs text-muted-foreground">tổng tiền</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleSendThankYou(supporter)}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Gửi lời cảm ơn
                      </Button>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-border flex gap-6 text-xs text-muted-foreground">
                    <span>Ủng hộ lần đầu: {supporter.firstSupport}</span>
                    <span>•</span>
                    <span>Ủng hộ gần nhất: {supporter.lastSupport}</span>
                  </div>
                </Card>
              ))}

              {filteredSupporters.length === 0 && (
                <Card className="p-12 bg-card border-border text-center">
                  <p className="text-muted-foreground">Không tìm thấy supporter nào</p>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Top Supporters Tab */}
          <TabsContent value="top" className="space-y-6">
            <div className="space-y-4">
              {topSupporters.map((supporter, index) => (
                <Card key={supporter.id} className="p-6 bg-card border-border hover:shadow-warm transition-all">
                  <div className="flex items-center gap-6">
                    {/* Rank Badge */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0 ${
                      index === 0 ? 'bg-yellow-500 text-white' :
                      index === 1 ? 'bg-gray-400 text-white' :
                      'bg-orange-600 text-white'
                    }`}>
                      {index + 1}
                    </div>

                    {/* Avatar & Info */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-muted shrink-0">
                        <img src={supporter.avatar} alt={supporter.name} className="w-full h-full" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{supporter.name}</h3>
                        <p className="text-sm text-muted-foreground">{supporter.email}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-secondary font-bold text-xl mb-1">
                        <Coffee className="w-5 h-5" />
                        <span>{supporter.totalCoffees}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{supporter.totalAmount}</p>
                    </div>

                    {/* Action */}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleSendThankYou(supporter)}
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Cảm ơn
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* New Supporters Tab */}
          <TabsContent value="new" className="space-y-6">
            <div className="space-y-4">
              {newSupporters.map((supporter) => (
                <Card key={supporter.id} className="p-6 bg-card border-border hover:shadow-warm transition-all">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-secondary/20 shrink-0">
                        <img src={supporter.avatar} alt={supporter.name} className="w-full h-full" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{supporter.name}</h3>
                          <Badge variant="secondary">Mới</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{supporter.email}</p>
                        <p className="text-xs text-muted-foreground mt-1">Tham gia: {supporter.firstSupport}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-secondary font-semibold mb-1">
                          <Coffee className="w-4 h-4" />
                          <span>{supporter.totalCoffees}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{supporter.totalAmount}</p>
                      </div>

                      <Button 
                        className="bg-gradient-coffee"
                        size="sm"
                        onClick={() => handleSendThankYou(supporter)}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Chào mừng
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

              {newSupporters.length === 0 && (
                <Card className="p-12 bg-card border-border text-center">
                  <p className="text-muted-foreground">Chưa có supporter mới</p>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default SupporterManagement;
