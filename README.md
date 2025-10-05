# Coffee Support Vietnam

Nền tảng hỗ trợ creator #1 Việt Nam - Tạo trang miễn phí để nhận hỗ trợ từ fan.

## 🚀 Tech Stack

**This project uses:**
- ⚡ **Vite** - Build tool và dev server
- ⚛️ **React 18** - UI framework
- 📘 **TypeScript** - Type safety
- 🎨 **Tailwind CSS** - Styling
- 🧩 **shadcn/ui** - UI components
- 🛣️ **Wouter** - Lightweight routing (NO REMIX)
- 🗄️ **Supabase** - Backend & Database

## ❌ What this project does NOT use

- ❌ **Remix** - Completely removed
- ❌ **React Router** - Replaced with Wouter
- ❌ **Bun** - Uses npm instead

## 🛠️ Development Setup

```bash
# Clone repository
git clone <YOUR_GIT_URL>
cd cafe-support-vietnam

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔄 Remix This Project

Bạn có thể tự do remix (fork/copy) dự án này cho mục đích cá nhân hoặc thương mại.

### Cách remix:

1. **Fork trên GitHub:**
   - Click nút "Fork" ở góc trên bên phải
   - Clone repository đã fork về máy

2. **Remix từ đầu:**
   ```bash
   # Clone repository
   git clone https://github.com/vuongnh93/cafe-support-vietnam-98012-01293-59172--66696.git my-coffee-support
   cd my-coffee-support
   
   # Xóa git history cũ
   rm -rf .git
   git init
   
   # Cài đặt dependencies
   npm install
   
   # Tùy chỉnh project
   # - Đổi tên trong package.json
   # - Cập nhật README.md
   # - Thay đổi branding/colors
   ```

3. **Deploy:**
   ```bash
   npm run build
   # Deploy dist/ folder lên hosting provider
   ```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── integrations/  # External service integrations
```

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

- **Vite**: `vite.config.ts`
- **Tailwind**: `tailwind.config.ts`
- **TypeScript**: `tsconfig.json`
- **ESLint**: `eslint.config.js`

## 📄 License

MIT License
