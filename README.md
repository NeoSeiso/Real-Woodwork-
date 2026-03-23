# REAL WOODWORK PTY LTD - Website

A modern, responsive 3-page website for a professional carpentry and woodwork business.

## 📋 Overview

This website showcases REAL WOODWORK PTY LTD's carpentry services including decking, pergolas, wooden flooring, fencing, gates, staircases, kitchens, and more.

## 🌟 Features

- **Responsive Design**: Fully mobile-friendly and optimized for all devices
- **Modern UI**: Clean, professional design with wood-inspired color palette
- **WhatsApp Integration**: Direct chat functionality for instant client communication
- **Contact Form**: Easy-to-use inquiry form with email integration
- **Image Gallery**: Showcase of craftsmanship and completed projects
- **SEO Optimized**: Includes relevant keywords and meta descriptions
- **Fast Loading**: Optimized images and performance-focused code

## 📁 Project Structure

```
REAL WOODWORK PTY LTD/
├── index.html          # Home page
├── about.html          # About & Services page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── README.md           # This file
├── Logo/
│   └── RW Logo.jpeg    # Company logo
└── Gallery/
    ├── wood1.jpg       # Gallery images
    ├── wood2.jpg
    ├── wood3.jpg
    ├── wood4.jpg
    ├── wood5.jpg
    └── 9f3eceb4ed4505a4b64a57f1450e3e15.jpg
```

## 🚀 Getting Started

### Option 1: Open Directly in Browser
1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser

### Option 2: Use a Local Server (Recommended)
Using Python:
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

Using Node.js (with http-server):
```bash
npx http-server -p 8000

# Then open: http://localhost:8000
```

## 📱 Pages

### 1. Home Page (`index.html`)
- Hero section with compelling headline
- Company introduction
- Core services overview
- Gallery showcase
- Why choose us section
- Call-to-action sections

### 2. About & Services Page (`about.html`)
- Company story and background
- Core values
- Detailed service descriptions:
  - Outdoor Wooden Flooring & Decking
  - Pergolas & Outdoor Structures
  - Balustrades & Handrails
  - Wooden Gates & Fencing
  - Staircases
  - Custom Kitchens
  - Ceilings
  - Repairs & Maintenance

### 3. Contact Page (`contact.html`)
- Contact form with validation
- WhatsApp integration
- Business hours
- Email contact: bhekani36@gmail.com
- FAQ section

## 🎨 Design

### Color Palette
- **Primary Brown**: #5D4037
- **Secondary Brown**: #795548
- **Dark Brown**: #3E2723
- **Light Brown**: #A1887F
- **Beige**: #D7CCC8
- **Cream**: #EFEBE9
- **Gold Accent**: #C9A961
- **WhatsApp Green**: #25D366

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

## ⚙️ Configuration

### WhatsApp Integration
Update the WhatsApp phone number in all HTML files:
- Replace `27XXXXXXXXX` with your actual WhatsApp number (with country code, no + or spaces)
- Example: `27821234567` for a South African number

Search for: `https://wa.me/27XXXXXXXXX`

### Email Contact
The contact form opens the default email client with pre-filled information sent to:
- **Email**: bhekani36@gmail.com

To integrate with a backend service, modify the form submission handler in `script.js`.

## 🔧 Customization

### Adding More Gallery Images
1. Add images to the `Gallery/` folder
2. Update the HTML files to reference the new images
3. Maintain aspect ratios for best results

### Modifying Services
Edit the service sections in:
- `index.html` - Core services grid
- `about.html` - Detailed service descriptions

### Changing Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-brown: #5D4037;
    --secondary-brown: #795548;
    /* ... other colors ... */
}
```

## 📊 SEO Keywords

The website is optimized for:
- Woodwork
- Carpentry
- Decking
- Pergola
- Wooden flooring
- Wooden fencing
- Wooden gates
- Balustrades
- Staircases
- Custom kitchens

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Features Implemented

✅ Responsive navigation with mobile menu
✅ Hero section with background images
✅ Service cards with hover effects
✅ Image gallery with lightbox
✅ Contact form with validation
✅ WhatsApp chat integration
✅ Smooth scrolling
✅ Fade-in animations
✅ SEO meta tags
✅ Performance optimizations

## 🚫 Not Included (As Per Requirements)

❌ Booking system
❌ Online payment functionality

## 📞 Contact Information

**Email**: bhekani36@gmail.com
**WhatsApp**: Update in HTML files

## 📄 License

© 2024 REAL WOODWORK PTY LTD. All rights reserved.

## 🛠️ Maintenance

### Regular Updates
- Update gallery images with new projects
- Keep service descriptions current
- Monitor and respond to contact form submissions
- Test WhatsApp integration regularly

### Performance Tips
- Compress images before uploading (recommended: under 200KB each)
- Test on multiple devices and browsers
- Monitor page load speed
- Keep content fresh and updated

---

**Built with**: HTML5, CSS3, JavaScript
**Design**: Modern, responsive, wood-inspired aesthetic
**Focus**: Performance, user experience, lead generation
