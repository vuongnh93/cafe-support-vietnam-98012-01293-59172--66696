import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Image, 
  Headphones, 
  ShoppingBag,
  X
} from "lucide-react";

interface CreateContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContentType: (type: 'post' | 'gallery' | 'audio' | 'shop') => void;
}

const contentTypes = [
  {
    id: 'post' as const,
    title: 'Post',
    description: 'Tạo bài viết với nội dung phong phú',
    icon: FileText,
    color: 'text-blue-500'
  },
  {
    id: 'gallery' as const,
    title: 'Gallery',
    description: 'Chia sẻ hình ảnh và album',
    icon: Image,
    color: 'text-green-500'
  },
  {
    id: 'audio' as const,
    title: 'Audio',
    description: 'Tải lên podcast hoặc âm thanh',
    icon: Headphones,
    color: 'text-purple-500'
  },
  {
    id: 'shop' as const,
    title: 'Shop',
    description: 'Bán sản phẩm và dịch vụ',
    icon: ShoppingBag,
    color: 'text-orange-500'
  }
];

const CreateContentModal = ({ isOpen, onClose, onSelectContentType }: CreateContentModalProps) => {
  const handleSelect = (type: 'post' | 'gallery' | 'audio' | 'shop') => {
    onSelectContentType(type);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Posts</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-muted-foreground">Choose to create</p>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {contentTypes.map((contentType) => {
            const IconComponent = contentType.icon;
            return (
              <Card
                key={contentType.id}
                className="p-6 hover:shadow-warm transition-all cursor-pointer group border-border hover:border-secondary/50"
                onClick={() => handleSelect(contentType.id)}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-secondary/10 transition-colors`}>
                    <IconComponent className={`w-8 h-8 ${contentType.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {contentType.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {contentType.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateContentModal;
