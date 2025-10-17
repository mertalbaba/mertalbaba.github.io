# Local Testing Guide

## 🚀 Quick Start

The easiest way to test your site locally:

### Method 1: Simple Jekyll Server (Recommended if you have Ruby)

```bash
# Navigate to your project
cd /Users/mertalbaba/Documents/GitHub/mertalbaba.github.io

# Install bundler if needed (only once)
gem install bundler

# Install/update dependencies (only when Gemfile changes)
bundle install

# Start the server
bundle exec jekyll serve --livereload

# Your site will be available at:
# http://localhost:4000
```

### Method 2: Using Docker

**Note:** Docker setup requires fixing gem caching issues. For now, use Method 1 above.

If you want to try Docker:
```bash
# First, remove the volume to start fresh
docker-compose down -v

# Rebuild and start
docker-compose up --build

# Your site will be available at:
# http://localhost:8080
```

## Quick Testing Workflow

1. **Start the server** (using Method 1 above)
2. **Make changes** to your files (e.g., `_projects/nil.md`)
3. **Save the file**
4. **Check your browser** - the site will auto-reload (with --livereload flag)
5. **Verify the changes** look good
6. Press `Ctrl+C` to stop the server
7. **Commit and push** to GitHub

## Troubleshooting

### Bundler Version Mismatch
If you see errors about bundler versions:
```bash
# Update to use your system's bundler version
bundle update --bundler

# This will update Gemfile.lock to match your system
```

### Permission Errors (macOS)
If `gem install` says permission denied:
```bash
# Don't use sudo! Instead, tell Ruby to install in your home directory
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.zshrc
echo 'export PATH="$GEM_HOME/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Then try again
gem install bundler
```

### Port Already in Use
If port 4000 is busy:
```bash
# Use a different port
bundle exec jekyll serve --livereload --port 4001

# Visit http://localhost:4001
```

### Clear Jekyll Cache
If things look wrong:
```bash
bundle exec jekyll clean
bundle exec jekyll serve --livereload
```

## What to Check

✅ **Videos**: Make sure they load with first frame visible and display at full width
✅ **Dark Mode**: Toggle between light/dark mode (check navbar transparency)
✅ **Mobile**: Resize browser window to test responsive design
✅ **Navigation**: Test all menu items
✅ **Links**: Click around to make sure everything works

---

**Pro Tip**: Keep the local server running while you work. With `--livereload`, just save your files and the browser automatically refreshes! 🎉
