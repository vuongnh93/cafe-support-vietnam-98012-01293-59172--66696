import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Coffee, Users, Search, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Extended fake data for demo
const allCreators = [
  {
    id: "minh-ngoc",
    name: "Minh Ngọc",
    category: "Blogger ẩm thực",
    supporters: 234,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Minh",
    totalCoffees: "1.2K",
    trending: true,
  },
  {
    id: "tuan-anh",
    name: "Tuấn Anh",
    category: "YouTuber công nghệ",
    supporters: 567,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan",
    totalCoffees: "3.4K",
    trending: true,
  },
  {
    id: "linh-chi",
    name: "Linh Chi",
    category: "Podcaster",
    supporters: 189,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linh",
    totalCoffees: "890",
    trending: false,
  },
  {
    id: "hoang-nam",
    name: "Hoàng Nam",
    category: "Nhà văn",
    supporters: 423,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hoang",
    totalCoffees: "2.1K",
    trending: true,
  },
  {
    id: "phuong-anh",
    name: "Phương Anh",
    category: "Makeup Artist",
    supporters: 892,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong",
    totalCoffees: "5.2K",
    trending: true,
  },
  {
    id: "duc-minh",
    name: "Đức Minh",
    category: "Fitness Trainer",
    supporters: 345,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Duc",
    totalCoffees: "1.8K",
    trending: false,
  },
  {
    id: "thu-ha",
    name: "Thu Hà",
    category: "Travel Blogger",
    supporters: 678,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thu",
    totalCoffees: "3.9K",
    trending: true,
  },
  {
    id: "quang-huy",
    name: "Quang Huy",
    category: "Game Streamer",
    supporters: 1234,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Quang",
    totalCoffees: "7.5K",
    trending: true,
  },
  {
    id: "lan-anh",
    name: "Lan Anh",
    category: "Illustrator",
    supporters: 456,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lan",
    totalCoffees: "2.3K",
    trending: false,
  },
  {
    id: "viet-anh",
    name: "Việt Anh",
    category: "Music Producer",
    supporters: 789,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Viet",
    totalCoffees: "4.1K",
    trending: false,
  },
];

const categories = [
  "Tất cả",
  "Blogger ẩm thực",
  "YouTuber công nghệ",
  "Podcaster",
  "Nhà văn",
  "Makeup Artist",
  "Fitness Trainer",
  "Travel Blogger",
  "Game Streamer",
  "Illustrator",
  "Music Producer",
];

const Creators = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredCreators = allCreators.filter((creator) => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Tất cả" || creator.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const trendingCreators = filteredCreators.filter(c => c.trending);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Khám phá{" "}
              <span className="bg-gradient-coffee bg-clip-text text-transparent">
                Creators
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Tìm và ủng hộ những người sáng tạo nội dung yêu thích của bạn
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="trending">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-gradient-coffee hover:text-primary-foreground transition-all"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Creators Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCreators.map((creator, index) => (
                  <Link key={creator.id} to={`/creator/${creator.id}`}>
                    <Card
                      className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card border-border group cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-4">
                          <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-muted group-hover:ring-secondary transition-all">
                            <img
                              src={creator.avatar}
                              alt={creator.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {creator.trending && (
                            <div className="absolute -top-1 -right-1 bg-secondary text-primary-foreground rounded-full p-1">
                              <TrendingUp className="w-3 h-3" />
                            </div>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {creator.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {creator.category}
                        </p>
                        
                        <div className="flex items-center justify-center gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{creator.supporters}</span>
                          </div>
                          <div className="flex items-center gap-1 text-secondary font-semibold">
                            <Coffee className="w-4 h-4" />
                            <span>{creator.totalCoffees}</span>
                          </div>
                        </div>

                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group-hover:bg-gradient-coffee group-hover:text-primary-foreground group-hover:border-transparent transition-all"
                        >
                          Xem trang
                        </Button>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredCreators.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Không tìm thấy creator nào phù hợp
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="trending" className="space-y-8">
              {/* Trending Creators Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {trendingCreators.map((creator, index) => (
                  <Link key={creator.id} to={`/creator/${creator.id}`}>
                    <Card
                      className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card border-border group cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-4">
                          <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-muted group-hover:ring-secondary transition-all">
                            <img
                              src={creator.avatar}
                              alt={creator.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-1 -right-1 bg-secondary text-primary-foreground rounded-full p-1">
                            <TrendingUp className="w-3 h-3" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {creator.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {creator.category}
                        </p>
                        
                        <div className="flex items-center justify-center gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{creator.supporters}</span>
                          </div>
                          <div className="flex items-center gap-1 text-secondary font-semibold">
                            <Coffee className="w-4 h-4" />
                            <span>{creator.totalCoffees}</span>
                          </div>
                        </div>

                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group-hover:bg-gradient-coffee group-hover:text-primary-foreground group-hover:border-transparent transition-all"
                        >
                          Xem trang
                        </Button>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Creators;
