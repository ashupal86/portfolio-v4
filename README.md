# Ashish Pal - Portfolio Website

A modern, visually stunning portfolio website built with **Vite + React + React Router**, featuring a unique **dotted notebook and sticky notes** aesthetic. The design treats cards as sticky notes pinned to a whiteboard, creating an engaging and memorable user experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.5.0-purple)

## 🎨 Design Philosophy

This portfolio is inspired by a **paper notebook with sticky notes** aesthetic:

- **Dotted Notebook Background**: Visible dot grid pattern throughout the site
- **Sticky Note Cards**: Each section looks like a note pinned to a whiteboard
- **Colorful Pins**: Different colored pins (red, blue, green, orange, purple, pink) for visual variety
- **Subtle Rotations**: Cards have slight rotations for a natural, handcrafted feel
- **Yellow Highlight Tape**: Section headers use yellow marker-style highlights
- **Handwritten Annotations**: Caveat font for personal touches

## ✨ Features

### 📱 Fully Responsive
- Mobile-first design
- Tablet and desktop optimized
- No horizontal scrolling
- Touch-friendly interactions

### 📝 Markdown-Powered Blog
- Write blogs in `.md` files
- Frontmatter support (title, date, tags)
- Automatic preview generation (120-150 words)
- Syntax highlighting for code blocks
- Full GFM (GitHub Flavored Markdown) support

### 🎯 Single Source of Truth
- All portfolio data in `/src/data/portfolioData.js`
- Update once, reflects everywhere
- Easy to maintain and modify

### 🚀 Performance
- Fast load times with Vite
- Optimized React components
- Minimal re-renders
- Lazy loading for blog posts

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool and dev server |
| **React 18** | UI framework |
| **React Router** | Client-side routing |
| **react-markdown** | Markdown rendering |
| **remark-gfm** | GitHub Flavored Markdown |
| **rehype-highlight** | Syntax highlighting |
| **Pure CSS** | Styling (no frameworks) |

## 📁 Project Structure

```
portfolio-new/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Images and static files
│   ├── blogs/           # Markdown blog posts
│   │   ├── my-journey-into-self-taught-development.md
│   │   ├── building-my-homelab-complete-guide.md
│   │   └── flask-vs-fastapi-my-experience.md
│   ├── components/      # Reusable React components
│   ├── data/
│   │   └── portfolioData.js  # Single source of truth
│   ├── pages/
│   │   ├── Home.jsx     # Portfolio homepage
│   │   ├── Home.css
│   │   ├── Blog.jsx     # Blog list page
│   │   ├── Blog.css
│   │   ├── BlogPost.jsx # Individual blog post
│   ├── router/          # Routing configuration
│   ├── styles/
│   │   ├── global.css   # Design system & utilities
│   │   └── blog.css     # Blog-specific styles
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (for Vite 4.5.0)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ashupal86/PORTFOLIO-NEW.git
cd PORTFOLIO-NEW

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📝 Adding Blog Posts

1. Create a new `.md` file in `src/blogs/`
2. Add frontmatter at the top:

```markdown
---
title: Your Blog Post Title
date: 2024-12-15
tags: [Tag1, Tag2, Tag3]
---

# Your Blog Post Title

Your content here...
```

3. The blog will automatically appear on `/blog`

### Supported Markdown Features

- ✅ Headings (H1-H6)
- ✅ Bold, Italic, Strikethrough
- ✅ Lists (ordered & unordered)
- ✅ Links and Images
- ✅ Code blocks with syntax highlighting
- ✅ Tables
- ✅ Blockquotes
- ✅ Horizontal rules
- ✅ Task lists
- ✅ Footnotes

## 🎨 Customizing Your Portfolio

### Update Personal Information

Edit `/src/data/portfolioData.js`:

```javascript
export const profileData = {
  name: "Your Name",
  email: "your@email.com",
  // ... other fields
}
```

### Modify Design System

Edit `/src/styles/global.css` to change:

- Colors (`:root` CSS variables)
- Typography (font families, sizes)
- Spacing (padding, margins)
- Shadows and effects

### Change Pin Colors

Edit `/src/pages/Home.css`:

```css
.section:nth-child(2)::before {
  background: radial-gradient(circle, #YOUR_COLOR 0%, #DARKER_SHADE 100%);
}
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 📊 Portfolio Sections

- **Profile**: Name, title, contact info, social links
- **Experience**: Work history with achievements
- **Area of Expertise**: Visual representation of skills
- **Education**: Academic background
- **Programming Languages**: Skills with progress bars
- **Frameworks & Tools**: Technical stack
- **GitHub Stats**: Repository and follower counts
- **Blog**: Technical writing and tutorials

## 🎯 Design Highlights

### Sticky Note Cards

Each section card features:
- Realistic pin effect at the top
- Subtle rotation for natural look
- Enhanced shadows for depth
- Hover animations
- Different pin colors for variety

### Dotted Notebook Background

- Larger, more visible dots (1.5px)
- Dual-layer pattern for depth
- Subtle paper texture overlay
- Consistent across all pages

### Blog Styling

- Yellow marker highlights for headings
- Sticky note style blockquotes
- Code blocks like pasted notes
- Handwritten-style link underlines
- Comfortable reading width

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ashish Pal**

- GitHub: [@ashupal86](https://github.com/ashupal86)
- LinkedIn: [ashish-pal-5725a6257](https://linkedin.com/in/ashish-pal-5725a6257)
- Email: palbro86@gmail.com
- Website: [ashu.devinit.in](https://ashu.devinit.in)

## 🙏 Acknowledgments

- Design inspiration from paper notebooks and sticky notes
- Google Fonts (Inter & Caveat)
- React and Vite communities
- All open-source contributors

---

**⭐ If you found this helpful, please star the repository!**

Made with ❤️ by Ashish Pal
