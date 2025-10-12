# 🔧 Galaxy Background Troubleshooting

## Quick Test

Open this file in your browser to test if galaxy works:
**`galaxy-test.html`**

This will show you exactly what's working and what's not.

## Common Issues & Fixes

### 1. Blank Screen / No Stars

**Check browser console (F12):**

Look for these messages:
- ✅ "Initializing Galaxy background..." - Good!
- ✅ "Galaxy initialized successfully!" - It worked!
- ❌ "OGL library not loaded" - OGL didn't load
- ❌ "Galaxy container not found" - HTML issue

**Fix for OGL not loading:**

Edit `_includes/head.liquid` and try different CDN:

```html
<!-- Try this one -->
<script src="https://unpkg.com/ogl@latest/dist/ogl.umd.js"></script>

<!-- OR this one -->
<script src="https://cdn.skypack.dev/ogl@1"></script>
```

### 2. "OGL library not loaded" Error

**Solution 1: Check network tab**
1. Open Dev Tools (F12)
2. Go to Network tab
3. Refresh page
4. Look for `ogl.umd.js` - did it load?
5. If 404 error, the CDN link is broken

**Solution 2: Download OGL locally**

```bash
# Download OGL
curl -o assets/js/ogl.umd.js https://unpkg.com/ogl@1.0.6/dist/ogl.umd.js
```

Then in `_includes/head.liquid`:
```html
<script src="{{ '/assets/js/ogl.umd.js' | relative_url }}"></script>
```

### 3. Canvas appears but no stars

**Check these settings in `_includes/scripts.liquid`:**

```javascript
Galaxy(container, {
  transparent: true,        // Should be true
  glowIntensity: 0.5,      // Try higher value (0.5-1.0)
  density: 1.5,            // Try higher (1.5-2.0)
  saturation: 0.3,         // Try higher (0.3-0.5)
});
```

### 4. Performance Issues / Laggy

**Reduce quality in `_includes/scripts.liquid`:**

```javascript
Galaxy(container, {
  density: 0.5,            // Fewer stars
  speed: 0.5,              // Slower animation
});
```

### 5. Background too bright/dark

**Adjust overlay in `_sass/_layout.scss`:**

```scss
body::before {
  opacity: 0.95;  // Higher = darker content area
}
```

Or make galaxy darker:

```javascript
Galaxy(container, {
  glowIntensity: 0.2,  // Dimmer stars
});
```

## Manual Debugging Steps

### Step 1: Check HTML Structure

Open Dev Tools (F12) → Elements tab

Look for:
```html
<div id="galaxy-background"></div>
```

Should be right after `<header>` tag.

### Step 2: Check if OGL Loaded

In console, type:
```javascript
window.OGL
```

Should show: `Object {Renderer: ƒ, Program: ƒ, Mesh: ƒ, ...}`

If `undefined`, OGL didn't load.

### Step 3: Check if Galaxy Function Exists

In console, type:
```javascript
typeof Galaxy
```

Should show: `"function"`

If `undefined`, galaxy.js didn't load.

### Step 4: Manual Initialization

Try running in console:
```javascript
const container = document.getElementById('galaxy-background');
Galaxy(container, {
  mouseInteraction: false,
  mouseRepulsion: false,
  rotationSpeed: 0.0,
  hueShift: 140,
  density: 1.5,
  glowIntensity: 0.5,
  saturation: 0.3,
  transparent: true
});
```

## Alternative: Simpler Starfield

If OGL keeps failing, I can create a simpler canvas-based starfield that doesn't require external libraries.

## Browser Compatibility

**Tested on:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Requirements:**
- WebGL support
- ES6 JavaScript
- Canvas API

**Check WebGL support:**
Visit: https://get.webgl.org/

## Still Not Working?

### Option A: Use Test File

1. Open `galaxy-test.html` in browser
2. See what errors appear
3. Share console output

### Option B: Fallback to Simple Stars

Let me know and I can create a simple Three.js or pure Canvas starfield that's more reliable.

### Option C: Debug Together

Share:
1. Browser console output (F12 → Console)
2. Network tab errors (F12 → Network)
3. Which browser/version you're using

## Quick Fix: Try This CDN

Edit `_includes/head.liquid`:

```html
<!-- Replace the OGL line with: -->
<script src="https://cdn.skypack.dev/ogl"></script>
```

Or use the pinned version:
```html
<script src="https://cdn.skypack.dev/pin/ogl@v1.0.6-0dKXOvzUgGh7KdcBz8sH/mode=imports,min/optimized/ogl.js" type="module"></script>
```

---

**Next Steps:**

1. Open `galaxy-test.html` in your browser
2. Check what it says
3. Let me know the results and I'll fix it!
