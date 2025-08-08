# DevNotes - Your Public Knowledge Garden

![DevNotes Landing Page](landing.png)

A beautiful, modern knowledge garden built with Astro and Tailwind CSS. This is a personal space for technical notes, cheat sheets, and learning paths.

## 🌟 Features

- **Modern UI**: Clean, responsive design with dark mode support
- **Knowledge Organization**: Categorized notes and learning paths
- **Search Functionality**: Quick search through all your notes
- **TIL Posts**: Share daily learnings and insights
- **Auto-deployment**: Automatically deploys to Netlify
- **Content Collections**: Organized content management with Astro's content collections
- **RSS Feed**: Subscribe to updates via RSS
- **Sitemap**: SEO-friendly sitemap generation
- **Performance Optimized**: Fast loading with static generation
- **SEO Ready**: Meta tags, Open Graph, and structured data

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Content**: Markdown files with frontmatter for easy note-taking
- **Deployment**: Netlify with automatic deployment
- **Typography**: Tailwind Typography plugin for beautiful content rendering
- **TypeScript**: Full TypeScript support for better development experience

## 📁 Project Structure

```
src/
├── content/
│   ├── notes/          # Technical notes and guides
│   ├── til/           # Today I Learned posts
│   └── config.ts      # Content collection schemas
├── components/        # Reusable Astro components
├── layouts/          # Page layouts
├── pages/            # Astro pages and API routes
│   ├── notes/        # Notes pages
│   │   └── [slug].astro  # Individual note pages
│   ├── til/          # TIL pages
│   │   └── [slug].astro  # Individual TIL pages
│   ├── index.astro   # Homepage
│   ├── notes.astro   # Notes listing
│   ├── til.astro     # TIL listing
│   ├── rss.xml.ts    # RSS feed
│   └── sitemap.xml.ts # SEO sitemap
└── styles/           # Global styles
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Tuhin-SnapD/DevNotes.git
   cd DevNotes
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Clean build artifacts
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

This site automatically deploys to Netlify when you push to the `main` branch. The deployment is handled by Netlify's build system.

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
```

Then upload the `dist` folder to your Netlify site.

### Environment Variables

No environment variables are required for basic functionality. The site is fully static and self-contained.

## 📝 Adding Content

### Content Structure

Each content file should include frontmatter:

#### For Notes (`src/content/notes/`)

```markdown
---
title: "Your Note Title"
description: "Brief description of the note"
tags: ["tag1", "tag2", "tag3"]
date: "2024-01-01"
category: "frontend" # frontend, backend, devops, database, tools, algorithms, design, ai, other
difficulty: "intermediate" # beginner, intermediate, advanced
published: true
featured: false
readTime: "5 min read"
---

Your content here...
```

#### For TIL Posts (`src/content/til/`)

```markdown
---
title: "What I Learned Today"
description: "Brief description (optional)"
tags: ["tag1", "tag2"]
date: "2024-01-01"
category: "frontend" # frontend, backend, devops, database, tools, algorithms, design, ai, other
published: true
---

Your TIL content here...
```

### Content Categories

- **frontend**: Frontend development, UI/UX, CSS, JavaScript frameworks
- **backend**: Backend development, APIs, server-side programming
- **devops**: DevOps, CI/CD, infrastructure, deployment
- **database**: Database design, SQL, NoSQL, data modeling
- **tools**: Development tools, IDEs, utilities
- **algorithms**: Data structures, algorithms, problem solving
- **design**: System design, architecture patterns
- **ai**: Artificial intelligence, machine learning, AI tools
- **other**: Miscellaneous topics

## 🎨 Customization

### Colors and Theme

Modify the color scheme in `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Dark mode colors
  }
}
```

### Layout and Components

- **Layout**: Update `src/layouts/Layout.astro` for global layout changes
- **Styling**: Edit `src/styles/global.css` for global styles
- **Components**: Create reusable components in `src/components/`

### Content Schema

Modify `src/content/config.ts` to add new fields or validation rules for your content.

## 📊 Content Statistics

- **Notes**: Technical guides and comprehensive documentation
- **TIL Posts**: Quick learnings and daily insights
- **Categories**: Organized by technology and topic
- **Tags**: Flexible tagging system for easy discovery

## 🔧 Configuration Files

- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `netlify.toml` - Netlify deployment configuration

## 🚀 Performance Features

- **Static Generation**: All pages are pre-rendered at build time
- **Image Optimization**: Optimized images with proper formats
- **Code Splitting**: Automatic code splitting for better performance
- **SEO Optimization**: Meta tags, structured data, and sitemaps
- **Accessibility**: WCAG compliant design and navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Netlify](https://netlify.com/)

---

Built with ❤️ by [Tuhin SnapD](https://github.com/Tuhin-SnapD)
