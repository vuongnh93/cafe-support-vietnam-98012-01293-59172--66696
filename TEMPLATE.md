# 🎨 Template Customization Guide

Hướng dẫn tùy chỉnh dự án Coffee Support Vietnam cho nhu cầu của bạn.

## 🔧 Các file cần cập nhật

### 1. Package.json
```json
{
  "name": "your-project-name",
  "description": "Mô tả dự án của bạn",
  "version": "1.0.0"
}
```

### 2. README.md
- Thay đổi tiêu đề và mô tả
- Cập nhật thông tin liên hệ
- Thêm logo/branding của bạn

### 3. index.html
```html
<title>Your Project Name</title>
<meta name="description" content="Your project description" />
```

### 4. Tailwind Config
File: `tailwind.config.ts`
```typescript
// Thay đổi colors, fonts, branding
theme: {
  extend: {
    colors: {
      primary: "#your-color",
      secondary: "#your-color",
    }
  }
}
```

### 5. Components
- `src/components/Header.tsx` - Header và navigation
- `src/components/Footer.tsx` - Footer và links
- `src/pages/Index.tsx` - Trang chủ

## 🎨 Branding

### Logo
- Thay thế logo trong `src/assets/`
- Cập nhật favicon trong `public/`

### Colors
- Primary: Màu chính của brand
- Secondary: Màu phụ
- Accent: Màu nhấn

### Fonts
- Cập nhật Google Fonts trong `index.html`
- Thay đổi font-family trong `tailwind.config.ts`

## 📱 Content

### Creator Data
File: `src/pages/Creator.tsx`
- Thay đổi dữ liệu creators mẫu
- Cập nhật categories và content

### Features
File: `src/components/FeaturesSection.tsx`
- Thay đổi tính năng
- Cập nhật icons và mô tả

## 🚀 Deployment

### Environment Variables
Tạo file `.env.local`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

### Build
```bash
npm run build
```

### Deploy
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📄 License

Nhớ cập nhật LICENSE file với thông tin của bạn.

## 🎯 Quick Start

1. Fork repository
2. Clone về máy
3. Cập nhật package.json
4. Thay đổi branding
5. Deploy!

Happy coding! 🚀
