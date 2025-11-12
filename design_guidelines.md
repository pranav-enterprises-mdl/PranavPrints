# Pranav Enterprises Website Design Guidelines

## Design Approach
**Reference-Based: Modern Print Industry Leaders + 2025 Web Trends**

Drawing inspiration from innovative printing business websites and 2025 design trends: bold typography, vibrant gradients, high-contrast layouts, and dynamic visual hierarchy. The design should showcase printing quality while maintaining professional credibility.

**Core Principles:**
- Visual Impact: Bold, confident design that demonstrates printing expertise
- Trust & Professionalism: Clean layouts with strong hierarchy
- Portfolio-First: Work samples as primary conversion driver
- Mobile Excellence: Touch-optimized for on-the-go quote requests

---

## Typography

**Font Families:**
- Primary: 'Inter' or 'Poppins' (headings, bold statements)
- Secondary: 'Open Sans' or 'Roboto' (body text, descriptions)

**Hierarchy:**
- Hero Headline: text-5xl md:text-7xl font-bold (Company name, major CTAs)
- Section Headers: text-3xl md:text-5xl font-bold
- Service Titles: text-2xl md:text-3xl font-semibold
- Body Text: text-base md:text-lg leading-relaxed
- Labels/Meta: text-sm uppercase tracking-wide font-medium

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24

**Section Padding:** py-12 md:py-20 lg:py-24 (consistent vertical rhythm)

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto px-4 md:px-6
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto

**Grid Systems:**
- Services: grid-cols-1 md:grid-cols-2 gap-6 md:gap-8
- Portfolio Gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
- Features: grid-cols-1 md:grid-cols-3 gap-8

---

## Component Library

### Navigation
- Fixed/sticky header with transparent-to-solid transition on scroll
- Company name/logo (left), nav links (center), contact CTA button (right)
- Mobile: Hamburger menu with full-screen overlay
- Include: Services dropdown, Portfolio, About, Contact

### Hero Section
- Full-width with large background image (printing press/finished prints)
- Overlay gradient for text readability
- Centered content with large headline, subheadline, dual CTAs
- Height: min-h-screen md:min-h-[85vh]
- Primary CTA: "Get Free Quote" | Secondary: "View Portfolio"
- Buttons with backdrop-blur-md bg-white/10 border border-white/20

### Services Section
- Two-column grid for Offset Digital & Flex Printing
- Large service cards with icons, titles, descriptions, and key benefits list
- Hover effect: subtle scale transform and shadow enhancement
- Include: What it's best for, turnaround time, sample applications

### Portfolio/Gallery
- Masonry-style or grid layout showcasing printed work
- Categories: Business Cards, Banners, Flex Prints, Signage, etc.
- Lightbox/modal view on click
- Include project details overlay on hover

### About Section
- Two-column layout: Company story (left), key stats/achievements (right)
- Stats counters: Years in business, projects completed, satisfied clients
- Visual: Team photo or printing facility image

### Contact Section
- Two-column: Contact form (left), Info & Map (right)
- Form fields: Name, Phone, Email, Service Interest (dropdown), Message
- Contact info card: Phone (clickable tel: link), Address, Instagram icon link
- Embedded Google Maps showing Talewad Towers location

### Footer
- Multi-column: About snippet, Quick links, Services, Contact info
- Instagram feed preview (6 recent posts in 2x3 grid)
- Social media icons, copyright, location badge

### UI Elements
- Buttons: Rounded-lg px-6 py-3, primary (bold CTA) and secondary (outline) variants
- Cards: Rounded-xl shadow-lg with subtle hover lift
- Icons: Use Heroicons or Font Awesome via CDN
- Badges: For certifications, eco-friendly indicators, fast turnaround labels

---

## Images

**Hero Section:**
- Large, high-quality image: Modern printing press in action OR vibrant finished print products (business cards, banners, flex prints arranged artistically)
- Aspect: Wide landscape, 1920x1080px minimum
- Treatment: Slight gradient overlay (dark-to-transparent) for text readability

**Services Section:**
- Two feature images: Offset printing machine + Flex banner installation
- Size: 800x600px, placed above or beside service descriptions

**Portfolio Gallery:**
- 12-16 images showcasing variety: business cards, wedding invitations, banners, vehicle wraps, shop signage
- Square format (600x600px) for grid consistency
- High-resolution to demonstrate print quality

**About Section:**
- Team/facility photo: Workshop or staff at printing press
- Size: 600x800px portrait or 800x600px landscape

**Background Elements:**
- Subtle texture overlays (paper grain, print dots) at low opacity for depth
- Abstract colorful gradient blobs in service cards (representing CMYK colors)

---

## Additional Design Notes

- Accent treatments: Use CMYK-inspired color accents (cyan, magenta, yellow highlights) strategically in icons and borders
- Trust signals: Display certifications, "Since 20XX" badge, customer testimonial quotes
- Mobile: Sticky "Call Now" button at bottom of screen
- Animations: Minimal - counter animations for stats, smooth scroll reveals only
- Instagram integration: Display handle prominently, embed recent posts grid in footer

---

**Design Philosophy:** Bold, modern, and professional - showcasing Pranav Enterprises as a cutting-edge printing partner while maintaining approachability for local customers. The design should make visitors immediately understand the quality and range of services offered.