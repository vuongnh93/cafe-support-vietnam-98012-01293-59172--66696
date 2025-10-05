import { useState } from "react";
import { Link, useLocation, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Upload, Save } from "lucide-react";
import { toast } from "sonner";

const CreatorSettings = () => {
  const [name, setName] = useState("Minh Ngọc");
  const [bio, setBio] = useState("Food blogger đam mê khám phá ẩm thực Việt. Hy vọng những chia sẻ của mình sẽ giúp các bạn tìm được những món ăn ngon.");
  const [email, setEmail] = useState("minhngoc@example.com");
  const [category, setCategory] = useState("Blogger ẩm thực");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);
  const [showSupporters, setShowSupporters] = useState(true);

  const handleSave = () => {
    toast.success("Đã lưu thay đổi thành công!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/creator-dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Cài đặt</h1>
            <p className="text-muted-foreground">Quản lý thông tin và tùy chỉnh trang của bạn</p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
            <TabsTrigger value="payment">Thanh toán</TabsTrigger>
            <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ảnh đại diện</h3>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-secondary/20">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Minh" 
                    alt="Avatar" 
                    className="w-full h-full"
                  />
                </div>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Tải ảnh lên
                  </Button>
                  <p className="text-xs text-muted-foreground">JPG, PNG hoặc GIF. Max 5MB.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ảnh bìa</h3>
              <div className="space-y-4">
                <div className="h-40 rounded-lg overflow-hidden bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop" 
                    alt="Cover" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Thay đổi ảnh bìa
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Thông tin cá nhân</h3>
              
              <div className="space-y-2">
                <Label htmlFor="name">Tên hiển thị</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Danh mục</Label>
                <Input 
                  id="category" 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Ví dụ: Blogger ẩm thực"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Giới thiệu bản thân</Label>
                <Textarea 
                  id="bio" 
                  value={bio} 
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Viết vài dòng về bạn..."
                  rows={4}
                />
                <p className="text-xs text-muted-foreground">{bio.length}/500 ký tự</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                />
              </div>
            </Card>

            <Card className="p-6 bg-card border-border space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quyền riêng tư</h3>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Hồ sơ công khai</Label>
                  <p className="text-sm text-muted-foreground">Cho phép mọi người tìm thấy trang của bạn</p>
                </div>
                <Switch checked={publicProfile} onCheckedChange={setPublicProfile} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Hiển thị danh sách supporters</Label>
                  <p className="text-sm text-muted-foreground">Cho phép mọi người xem ai đã ủng hộ bạn</p>
                </div>
                <Switch checked={showSupporters} onCheckedChange={setShowSupporters} />
              </div>
            </Card>

            <div className="flex justify-end gap-3">
              <Button variant="outline">Hủy</Button>
              <Button className="bg-gradient-coffee" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Lưu thay đổi
              </Button>
            </div>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Phương thức thanh toán</h3>
              <p className="text-muted-foreground mb-6">
                Cài đặt phương thức nhận tiền từ supporters
              </p>

              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">M</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">MoMo</h4>
                        <p className="text-sm text-muted-foreground">**** **** **89</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Chỉnh sửa</Button>
                  </div>
                </div>

                <div className="p-4 border border-dashed border-border rounded-lg text-center">
                  <Button variant="outline">+ Thêm phương thức thanh toán</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Giá cà phê</h3>
              <div className="space-y-2">
                <Label htmlFor="coffee-price">Giá mỗi cà phê (VNĐ)</Label>
                <Input 
                  id="coffee-price" 
                  type="number"
                  defaultValue="25000"
                  placeholder="25000"
                />
                <p className="text-xs text-muted-foreground">Giá mặc định: 25,000₫</p>
              </div>
            </Card>

            <div className="flex justify-end gap-3">
              <Button variant="outline">Hủy</Button>
              <Button className="bg-gradient-coffee" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Lưu thay đổi
              </Button>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="p-6 bg-card border-border space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Thông báo Email</h3>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo về supporters mới</Label>
                  <p className="text-sm text-muted-foreground">Nhận email khi có người ủng hộ</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Báo cáo hàng tuần</Label>
                  <p className="text-sm text-muted-foreground">Tóm tắt hoạt động hàng tuần</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tips & Updates</Label>
                  <p className="text-sm text-muted-foreground">Nhận tips để phát triển trang của bạn</p>
                </div>
                <Switch defaultChecked />
              </div>
            </Card>

            <div className="flex justify-end gap-3">
              <Button variant="outline">Hủy</Button>
              <Button className="bg-gradient-coffee" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Lưu thay đổi
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default CreatorSettings;
