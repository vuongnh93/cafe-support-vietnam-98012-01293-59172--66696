import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Coffee, Home } from "lucide-react";
import Header from "@/components/Header";
const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Trang không tìm thấy</p>
        <Link href="/">
          <Button>
            <Home className="w-4 h-4 mr-2" />
            Về trang chủ
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;