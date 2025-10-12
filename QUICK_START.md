# Quick Start Guide - Liquid Ether Background

## Installation Complete! ✅

I've successfully integrated the dynamic Liquid Ether background into your Jekyll site. Here's what you need to do to see it in action:

## Testing Steps

### Option 1: Using Jekyll (Recommended)
1. Open a terminal in your project directory
2. Run one of these commands based on your setup:
   ```bash
   # If using Docker
   docker-compose up
   
   # If using Jekyll directly
   bundle exec jekyll serve
   ```

3. Open your browser to `http://localhost:4000`
4. You should see an animated fluid background with purple/pink colors!

### Option 2: Deploy to GitHub Pages
1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add dynamic Liquid Ether background"
   git push origin main
   ```
2. GitHub Pages will automatically build and deploy
3. Visit your site at `https://mertalbaba.github.io`

## What You'll See

- **Interactive fluid animation** in the background
- **Responds to mouse movement** - move your cursor to create swirls
- **Auto-demo mode** - beautiful automatic animation when idle
- **Mobile-friendly** - works with touch on phones/tablets
- **Content remains readable** with a semi-transparent overlay

## Customization Guide

### Change Colors
Edit `_includes/scripts.liquid` (around line 320):
```javascript
colors: ['#5227FF', '#FF9FFC', '#B19EEF'], // Change these hex codes
```

**Suggested Color Schemes:**
- Ocean: `['#006994', '#00b4d8', '#90e0ef']`
- Fire: `['#d62828', '#f77f00', '#fcbf49']`
- Mint: `['#06ffa5', '#00d4ff', '#7b2cbf']`
- Sunset: `['#ff006e', '#fb5607', '#ffbe0b']`
- Galaxy: `['#7209b7', '#560bad', '#3a0ca3']`

### Adjust Interaction Strength
Edit `_includes/scripts.liquid`:
```javascript
mouseForce: 20,    // Higher = stronger effect (try 10-50)
cursorSize: 100,   // Larger = bigger interaction area (try 50-200)
```

### Performance Settings
Edit `_includes/scripts.liquid`:
```javascript
resolution: 0.5,   // Lower = better performance (0.3-1.0)
                   // 0.3 for mobile, 0.7 for desktop
```

### Adjust Content Readability
Edit `_sass/_layout.scss` (around line 20):
```scss
body::before {
  opacity: 0.85;  // Higher = more opaque background
}                 // 0.7 = more fluid visible
                  // 0.95 = less fluid visible
```

### Disable Auto-Demo
Edit `_includes/scripts.liquid`:
```javascript
autoDemo: false,  // Set to false to disable automatic animation
```

## Files Modified

Here's what was changed in your project:

1. ✅ `assets/js/liquid-ether.js` - Core fluid simulation (already existed, updated)
2. ✅ `assets/css/liquid-ether.css` - Background styling
3. ✅ `_layouts/default.liquid` - Added background div
4. ✅ `_includes/head.liquid` - Added Three.js and CSS
5. ✅ `_includes/scripts.liquid` - Added initialization script
6. ✅ `_sass/_layout.scss` - Made body transparent with overlay

## Troubleshooting

### Background not visible?
- **Clear browser cache** (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- **Check console** for JavaScript errors (F12 → Console tab)
- **Verify files** are loaded in Network tab

### Too slow on mobile?
Lower the resolution in `_includes/scripts.liquid`:
```javascript
resolution: 0.3,  // Lower for mobile devices
```

### Can't see content clearly?
Increase overlay opacity in `_sass/_layout.scss`:
```scss
opacity: 0.95;  // Make background more opaque
```

### Want it only on homepage?
Wrap the background div in `_layouts/default.liquid` with a condition:
```liquid
{% if page.url == "/" %}
  <div id="liquid-ether-background"></div>
{% endif %}
```

## Next Steps

1. **Test it locally** - Start your Jekyll server and see it in action!
2. **Customize colors** - Make it match your personal brand
3. **Adjust opacity** - Find the perfect balance for readability
4. **Share feedback** - Let me know what you think!

## Advanced Customization

For more advanced changes, see the full documentation in `LIQUID_ETHER_SETUP.md`.

You can adjust:
- Viscosity settings
- Simulation quality (iterations)
- Auto-animation behavior
- Color palette mapping
- Touch interaction settings

---

**Questions?** Check the browser console (F12) for any errors, or refer to `LIQUID_ETHER_SETUP.md` for detailed documentation.

Enjoy your new dynamic background! 🎨✨
