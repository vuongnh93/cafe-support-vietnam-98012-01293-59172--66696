import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowLeft, 
  Bold, 
  Italic, 
  Underline, 
  Link as LinkIcon, 
  Type, 
  List, 
  Quote, 
  Image as ImageIcon, 
  Video, 
  Code,
  Heart,
  Users,
  Save
} from "lucide-react";

const PostEditor = () => {
  const [title, setTitle] = useState("Foxconn - Quách Đài Minh");
  const [slug, setSlug] = useState("foxconn-quach-dai-minh");
  const [content, setContent] = useState(`Quách Đài Minh là người sáng lập và CEO của Foxconn - công ty sản xuất điện tử lớn nhất thế giới. Ông đã xây dựng đế chế sản xuất từ con số không và trở thành đối tác tin cậy của Apple.

## Chủ đề:
Nắm bắt cơ hội, chiến lược đàm phán, và xây dựng uy tín trong kinh doanh.

## Luận điểm chính:
• Tốc độ quan trọng hơn quy mô: Trong cuộc chiến kinh doanh, người nhanh hơn sẽ chiến thắng, không phải kẻ lớn hơn.
• Tạo ấn tượng sâu sắc: Để chiến thắng đối thủ mạnh, cần phải có một chiến lược độc đáo và để lại ấn tượng.`);

  const [visibility, setVisibility] = useState("supporters");
  const [categories, setCategories] = useState(["business-story"]);

  const handleSave = () => {
    // Handle save logic
    console.log("Saving post...");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/creator-dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{title}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Input
                    value={`https://buymeacoffee.com/laovuong/${slug}`}
                    className="text-sm text-muted-foreground bg-muted/50 border-none"
                    readOnly
                  />
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Formatting Toolbar */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <Button variant="ghost" size="sm">
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Underline className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-border mx-2" />
                  <Button variant="ghost" size="sm">
                    <LinkIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Type className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <List className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Quote className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-border mx-2" />
                  <Button variant="ghost" size="sm">
                    <ImageIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Code className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
                    alt="Post thumbnail"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[400px] border-none resize-none text-base leading-relaxed"
                    placeholder="Viết nội dung bài viết của bạn..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Save Button */}
            <Card>
              <CardContent className="p-4">
                <Button onClick={handleSave} className="w-full bg-gradient-coffee">
                  <Save className="w-4 h-4 mr-2" />
                  Save changes
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  This post must follow the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Content Guidelines
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Visibility Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Who can see this post?</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={visibility} onValueChange={setVisibility}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Everyone</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="supporters">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        <span>Supporters only</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Categories</CardTitle>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="business-story" 
                      checked={categories.includes("business-story")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setCategories([...categories, "business-story"]);
                        } else {
                          setCategories(categories.filter(c => c !== "business-story"));
                        }
                      }}
                    />
                    <Label htmlFor="business-story" className="text-sm">
                      CÂU CHUYỆN KINH DOANH
                    </Label>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  + New category
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
