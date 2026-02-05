# Zero to AI - Complete Course Package

A comprehensive, self-contained course on Generative AI and Large Language Models.

## 🚀 Quick Start

### Option 1: Run Locally (Development)
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Option 2: Build for Production
```bash
# Build the course
npm run build

# Preview the build
npm run preview

# Or deploy the /dist folder to any static host
```

## 📚 What's Included

### Course Content
- **4 Modules** covering AI fundamentals to practical applications
- **16 Lessons** with rich, interactive content
- **Hands-on Projects** for real-world practice
- **Certificate of Completion**

### Modules
1. **Foundations** - Understanding AI and LLMs
2. **Prompt Engineering** - Mastering communication with AI
3. **Practical Applications** - Real-world use cases
4. **Ethics & Future** - Responsible AI practices

## 🎯 Features

- ✅ Beautiful, responsive design
- ✅ Progress tracking
- ✅ Sidebar navigation
- ✅ Markdown content rendering
- ✅ Code syntax highlighting
- ✅ Certificate generation
- ✅ Mobile-friendly
- ✅ No backend required

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router

## 📦 Deployment Options

### Static Hosting (Recommended)
1. Run `npm run build`
2. Upload `/dist` folder to:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static host

### Docker
```dockerfile
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

## 📝 Customization

### Adding Your Content
Edit `src/data/courseData.ts` to add or modify lessons.

### Branding
- Update logo in `Landing.tsx` and `CoursePlayer.tsx`
- Modify colors in `tailwind.config.js`
- Change metadata in `index.html`

### Adding More Lessons
```typescript
// In courseData.ts
{
  id: "your-lesson-id",
  title: "Your Lesson Title",
  description: "Lesson description",
  duration: "20 min",
  type: "article", // article | video | quiz | project
  status: "available", // available | locked | completed
  content: `# Markdown content here...`
}
```

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

## 🤝 Support

For questions or issues, contact support@avatararts.academy

---

Built with ❤️ by AvatarArts Academy
