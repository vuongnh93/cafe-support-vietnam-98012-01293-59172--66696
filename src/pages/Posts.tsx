import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Calendar, Lock } from "lucide-react";

const posts = [
  {
    id: "foxconn-quach-dai-minh",
    title: "Foxconn - Quách Đài Minh",
    category: "CÂU CHUYỆN KINH DOANH 1",
    date: "Oct 05, 2025",
    views: 2,
    isPremium: true,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    slug: "foxconn-quach-dai-minh"
  },
  {
    id: "tesla-elon-musk",
    title: "Tesla - Elon Musk's Journey",
    category: "CÂU CHUYỆN KINH DOANH 2", 
    date: "Oct 04, 2025",
    views: 15,
    isPremium: true,
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
    slug: "tesla-elon-musk"
  },
  {
    id: "amazon-jeff-bezos",
    title: "Amazon - Jeff Bezos Story",
    category: "CÂU CHUYỆN KINH DOANH 3",
    date: "Oct 03, 2025", 
    views: 8,
    isPremium: true,
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=500&fit=crop",
    slug: "amazon-jeff-bezos"
  }
];

const Posts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-secondary">Premium</span> Posts
          </h1>
          <p className="text-xl text-muted-foreground">
            Support để unlock exclusive content
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden bg-card border-border hover:shadow-warm transition-all cursor-pointer group">
              {/* Premium Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover filter blur-sm group-hover:blur-none transition-all duration-300"
                />
                
                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                  <div className="text-white/80 text-sm font-medium mb-2">
                    BUSINESS PODCAST
                  </div>
                  <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center mb-2">
                    <Heart className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="text-white/80 text-sm">
                    Supporters only
                  </div>
                </div>

                {/* Lock Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Lock className="w-4 h-4 text-secondary" />
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-muted-foreground font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views} views</span>
                  </div>
                </div>

                {/* Support Button */}
                <Button 
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                  size="sm"
                >
                  Support to Unlock
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Chưa có bài viết nào
            </h3>
            <p className="text-muted-foreground">
              Creator chưa tạo bài viết premium nào
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Posts;
