# Local Testing Guide

## Quick Start (Recommended: Docker)

The easiest way to test your site locally is with Docker:

### 1. Using Docker (No Ruby installation needed)

```bash
# Start the server
docker-compose up

# Your site will be available at:
# http://localhost:8080
```

To stop the server, press `Ctrl+C` in the terminal.

### 2. Using Jekyll Directly (If you have Ruby installed)

```bash
# First time only - install dependencies
bundle install

# Start the server
bundle exec jekyll serve --livereload

# Your site will be available at:
# http://localhost:4000
```

The `--livereload` flag automatically refreshes your browser when you make changes!

## Quick Testing Workflow

1. **Make changes** to your files (e.g., `_projects/nil.md`)
2. **Save the file**
3. **Check your browser** - the site will auto-reload
4. **Verify the changes** look good
5. **Commit and push** to GitHub

## Troubleshooting

### Docker Issues
- Make sure Docker Desktop is running
- If port 8080 is busy, edit `docker-compose.yml` and change the port

### Jekyll Issues  
- Make sure you have Ruby installed: `ruby --version`
- Update bundler: `gem install bundler`
- Clear cache: `bundle exec jekyll clean`

## What to Check

✅ **Videos**: Make sure they load and display at full width
✅ **Dark Mode**: Toggle between light/dark mode
✅ **Mobile**: Resize browser window to test responsive design
✅ **Navigation**: Test all menu items
✅ **Links**: Click around to make sure everything works

---

**Pro Tip**: Keep the local server running while you work. Save your files and instantly see the results in your browser! 🚀
