# StoryTime Productions Blog - Development Setup

## Summary of Changes

### ✅ Completed Tasks

1. **Author Content Issue Fixed**
   - Resolved caching issue with author sidebar not updating
   - Used `jekyll clean && jekyll build` to refresh cached content

2. **Logo Styling Updated** 
   - Changed logo from circular crop to full-width display
   - Added custom CSS in `assets/css/main.scss`:
     ```scss
     .author__avatar img {
         max-width: 100% !important;
         border-radius: 8px !important;
         width: auto !important;
         height: auto !important;
     }
     ```

3. **Games Section Updated**
   - Replaced generic game listings with actual StoryTime Productions projects
   - Updated `_pages/about.md` with:
     - **Prochaine Station**: Psychological horror inspired by Montreal's metro system
     - **Stweaks**: PaperMC plugin for the group's SMP server

4. **Sass Deprecation Warnings Addressed**
   - Added `@use "sass:color";` to import modern color module
   - Updated custom variables to use `color.mix()` instead of deprecated `mix()`
   - Note: Most remaining warnings come from the minimal-mistakes theme itself

5. **Commit-Based Linting Setup**
   - Installed Husky for Git hooks
   - Created pre-commit hook that validates Jekyll build
   - Added `package.json` with development scripts
   - Pre-commit hook runs `bundle exec jekyll build --quiet` to catch errors

## Development Workflow

### Available Commands
```bash
# Start development server
npm run serve

# Build site
npm run build

# Clean build artifacts  
npm run clean

# Check for build issues
npm run lint
```

### Git Workflow
- Pre-commit hook automatically runs before each commit
- Validates Jekyll build succeeds before allowing commit
- Catches Sass syntax errors and build issues early

## File Structure
```
st-blog/
├── _config.yml                 # Jekyll configuration
├── package.json                # Node.js development setup
├── .husky/pre-commit           # Git pre-commit hook
├── assets/css/main.scss        # Custom StoryTime Productions styling
├── _pages/about.md             # Updated with actual projects
└── _data/navigation.yml        # Site navigation
```

## Sass Architecture
- Custom StoryTime Productions color variables
- Montreal-themed purple color palette
- Modern `@use` syntax for color manipulation
- Full-width logo styling overrides

## Next Steps
The blog is now fully functional with:
- ✅ Proper author content display
- ✅ Full-width logo styling  
- ✅ Accurate project information
- ✅ Modern Sass syntax where possible
- ✅ Automated quality checks via pre-commit hooks

The development workflow is set up to catch issues early and maintain code quality.
