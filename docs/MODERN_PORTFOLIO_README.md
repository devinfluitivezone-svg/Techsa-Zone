# Modern Portfolio Component

## Overview
A modern, fully-featured portfolio section with filtering, animations, and image gallery functionality.

## Features

### Design
- **Gradient Background**: Purple gradient (#667eea → #764ba2)
- **Alternating Layout**: Cards alternate image position (left/right)
- **Smooth Animations**: Fade-in with stagger delay
- **Hover Effects**: Cards lift 8px on hover with enhanced shadow
- **White Cards**: Clean, modern card design with rounded corners

### Functionality
- **Category Filtering**: Filter by All, Web, Mobile App, Design
- **Image Gallery Modal**: Full-screen gallery with navigation arrows
- **Keyboard Navigation**: 
  - `Escape` to close modal
  - `Arrow Left/Right` to navigate images
- **Responsive Design**: Mobile-first, adapts to all screen sizes

## Usage

### Option 1: Use as a standalone page
Navigate to: `http://localhost:3000/portfolio`

### Option 2: Import in existing page
```javascript
import ModernPortfolio from "../components/Projects/ModernPortfolio";

// In your component:
<ModernPortfolio />
```

### Option 3: Replace existing portfolio section
In `pages/index.js`, replace:
```javascript
import ProjectsStyleOne from "../components/Projects/ProjectsStyleOne";
```
with:
```javascript
import ModernPortfolio from "../components/Projects/ModernPortfolio";
```

## File Structure

```
data/
  └── portfolioData.js          # Portfolio items and filter options

components/
  └── Projects/
      ├── ModernPortfolio.js     # Main portfolio component
      ├── FilterBar.js           # Filter bar with categories
      └── ProjectCard.js         # Individual project card

pages/
  └── portfolio.js               # Standalone portfolio page
```

## Customization

### Colors
Edit in `styles/style.css`:
- Primary gradient: Line 5264
- Card hover shadow: Line 5360
- Category badges: Lines 5455-5467

### Data
Update `data/portfolioData.js`:
- Add/remove portfolio items
- Modify filter categories
- Update image paths (currently uses `/images/products/...`)

### Animations
Modify in `styles/style.css`:
- Stagger delay: Update `animationDelay` in ProjectCard.js
- Hover effects: Lines 5360-5363
- Modal animations: Lines 5570-5578

## Responsive Breakpoints

- **Desktop**: Full alternating layout (image + content side by side)
- **Tablet** (< 991px): Single column, stacked layout
- **Mobile** (< 767px): Optimized spacing, touch-friendly buttons

## Features Included

✅ Filter by category (All, Web, Mobile, Design)  
✅ Alternating card layouts  
✅ Image gallery with navigation  
✅ Keyboard shortcuts (Arrow keys, ESC)  
✅ Smooth animations with stagger effect  
✅ Hover effects on cards and buttons  
✅ Touch-friendly navigation  
✅ Responsive design for all devices  
✅ Loading animations  
✅ Modal overlay with click-outside-to-close  

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Images should be placed in `public/images/products/` directory
- Image paths in data file should start with `/images/...`
- FontAwesome icons required (already included in project)
- No additional dependencies required

