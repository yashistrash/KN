# Prompt: KN Architects & Builders — Premium Static Website

## Client Overview

**Company:** KN Architects & Builders
**Location:** West Tambaram, Chennai, Tamil Nadu, India
**Industry:** Architecture, Construction, Interior Design
**Experience:** 10+ years
**Clients Served:** 500+ happy clients
**Services:** Architectural Design, Structural Design, Interior Design, Residential Construction, Commercial Construction, Renovation & Remodeling
**Instagram:** @kn_architects_builders
**Logo:** Attached (a bold geometric "KN" monogram — red "K" overlapping a gray "N" inside a gray bordered square)
**Logo Colors:** Red (#c41e1e) and Gray (#808080) on white

---

## Design Brief

Build a **premium, luxury, static single-page website** for KN Architects & Builders. The site must feel like a high-end architecture firm — think Zaha Hadid Architects or Foster + Partners level visual quality. It should convey trust, craftsmanship, and sophistication to upper-middle-class homeowners in Chennai looking to build or renovate their dream home.

---

## Design Direction

- **Aesthetic:** Dark luxury — deep blacks/charcoals with the brand red as a sharp accent color. Muted warm tones (cream, off-white) for text. Think editorial architecture magazine meets luxury brand.
- **Typography:** Use a refined serif for headings (Playfair Display or Cormorant Garamond) paired with a clean modern sans-serif for body text (Outfit, Sora, or General Sans). Letters should breathe — generous letter-spacing on uppercase labels.
- **Photography:** Use high-quality placeholder images from Unsplash of modern luxury homes, interiors, and architectural details. Search terms: "luxury modern house exterior", "premium interior design living room", "architectural detail concrete", "luxury bedroom interior", "modern kitchen design".
- **Animations:** Smooth scroll-triggered fade-in and slide-up reveals. Subtle parallax on hero image. Staggered entry animations on grid items. Keep it classy — no bouncy or playful motion.
- **Spacing:** Very generous whitespace. Let every section breathe. Luxury = space.

---

## Site Structure & Sections

### 1. Navigation (Fixed)
- Logo (KN monogram) on the left with "KN Architects" text beside it
- Nav links on the right: Home, About, Services, Projects, Testimonials, Contact
- On scroll: add a semi-transparent dark backdrop blur
- Mobile: hamburger menu with a full-screen overlay

### 2. Hero Section (THIS IS THE MOST IMPORTANT SECTION — make it unforgettable)
- Full viewport height (100vh)
- Large background image of a stunning luxury modern home (use Unsplash)
- Dark gradient overlay from bottom (so text is readable)
- Headline in large serif font: "Where Vision Meets Structure"
- Subtext: "Crafting timeless architectural masterpieces across Chennai for over a decade"
- A thin horizontal red accent line below the subtext
- Two CTA buttons: "View Our Projects" (outlined) and "Book a Consultation" (filled red)
- Subtle scroll-down indicator arrow at the bottom center
- The hero should have a slow Ken Burns zoom effect on the background image
- Stats ribbon at the very bottom of the hero or just below it: "10+ Years Experience" | "500+ Happy Clients" | "200+ Projects Completed" — with count-up animation on scroll

### 3. About Section
- Split layout: left side has a large image (construction site or team photo placeholder), right side has text
- Small red uppercase label: "About Us"
- Heading: "Building Dreams Since 2014"
- 2-3 paragraphs about the firm: Founded in Chennai, passionate about blending modern design with structural integrity, committed to delivering on time and on budget. Mention their expertise spans from individual homes to commercial spaces.
- A "Learn More" link with an arrow

### 4. Services Section
- Dark background section
- Section label: "What We Do"
- Heading: "Comprehensive Design & Build Solutions"
- Grid of 6 service cards with icons (use simple SVG line icons):
  1. Architectural Design — "Custom blueprints tailored to your vision, lifestyle, and site conditions"
  2. Structural Engineering — "Rock-solid structural plans that ensure safety and longevity"
  3. Interior Design — "Elegant interiors that balance aesthetics with everyday functionality"
  4. Residential Construction — "End-to-end home construction with premium materials and finishes"
  5. Commercial Construction — "Office spaces, retail outlets, and commercial buildings built to spec"
  6. Renovation & Remodeling — "Breathe new life into existing spaces with modern upgrades"
- Cards should have a subtle border, and on hover: a red top-border accent slides in, slight lift with shadow

### 5. Projects / Portfolio Section
- Light/cream background section for contrast
- Section label: "Our Work"
- Heading: "Selected Projects"
- Masonry or asymmetric grid layout showing 6 project images (use Unsplash luxury home/interior photos)
- Each card has an overlay on hover showing project name and category (e.g., "Villa Serenity — Residential", "The Meridian — Commercial")
- A "View All Projects" button at the bottom

### 6. Why Choose Us / Stats Section
- Full-width dark section with a background image (subtle, with dark overlay)
- 4 key differentiators in a horizontal row:
  - "Transparent Pricing" — "No hidden costs. Detailed estimates before work begins."
  - "On-Time Delivery" — "We respect deadlines as much as we respect design."
  - "Premium Materials" — "Only the finest materials sourced from trusted suppliers."
  - "End-to-End Service" — "From blueprint to handover, we manage everything."

### 7. Testimonials Section
- Clean section with subtle background texture
- Section label: "Client Stories"
- Heading: "What Our Clients Say"
- Carousel or grid of 3 testimonial cards with:
  - Quote text
  - Client name and location
  - Star rating (5 stars)
- Use realistic sounding Indian names and Chennai locations (e.g., "Rajesh Kumar, Velachery", "Priya Venkatesh, Tambaram", "Suresh Balaji, Medavakkam")

### 8. Process / How We Work Section
- 4-step horizontal timeline:
  1. Consultation — "We listen to your vision, budget, and requirements"
  2. Design — "Our architects create detailed plans and 3D visualizations"
  3. Construction — "Skilled craftsmen bring the design to life with precision"
  4. Handover — "Quality checks, final walkthrough, and keys in your hand"
- Each step has a number, icon, title, and short description
- Connected by a thin line with red dots at each step

### 9. Contact Section
- Split layout: left side has contact info, right side has a contact form
- Contact info:
  - Address: West Tambaram, Chennai, Tamil Nadu 600045
  - Phone: +91 98765 43210
  - Email: info@knbuilders.in
  - Working Hours: Mon–Sat, 9:00 AM – 6:00 PM
- Form fields: Name, Phone, Email, Service Needed (dropdown), Message, Submit button
- Below the form: embedded Google Maps placeholder (a styled dark div with "Map" text is fine)

### 10. Footer
- Dark footer with the KN logo
- Quick links, social media icons (Instagram, Facebook, YouTube)
- Instagram handle: @kn_architects_builders
- Copyright: "© 2026 KN Architects & Builders. All rights reserved."
- Small tagline: "Designed & Built with Passion in Chennai"

---

## Technical Requirements

- **Single HTML file** with inline CSS and JS (no build tools needed)
- Fully **responsive** (mobile, tablet, desktop)
- Use **Google Fonts** via CDN
- Use **Unsplash** for all placeholder images (use direct URLs like `https://images.unsplash.com/photo-XXXXX?w=1200&q=80`)
- Smooth **scroll-triggered animations** using IntersectionObserver (no external animation libraries)
- **CSS custom properties** for all colors and fonts
- Semantic HTML5 structure
- Performance-optimized: lazy-load images, efficient CSS
- The logo image will be provided separately — use a placeholder `logo.png` reference for now

---

## Brand Colors Reference (from the logo)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Red | #c41e1e | CTAs, accents, highlights, hover states |
| Deep Red | #9a1515 | Hover/active states on red elements |
| Charcoal | #1a1a1a | Primary backgrounds |
| Deep Black | #0d0d0d | Darkest backgrounds |
| Gray | #808080 | Secondary elements, borders |
| Silver | #8a8a8a | Muted body text |
| Light Silver | #b5b5b5 | Secondary text |
| Cream | #f5f0eb | Primary text on dark backgrounds |
| Off White | #faf8f5 | Light section backgrounds |

---

## Tone of Voice

- Professional yet warm
- Confident, not arrogant
- Use phrases like "crafted", "timeless", "precision", "your vision"
- Speak to aspirational homeowners — people investing in their dream home
- Avoid overly technical jargon — keep it accessible but sophisticated
