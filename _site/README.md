# ./dev Blog

A blog powered by Jekyll and the Minimal Mistakes theme.

## Setup Instructions

### Prerequisites

1. **Install Ruby**: Download and install Ruby from [RubyInstaller for Windows](https://rubyinstaller.org/downloads/)
   - Choose the Ruby+Devkit version
   - During installation, make sure to check "Add Ruby executables to your PATH"
   - At the end of installation, run `ridk install` when prompted

2. **Install Jekyll and Bundler**:
   ```powershell
   gem install jekyll bundler
   ```

### Getting Started

1. **Install dependencies**:
   ```powershell
   bundle install
   ```

2. **Serve the site locally**:
   ```powershell
   bundle exec jekyll serve
   ```

3. **Open your browser** and navigate to `http://localhost:4000`

### Customization

- Edit `_config.yml` to customize site settings
- Modify `_data/navigation.yml` to change navigation menu
- Add new posts in the `_posts` directory following the naming convention: `YYYY-MM-DD-title.md`
- Add new pages in the `_pages` directory

### Theme Documentation

This site uses the [Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/). Check out the documentation for:
- [Configuration options](https://mmistakes.github.io/minimal-mistakes/docs/configuration/)
- [Layout options](https://mmistakes.github.io/minimal-mistakes/docs/layouts/)
- [Customization tips](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/)

### Deployment

You can deploy this site to:
- **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
- **Netlify**: Connect your repository to Netlify for automatic deployments
- **Any static site host**: Build with `bundle exec jekyll build` and upload the `_site` folder

## Old Blog Files

The original HTML/CSS/JS blog files have been moved to the `blog/` directory and are excluded from Jekyll processing. You can reference them if needed, but the new Jekyll site is the main blog now.
