# Liquid Ether Dynamic Background Setup

## Overview
I've successfully integrated the Liquid Ether dynamic fluid simulation background into your Jekyll site. This creates an interactive, animated background that responds to mouse movements and touch inputs.

## What Was Changed

### 1. JavaScript Implementation (`assets/js/liquid-ether.js`)
- Converted the React component to vanilla JavaScript
- Removed ES6 module imports (since THREE.js is loaded from CDN)
- Made the function available globally via `window.LiquidEther`
- Implements a WebGL-based fluid simulation with:
  - Velocity advection
  - Pressure solving (Poisson equation)
  - External forces (mouse/touch interaction)
  - Viscosity simulation
  - Auto-demo mode that animates when idle

### 2. CSS Styling (`assets/css/liquid-ether.css`)
- Fixed positioning for full-screen background
- Set z-index to -1 so content appears on top
- Enabled touch interaction via `touch-action: none`

### 3. Layout Updates (`_layouts/default.liquid`)
- Added `<div id="liquid-ether-background"></div>` before the main content
- Removed inline script (moved to scripts.liquid for better organization)

### 4. Head Include (`_includes/head.liquid`)
- Added Three.js CDN library (r128)
- Included liquid-ether.css stylesheet

### 5. Scripts Include (`_includes/scripts.liquid`)
- Added initialization script that runs on DOMContentLoaded
- Configured with the following parameters:
  - **colors**: `['#5227FF', '#FF9FFC', '#B19EEF']` - Purple/pink gradient
  - **mouseForce**: `20` - How much mouse movement affects the fluid
  - **cursorSize**: `100` - Size of the interaction area
  - **resolution**: `0.5` - Render resolution (0.5 = half resolution for performance)
  - **autoDemo**: `true` - Enables automatic animation when idle
  - **autoSpeed**: `0.5` - Speed of auto animation
  - **autoIntensity**: `2.2` - Intensity of auto animation
  - **autoResumeDelay**: `3000` - Ms before auto mode resumes after user interaction

### 6. Layout Styles (`_sass/_layout.scss`)
- Made body background transparent
- Added semi-transparent overlay (85% opacity) for readability
- Overlay sits between the liquid ether background and content

## How It Works

1. **Three.js Library**: Provides WebGL rendering capabilities
2. **Fluid Simulation**: Uses shader-based physics simulation including:
   - Navier-Stokes equations for fluid dynamics
   - BFECC (Back and Forth Error Compensation and Correction) for accuracy
   - Poisson pressure solver
3. **Rendering Pipeline**:
   - Velocity field is calculated each frame
   - Colors are mapped from velocity magnitude using the palette
   - Result is rendered to a full-screen canvas behind all content
4. **Interaction**:
   - Mouse movement creates forces in the fluid
   - Touch input works on mobile devices
   - Auto-demo mode creates smooth random movements when idle

## Customization Options

You can customize the effect by modifying the parameters in `_includes/scripts.liquid`:

```javascript
LiquidEther(container, {
  colors: ['#5227FF', '#FF9FFC', '#B19EEF'],  // Change colors
  mouseForce: 20,                              // Increase for stronger interaction
  cursorSize: 100,                             // Change interaction area size
  resolution: 0.5,                             // Higher = better quality, lower performance
  isViscous: false,                            // Enable viscosity simulation
  viscous: 30,                                 // Viscosity amount
  autoDemo: true,                              // Auto animation on/off
  autoSpeed: 0.5,                              // Auto animation speed
  autoIntensity: 2.2,                          // Auto animation strength
  autoResumeDelay: 3000,                       // Delay before auto mode resumes
});
```

### Color Customization
The `colors` array accepts hex color codes. You can use 2-10 colors for a gradient:
- `['#FF0000']` - Single color (red)
- `['#FF0000', '#0000FF']` - Two colors (red to blue)
- `['#5227FF', '#FF9FFC', '#B19EEF', '#00FFFF']` - Multi-color gradient

### Performance Tuning
- **resolution**: Lower values (0.3-0.5) for mobile/slower devices
- **resolution**: Higher values (0.75-1.0) for desktop/powerful devices
- **iterationsPoisson** and **iterationsViscous**: Lower for better performance

### Overlay Opacity
To adjust content readability, modify the opacity in `_sass/_layout.scss`:
```scss
body::before {
  opacity: 0.85; // Change this (0.0 = fully transparent, 1.0 = fully opaque)
}
```

## Testing

To test the implementation:

1. Build and serve your Jekyll site:
   ```bash
   bundle exec jekyll serve
   ```

2. Open your browser and navigate to `http://localhost:4000`

3. You should see:
   - Colorful fluid animation in the background
   - Animation responds to mouse movement
   - Auto-demo mode when you stop moving the mouse for 3 seconds
   - Content is readable with the semi-transparent overlay

## Troubleshooting

### Background not showing
- Check browser console for errors
- Ensure Three.js is loaded (check Network tab)
- Verify `#liquid-ether-background` div exists in DOM

### Performance issues
- Lower the `resolution` parameter (try 0.3)
- Reduce `iterationsPoisson` and `iterationsViscous` (try 16)
- Disable `autoDemo` mode

### Content not readable
- Increase opacity in `_sass/_layout.scss` (try 0.95)
- Change background overlay color
- Adjust fluid colors to be less intense

## Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari (uses HalfFloat for iOS compatibility)
- ✅ Mobile browsers (touch-enabled)

## Performance Notes

The fluid simulation is GPU-accelerated using WebGL shaders, so it should run smoothly on most modern devices. The simulation automatically:
- Pauses when the page is not visible (tab switching)
- Uses IntersectionObserver to pause when scrolled off-screen
- Adjusts for device pixel ratio automatically
- Uses half-float precision on iOS devices for better performance

Enjoy your dynamic, interactive background! 🎨✨
