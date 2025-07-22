# 🎮 StoryTime Productions - ./dev Blog

![StoryTime Productions](https://img.shields.io/badge/StoryTime-Productions-purple?style=for-the-badge)
![Jekyll](https://img.shields.io/badge/Jekyll-4.3.3-red?style=for-the-badge&logo=jekyll)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-black?style=for-the-badge&logo=github)

Welcome to the **StoryTime Productions ./dev blog**! 🚀 Behind the screen insights from our indie game development journey in Montreal, Quebec. We create immersive Unity games spanning horror, sci-fi, and arcade genres.

## 🏢 About StoryTime Productions

We're an indie game studio crafting immersive Unity experiences from Montreal. Students turned developers exploring horror, sci-fi & arcade genres. 🇨🇦

### 🎯 Current Projects

- **[Prochaine Station](https://github.com/StoryTime-Productions)** - A psychological horror inspired by Montreal's metro system
- **[Stweaks](https://github.com/StoryTime-Productions)** - A PaperMC plugin for our group's SMP server

## 🌐 Live Site

**Production**: [https://storytime-productions.github.io/st-blog/](https://storytime-productions.github.io/st-blog/)

## 🛠️ Tech Stack

- **Static Site Generator**: Jekyll 3.10.0 (GitHub Pages compatible)
- **Theme**: [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) (Remote Theme)
- **Styling**: Custom SCSS with StoryTime Productions purple branding
- **Deployment**: GitHub Pages with automated CI/CD
- **Content Management**: Markdown with Jekyll front matter

## 🚀 Quick Start

### Local Development

```powershell
bundle install
bundle exec jekyll serve
```

View locally at: `http://localhost:4000/st-blog/`

### 🔧 Suppress Sass Warnings (Optional)

```powershell
$env:SASS_SILENCE_DEPRECATIONS="legacy-js-api,import,global-builtin,color-module"; bundle exec jekyll serve
```

## 📝 Content Management

### Writing Posts

1. **Create new post** in `_posts/` directory:
   ```
   YYYY-MM-DD-your-post-title.md
   ```

2. **Use this front matter template**:
   ```yaml
   ---
   title: "Your Post Title"
   excerpt: "Brief description of your post"
   categories:
     - Game Development
     - Unity
     - Horror
   tags:
     - montreal
     - indie
     - gamedev
   ---
   ```

### Adding Pages

1. **Create pages** in `_pages/` directory
2. **Configure navigation** in `_data/navigation.yml`

### Custom Styling

Our custom StoryTime Productions theme uses a purple color palette:
- **Primary**: `#725976` (Deep Purple)
- **Secondary**: `#d3add9` (Light Purple)
- **Accent**: `#8A3057` (Burgundy)

## 🔄 CI/CD Pipeline

This blog uses **GitHub Actions** for automated deployment:

- **Trigger**: Push to `main` branch
- **Build**: Jekyll with GitHub Pages compatibility
- **Deploy**: Automatic to GitHub Pages
- **Cache**: Ruby gems and bundle for faster builds

### Manual Deployment

```bash
# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# The built site will be in _site/
```

## 🎨 Customization

### Theme Configuration

- **Config**: Edit `_config.yml` for site-wide settings
- **Navigation**: Modify `_data/navigation.yml`
- **Styling**: Custom SCSS in `assets/css/main.scss`
- **Colors**: StoryTime Productions purple branding
- **Logo**: Full-width display (not circular crop)

### Features

- ✅ **Gradient Navbar**: Custom purple gradient background
- ✅ **Mobile Responsive**: Works on all devices
- ✅ **SEO Optimized**: Meta tags and sitemap
- ✅ **Fast Loading**: Compressed CSS and optimized images
- ✅ **GitHub Integration**: Social links and commit-based linting

## 📚 Documentation

- **[Jekyll Documentation](https://jekyllrb.com/docs/)**
- **[Minimal Mistakes Theme](https://mmistakes.github.io/minimal-mistakes/)**
- **[GitHub Pages](https://docs.github.com/en/pages)**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

- **Studio**: [StoryTime Productions](https://storytime-productions.github.io)
- **Email**: [brommitment@gmail.com](mailto:brommitment@gmail.com)
- **GitHub**: [@StoryTime-Productions](https://github.com/StoryTime-Productions)
- **Location**: Montreal, Quebec, Canada 🇨🇦

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <strong>Made with 💜 by StoryTime Productions in Montreal</strong><br>
  <em>Indie game studio crafting immersive Unity experiences</em>
</div>
