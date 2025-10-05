import { useState } from "react";
import { Link, useLocation, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send, Eye, Upload, Image as ImageIcon, Video, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

const CreatePost = () => {
  const [, navigate] = useLocation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Vui lòng điền đầy đủ tiêu đề và nội dung!");
      return;
    }
    
    toast.success("Đã xuất bản bài viết thành công!");
    setTimeout(() => {
      navigate("/creator-dashboard");
    }, 1000);
  };

  const handleSaveDraft = () => {
    toast.success("Đã lưu bản nháp!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/creator-dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Tạo bài viết mới</h1>
              <p className="text-muted-foreground">Chia sẻ nội dung với supporters của bạn</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsPreview(!isPreview)}
            >
              <Eye className="w-4 h-4 mr-2" />
              {isPreview ? "Chỉnh sửa" : "Xem trước"}
            </Button>
            <Button variant="outline" size="sm" onClick={handleSaveDraft}>
              Lưu nháp
            </Button>
            <Button size="sm" className="bg-gradient-coffee" onClick={handlePublish}>
              <Send className="w-4 h-4 mr-2" />
              Xuất bản
            </Button>
          </div>
        </div>

        {!isPreview ? (
          // Edit Mode
          <div className="space-y-6">
            {/* Title */}
            <Card className="p-6 bg-card border-border">
              <div className="space-y-2">
                <Label htmlFor="title">Tiêu đề</Label>
                <Input 
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Nhập tiêu đề bài viết..."
                  className="text-2xl font-bold border-none px-0 focus-visible:ring-0"
                />
              </div>
            </Card>

            {/* Media Toolbar */}
            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Thêm ảnh
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Video className="w-4 h-4" />
                  Thêm video
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <LinkIcon className="w-4 h-4" />
                  Thêm link
                </Button>
              </div>
            </Card>

            {/* Content Editor */}
            <Card className="p-6 bg-card border-border">
              <div className="space-y-2">
                <Label htmlFor="content">Nội dung</Label>
                <Textarea 
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Viết nội dung bài viết của bạn..."
                  rows={20}
                  className="min-h-[400px] border-none px-0 focus-visible:ring-0 resize-none"
                />
                <p className="text-xs text-muted-foreground text-right">
                  {content.length} ký tự
                </p>
              </div>
            </Card>

            {/* Featured Image */}
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-foreground mb-4">Ảnh đại diện</h3>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-secondary transition-colors cursor-pointer">
                <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Kéo thả ảnh vào đây hoặc click để chọn
                </p>
                <p className="text-xs text-muted-foreground">
                  JPG, PNG hoặc GIF. Max 5MB. Tỷ lệ khuyến nghị: 16:9
                </p>
              </div>
            </Card>

            {/* Post Settings */}
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-foreground mb-4">Cài đặt bài viết</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Danh mục</Label>
                  <Input 
                    id="category"
                    placeholder="Ví dụ: Review, Tutorial, Vlog..."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (cách nhau bởi dấu phẩy)</Label>
                  <Input 
                    id="tags"
                    placeholder="Ví dụ: ẩm thực, hà nội, phở..."
                  />
                </div>
              </div>
            </Card>
          </div>
        ) : (
          // Preview Mode
          <div className="space-y-6">
            <Card className="p-8 bg-card border-border">
              {/* Post Header */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {title || "Tiêu đề bài viết của bạn"}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-muted">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Minh" alt="Creator" />
                    </div>
                    <span>Minh Ngọc</span>
                  </div>
                  <span>•</span>
                  <span>{new Date().toLocaleDateString('vi-VN')}</span>
                </div>
              </div>

              {/* Featured Image Placeholder */}
              <div className="w-full h-64 bg-muted rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Ảnh đại diện sẽ hiển thị ở đây</p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                  {content || "Nội dung bài viết của bạn sẽ hiển thị ở đây..."}
                </div>
              </div>

              {/* Post Footer */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    Thích
                  </Button>
                  <Button variant="outline" size="sm">
                    Bình luận
                  </Button>
                  <Button variant="outline" size="sm">
                    Chia sẻ
                  </Button>
                </div>
              </div>
            </Card>

            {/* Preview Info */}
            <Card className="p-4 bg-blue-500/10 border-blue-500/20">
              <p className="text-sm text-foreground">
                <strong>💡 Lưu ý:</strong> Đây chỉ là bản xem trước. Bài viết thực tế có thể hiển thị khác một chút.
              </p>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CreatePost;
