import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
  Camera
} from "lucide-react";

const SupportPage = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [supportAmount, setSupportAmount] = useState("");
  const [supporterName, setSupporterName] = useState("");
  const [supportMessage, setSupportMessage] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const handleSupport = () => {
    // Handle support logic
    console.log("Supporting with amount:", supportAmount);
    setIsSupportModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/posts" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
              Posts
            </Link>
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
                  <Link href="/creator-dashboard" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
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
                LÃO VƯƠNG PODCAST
              </h1>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-4 rounded-none">
                SUBSCRIBE
              </Button>
            </div>
            
            <div className="absolute top-8 right-8">
              <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Lão Vương"
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-foreground">About Lão Vương</h2>
                  <Button variant="ghost" size="sm">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Chúng ta sẽ cùng nhau mổ xẻ các mô hình kinh doanh cốt lõi, rèn luyện tư duy chiến lược và xây dựng nền tảng vững chắc cho sự nghiệp của bạn.
                </p>
              </CardContent>
            </Card>

            {/* Featured Video */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                    alt="Featured Video"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="bg-red-500 hover:bg-red-600 rounded-full w-16 h-16">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Bài học từ gã khổng lồ FOXCONN</h3>
                    <p className="text-sm opacity-90">Đánh bại Gã Lớn - Rise</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    LÃO VƯƠNG - Kênh YouTube dành riêng cho hành trình chinh phục tự do tài chính và làm chủ sự nghiệp của bạn.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                      <Youtube className="w-4 h-4 mr-2 text-red-500" />
                      YouTube
                    </Button>
                    <Button variant="outline" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                      TikTok
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Supporters */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Recent Supporters</h2>
                <div className="text-center py-8">
                  <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Be the first one to support Lão Vương.</p>
                </div>
              </CardContent>
            </Card>

            {/* Posts Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Posts</h2>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Bài học kinh doanh từ Foxconn</h3>
                    <p className="text-sm text-muted-foreground mb-2">Phân tích chiến lược và bài học từ gã khổng lồ sản xuất</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>2 ngày trước</span>
                      <span>1.2K views</span>
                      <span>45 likes</span>
                    </div>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Chiến lược đàm phán thành công</h3>
                    <p className="text-sm text-muted-foreground mb-2">Bí quyết đàm phán để đạt được thỏa thuận tốt nhất</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>1 tuần trước</span>
                      <span>856 views</span>
                      <span>23 likes</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Support Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Support Lão Vương</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="$ Enter amount"
                        value={supportAmount}
                        onChange={(e) => setSupportAmount(e.target.value)}
                        className="mb-2"
                      />
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setSupportAmount("10")}>
                          +$10
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setSupportAmount("25")}>
                          +$25
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setSupportAmount("50")}>
                          +$50
                        </Button>
                      </div>
                    </div>

                    <Input
                      placeholder="Name or @yoursocial"
                      value={supporterName}
                      onChange={(e) => setSupporterName(e.target.value)}
                    />

                    <div className="relative">
                      <Textarea
                        placeholder="Say something nice..."
                        value={supportMessage}
                        onChange={(e) => setSupportMessage(e.target.value)}
                        className="pr-12"
                      />
                      <Button variant="ghost" size="sm" className="absolute bottom-2 right-2 p-2">
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="monthly"
                        checked={isMonthly}
                        onCheckedChange={setIsMonthly}
                      />
                      <label htmlFor="monthly" className="text-sm text-muted-foreground">
                        Make this monthly
                      </label>
                      <button className="text-muted-foreground hover:text-foreground">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    <Button 
                      onClick={handleSupport}
                      className="w-full bg-gradient-coffee hover:opacity-90"
                      size="lg"
                    >
                      Support
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Support via MoMo, ZaloPay, or card
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportPage;
