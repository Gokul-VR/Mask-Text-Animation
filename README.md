# GSAP MaskText Component

A powerful, reusable React component that creates stunning masked text reveal animations using GSAP's SplitText plugin with ScrollTrigger support. Perfect for creating engaging text animations that trigger on scroll or load.


## ✨ Features

- 🎬 **Smooth GSAP-powered animations** with power4.inOut easing
- 📜 **ScrollTrigger integration** for scroll-based animations
- 🎯 **Flexible animation triggers** (on scroll or immediate)
- 🔧 **Works with single or multiple elements**
- ♻️ **Fully reusable component** with proper cleanup
- 📱 **Font-loading aware** with proper initialization timing
- 🎨 **Masked line-by-line reveal** effect
- ⚡ **Performance optimized** with proper memory management

## 🚀 Installation

### Prerequisites

Make sure you have GSAP with the required plugins installed:

```bash
npm install gsap
```

**Note:** This component uses GSAP's SplitText plugin, which requires a GSAP Club membership for commercial use. Make sure you have the proper licensing.

### Component Installation

1. Copy the `MaskText` component to your project:

```bash
# Create the components directory if it doesn't exist
mkdir -p components

# Copy the component file
cp MaskText.jsx components/  # or MaskText.tsx for TypeScript
```

2. Install required dependencies:

```bash
npm install gsap
npm install react  # If not already installed
```

## 📖 Usage

### Basic Usage (Scroll Triggered)

```jsx
import MaskText from '@/components/MaskText'

export default function MyComponent() {
  return (
    <MaskText>
      <h1>Your Amazing Headline</h1>
    </MaskText>
  )
}
```

### Immediate Animation (No Scroll Trigger)

```jsx
import MaskText from '@/components/MaskText'

export default function HeroSection() {
  return (
    <MaskText animateOnScroll={false}>
      <h1 className="text-6xl font-bold">
        Welcome to Our Platform
      </h1>
    </MaskText>
  )
}
```

### Multiple Elements with Wrapper

```jsx
import MaskText from '@/components/MaskText'

export default function ContentSection() {
  return (
    <MaskText delay={0.5}>
      <h2 className="text-6xl font-bold">Section Title</h2>
      <p>First paragraph that will animate line by line</p>
      <p>Second paragraph with continued animation</p>
    </MaskText>
  )
}
```

### Custom Delay

```jsx
import MaskText from '@/components/MaskText'

export default function DelayedContent() {
  return (
    <MaskText delay={1.2} animateOnScroll={false}>
      <h1>This will animate after 1.2 seconds</h1>
    </MaskText>
  )
}
```

## 🎛️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The text content to animate (required) |
| `animateOnScroll` | `boolean` | `true` | Whether to trigger animation on scroll or immediately |
| `delay` | `number` | `0` | Delay before animation starts (in seconds) |

## 🎨 Examples

### Hero Section with Immediate Animation

```jsx
<section className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <MaskText animateOnScroll={false}>
      <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Innovation Starts Here
      </h1>
    </MaskText>
    
    <MaskText animateOnScroll={false} delay={0.8}>
      <p className="text-2xl text-gray-600 mt-6 max-w-4xl">
        Discover the future of technology with our cutting-edge solutions 
        that transform the way you work and live
      </p>
    </MaskText>
  </div>
</section>
```

### Scroll-Triggered Content Sections

```jsx
<div className="space-y-20 py-20">
  <MaskText>
    <h2 className="text-5xl font-bold text-center">Our Services</h2>
  </MaskText>
  
  <div className="grid md:grid-cols-2 gap-12">
    <MaskText delay={0.2}>
      <div>
        <h3 className="text-3xl font-semibold mb-4">Web Development</h3>
        <p className="text-lg text-gray-700">
          Create stunning, responsive websites that engage your audience 
          and drive business growth with modern technologies.
        </p>
      </div>
    </MaskText>
    
    <MaskText delay={0.4}>
      <div>
        <h3 className="text-3xl font-semibold mb-4">Mobile Apps</h3>
        <p className="text-lg text-gray-700">
          Build powerful mobile applications that provide seamless user 
          experiences across all devices and platforms.
        </p>
      </div>
    </MaskText>
  </div>
</div>
```

### Feature List with Staggered Animation

```jsx
const features = [
  "🚀 Lightning-fast performance",
  "🎨 Beautiful, modern design",
  "📱 Mobile-first approach",
  "🔒 Enterprise-grade security",
  "⚡ Real-time updates"
]

<div className="space-y-8">
  <MaskText>
    <h2 className="text-4xl font-bold">Why Choose Us?</h2>
  </MaskText>
  
  {features.map((feature, index) => (
    <MaskText key={index} delay={index * 0.1}>
      <p className="text-xl">{feature}</p>
    </MaskText>
  ))}
</div>
```

### Blog Post Content

```jsx
    <article className="max-w-4xl mx-auto space-y-8">
    <MaskText animateOnScroll={false}>
        <h1 className="text-5xl font-bold">The Future of Web Development</h1>
    </MaskText>
    
    <MaskText animateOnScroll={false} delay={0.5}>
        <p className="text-xl text-gray-600">
        Published on March 15, 2024 • 5 min read
        </p>
    </MaskText>
    
    <MaskText>
        <p className="text-lg leading-relaxed">
        The landscape of web development is constantly evolving, with new 
        technologies and frameworks emerging at an unprecedented pace. 
        In this comprehensive guide, we'll explore the trends that are 
        shaping the future of how we build for the web.
        </p>
    </MaskText>
    
    <MaskText delay={0.2}>
        <p className="text-lg leading-relaxed">
        From the rise of AI-powered development tools to the growing 
        importance of performance optimization, developers today have 
        more opportunities than ever to create exceptional user experiences.
        </p>
    </MaskText>
    </article>
```

## 🛠️ Advanced Configuration

### Custom Animation Settings

To modify the animation properties, edit the component file:

```jsx
// In MaskText.jsx, modify the animationProps object
const animationProps = {
  y: "0%",
  duration: 2.0,        // Slower animation
  ease: "power2.out",   // Different easing
  stagger: 0.15,        // More stagger between lines
  delay: delay,
}
```

### Custom ScrollTrigger Settings

```jsx
// Modify the ScrollTrigger configuration
scrollTrigger: {
  trigger: containerRef.current,
  start: "top 80%",     // Trigger earlier
  end: "bottom 20%",    // Optional end point
  once: true,           // Only animate once
  markers: true,        // Show markers for debugging
}
```

### TypeScript Version

```tsx
import React, { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MaskTextProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function MaskText({
  children,
  animateOnScroll = true,
  delay = 0,
}: MaskTextProps) {
  // ... rest of the component code
}
```

## 🔧 Technical Details

### How It Works

1. **Font Loading**: Waits for fonts to load before initializing animations
2. **Element Detection**: Automatically detects single vs. multiple children
3. **Text Splitting**: Uses SplitText with mask mode for clean reveals
4. **Line Animation**: Animates each line from `y: "100%"` to `y: "0%"`
5. **ScrollTrigger**: Optionally triggers animations when elements enter viewport
6. **Cleanup**: Properly reverts SplitText instances to prevent memory leaks

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Considerations

- Waits for font loading to prevent layout shifts
- Uses hardware-accelerated transforms
- Proper cleanup prevents memory leaks
- ScrollTrigger optimizes scroll performance

## 🚨 Important Notes

### GSAP Licensing

This component requires GSAP's premium plugins:

- **SplitText**: Requires GSAP Club membership
- **ScrollTrigger**: Free with GSAP 3.0+

Make sure you have proper licensing for commercial projects.

### Next.js Setup

For Next.js projects, configure GSAP properly:

```js
// next.config.js
module.exports = {
  transpilePackages: ['gsap'],
}
```

### Font Loading

The component automatically waits for fonts to load using `document.fonts.ready`. This ensures:

- Accurate text measurements
- Proper line splitting
- No layout shifts during animation

## 🐛 Troubleshooting

### Common Issues

**Animation not triggering:**
- Check browser console for GSAP errors
- Verify SplitText plugin licensing
- Ensure elements have sufficient height/width

**Text not splitting properly:**
- Confirm fonts are loaded
- Check CSS doesn't interfere with line breaks
- Verify text content exists

**ScrollTrigger not working:**
- Make sure ScrollTrigger is registered
- Check trigger element positioning
- Verify scroll container setup

**Performance issues:**
- Limit simultaneous animations
- Use appropriate stagger values
- Consider using `once: true` for ScrollTrigger

### Debug Mode

Add markers to ScrollTrigger for debugging:

```jsx
scrollTrigger: {
  trigger: containerRef.current,
  start: "top 90%",
  once: true,
  markers: true,  // Add this for debugging
}
```

## 📄 License

This component is provided as-is. Make sure you comply with GSAP's licensing terms for premium plugins.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

For issues or questions:

1. Check the troubleshooting section above
2. Refer to [GSAP documentation](https://greensock.com/docs/)
3. Check [ScrollTrigger documentation](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

## 🔗 Related Resources

- [GSAP Official Documentation](https://greensock.com/docs/)
- [SplitText Plugin](https://greensock.com/splittext/)
- [ScrollTrigger Plugin](https://greensock.com/scrolltrigger/)
- [GSAP Club Membership](https://greensock.com/club/)
