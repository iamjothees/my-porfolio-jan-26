# Wanderlust Travels - Landing Page Specification

## 1. Project Overview
- **Project Name**: Wanderlust Travels Landing Page
- **Type**: Single-page marketing website
- **Core Functionality**: Inspire visitors and drive tour bookings through beautiful destination showcases
- **Target Users**: Travel enthusiasts looking for curated tour experiences

## 2. Tech Stack
- HTML5, CSS3, Vanilla JavaScript
- Tailwind CSS via CDN (latest)
- No build tools required
- Single index.html file

## 3. Visual & Design Specification

### Color Palette
- **Primary**: Ocean Blue `#0EA5E9`
- **Secondary**: Sunset Orange `#F97316`
- **Accent**: Natural Green `#22C55E`
- **Background Light**: `#F8FAFC`
- **Background Dark**: `#0F172A`
- **Text Primary**: `#1E293B`
- **Text Muted**: `#64748B`

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, clean)
- **Accent/CTA**: Poppins (semi-bold)

### Layout
- Full responsive design (mobile-first)
- Max content width: 1280px
- Section padding: 80px vertical (desktop), 48px (mobile)

## 4. Sections Specification

### 4.1 Navigation Bar
- Logo: "Wanderlust Travels" with SVG compass icon
- Links: Destinations, Tours, Packages, About, Contact
- CTA Button: "Plan Your Trip" (orange)
- **Behavior**: Transparent background on hero, solid white with shadow on scroll
- Mobile: Hamburger menu with slide-down navigation

### 4.2 Hero Section
- Full viewport height (100vh)
- Gradient overlay: linear-gradient(135deg, rgba(14, 165, 233, 0.9), rgba(249, 115, 22, 0.7))
- Background: Unsplash travel image
- Headline: "Discover Your Next Adventure" (48px, white, Playfair Display)
- Subheadline: "Unforgettable journeys to breathtaking destinations" (20px, white, Inter)
- Search form with:
  - Destination dropdown (select)
  - Date picker (input date)
  - Travelers (number input)
  - "Explore Now" button
- Animated scroll indicator (bouncing chevron)

### 4.3 Popular Destinations
- Section title: "Popular Destinations"
- 6 destination cards in responsive grid (3x2 desktop, 2x3 tablet, 1x6 mobile)
- Each card:
  - Background image (Unsplash)
  - Location name overlay at bottom
  - Country tag
  - Price badge
  - Hover: slide-up overlay with description + "View Details" button
- Destinations:
  1. Santorini, Greece - $1,299
  2. Bali, Indonesia - $899
  3. Machu Picchu, Peru - $1,599
  4. Paris, France - $1,199
  5. Maldives - $2,499
  6. Tokyo, Japan - $1,799

### 4.4 Why Choose Us
- Section title: "Why Choose Wanderlust Travels"
- 4 feature cards in row
- Each card:
  - SVG icon (48px, orange)
  - Feature title (bold)
  - Brief description
- Features:
  1. Expert Local Guides - "Knowledgeable guides who bring each destination to life"
  2. Best Price Guarantee - "Competitive pricing with price match promise"
  3. 24/7 Support - "Round-the-clock assistance wherever you are"
  4. Small Group Tours - "Intimate groups of 12 or fewer for personalized experiences"

### 4.5 Tour Types
- Section title: "Explore Tour Types"
- 4 category cards in 2x2 grid
- Each card:
  - Full background image
  - Dark gradient overlay
  - Category name overlay at bottom
- Categories:
  1. Beach Vacations - tropical paradise imagery
  2. Adventure Tours - hiking/climbing imagery
  3. Cultural Experiences - temples/museums imagery
  4. Luxury Getaways - upscale resort imagery

### 4.6 Featured Tour Package
- Split layout (image left 55%, content right 45%)
- Featured badge
- Tour: "Bali Paradise: 7 Days of Discovery"
- Duration: 7 Days / 6 Nights
- Price: $1,899 per person
- Includes list (checkmark icons)
- Day-by-day itinerary preview (collapsible)
- Highlights list
- "Book This Tour" CTA button (orange, large)

### 4.7 Testimonials
- Section title: "What Travelers Say"
- 3 testimonial cards
- Each card:
  - Traveler photo (circular, 64px)
  - Star rating (5 stars, gold)
  - Quote text (italic)
  - Name (bold)
  - Trip taken (muted text)
- Testimonials:
  1. Sarah M. - "The trip of a lifetime..."
  2. James & Linda K. - "Perfectly organized..."
  3. Michael R. - "Best travel experience..."

### 4.8 Travel Tips Blog
- Section title: "Travel Tips & Inspiration"
- 3 blog preview cards
- Each card:
  - Thumbnail image (16:9)
  - Category tag (pill badge)
  - Title
  - Read time
- "View All Articles" link button
- Blog topics:
  1. "10 Packing Tips for Long Trips" - 5 min read
  2. "Best Street Food Destinations 2026" - 4 min read
  3. "How to Travel on a Budget" - 6 min read

### 4.9 Newsletter Section
- Full-width background image (mountains/travel)
- Dark gradient overlay
- Centered content
- Headline: "Get Travel Inspiration"
- Subtext: "Subscribe for exclusive deals and travel tips"
- Email input with inline "Subscribe" button

### 4.10 Contact Section
- Two-column layout
- Left column (contact info):
  - Heading: "Get in Touch"
  - Address with icon
  - Phone with icon
  - Email with icon
  - Map placeholder (gray rectangle with map pin icon)
- Right column (contact form):
  - Name input
  - Email input
  - Subject dropdown
  - Message textarea
  - "Send Message" button

### 4.11 Footer
- Dark background (#0F172A)
- 4 columns:
  1. Logo + tagline + social icons
  2. Quick Links
  3. Destinations
  4. Contact Info
- Payment icons row
- Copyright line

## 5. Interactions & Animations

### Navigation
- Smooth scroll to sections on nav link click
- Mobile menu toggle with animation

### Hero
- Parallax background effect (CSS transform on scroll)
- Scroll indicator bounce animation

### Destination Cards
- Hover: translateY(-8px), box-shadow increase
- Overlay slides up from bottom

### Buttons
- Hover: brightness increase, slight scale(1.02)
- Active: scale(0.98)

### Scroll Animations
- Elements fade in and slide up on scroll (Intersection Observer)
- Staggered animation for grid items

## 6. Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 7. Assets
- All icons: Inline SVG
- Images: Unsplash URLs (curated travel photography)
- Fonts: Google Fonts (Playfair Display, Inter, Poppins)

## 8. Acceptance Criteria
- [ ] All 11 sections present and styled per spec
- [ ] Navigation sticky with scroll effect
- [ ] Mobile hamburger menu functional
- [ ] Hero parallax effect working
- [ ] Destination cards with hover effects
- [ ] All forms have proper inputs
- [ ] Fully responsive at all breakpoints
- [ ] Smooth scroll behavior
- [ ] Scroll animations on elements
- [ ] No external dependencies except CDN