# NLPvision Website - Sitemap

## 📍 Current Site Structure

### Public Pages

#### **Homepage** `/`
- **URL**: https://nlpvisions.com/
- **Sections**:
  - Hero Section (CTA: Join Waitlist)
  - Products Section (How It Works - 3 Steps)
  - Features Grid (Real-time Translation, 100+ Languages, etc.)
  - About Section (Founder Story)
  - Pricing Section (Early Access Info)
  - Footer

---

## 📋 Planned Pages (Future)

### Core Pages
- `/about` - About NLPvision & Founder Story
- `/features` - Detailed Features & Capabilities
- `/pricing` - Pricing Plans & Options
- `/contact` - Contact Form & Support

### Legal Pages
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/cookies` - Cookie Policy
- `/gdpr` - GDPR Compliance

### Help & Support
- `/help` - Help Center & Documentation
- `/faq` - Frequently Asked Questions
- `/report-bug` - Bug Reporting Form
- `/feature-request` - Feature Request Form

### Product Updates
- `/changelog` - Product Updates & Release Notes
- `/roadmap` - Product Roadmap
- `/blog` - Blog & Articles

---

## 🎯 URL Structure Convention

```
Root Domain: nlpvisions.com
├── / (Homepage)
├── /about
├── /features
├── /pricing
├── /contact
├── /help
│   ├── /help/faq
│   └── /help/getting-started
├── /legal
│   ├── /legal/privacy
│   ├── /legal/terms
│   └── /legal/cookies
└── /blog
    └── /blog/[slug]
```

---

## 🔗 Current Navigation Links

### Header (Navbar)
- Features → `#features` (scroll to section)
- How It Works → `#how-it-works` (scroll to section)
- About → `#about` (scroll to section)
- Pricing → `#pricing` (scroll to section)
- Join Waitlist → `mailto:toan@nlpvisions.com`

### Footer Links

#### Product
- Features → `#features`
- Pricing → `#pricing` (currently placeholder)
- Changelog → `#` (currently placeholder)

#### Support
- Help Center → `#` (currently placeholder)
- Contact Us → `mailto:toan@nlpvisions.com`
- Report Bug → `#` (currently placeholder)
- Feature Request → `#` (currently placeholder)

#### Legal
- Privacy Policy → `#` (currently placeholder)
- Terms of Service → `#` (currently placeholder)
- Cookie Policy → `#` (currently placeholder)
- GDPR → `#` (currently placeholder)

#### Social Media
- Twitter/X → `#` (currently placeholder)
- Instagram → `#` (currently placeholder)
- Discord → `#` (currently placeholder)
- YouTube → `#` (currently placeholder)

---

## 🚀 SEO Metadata

### Current Homepage SEO
```
Title: NLPvision — Real-time Screen Translation for Manga & Gaming
Description: NLPvision translates manga, games, and on-screen content
in real-time using Advanced AI. Built for readers and gamers who want
zero-friction language translation. Early access 2026.
```

### Recommended Meta Tags
- `og:title` - Open Graph title for social sharing
- `og:description` - Open Graph description
- `og:image` - Social sharing preview image
- `twitter:card` - Twitter card type
- `twitter:title` - Twitter title
- `twitter:description` - Twitter description

---

## 📱 Component Structure

### Landing Page Components
```
apps/web/
├── app/
│   ├── layout.tsx (Root layout with fonts & analytics)
│   ├── page.tsx (Homepage)
│   └── globals.css (Global styles)
└── components/
    └── landing/
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── ProductsSection.tsx (How It Works)
        ├── FeaturesGrid.tsx
        ├── AboutSection.tsx (Founder Story)
        ├── PricingSection.tsx
        ├── PhoneMockup.tsx
        └── Footer.tsx
```

---

## 🎨 Current Sections (Homepage)

1. **Hero Section**
   - Headline: "Translate Your Screen Instantly"
   - Subheadline: Real-time screen translation for manga & gaming
   - Status: 🚧 Prototype · Android · Early Access 2026
   - CTA: Join the Waitlist

2. **Products Section (How It Works)**
   - Step 1: Select Screen Area
   - Step 2: AI Recognition
   - Step 3: Instant Translation

3. **Features Grid**
   - Real-time Translation
   - 100+ Languages
   - Advanced OCR
   - Floating Bubble
   - History & Export

4. **About Section**
   - Founder story
   - Product vision
   - Contact information

5. **Pricing Section**
   - Early access information
   - Waitlist CTA

6. **Footer**
   - Product links
   - Support links
   - Legal links
   - Social media icons

---

## 🔄 Next Steps for Sitemap Expansion

1. **Create additional pages** for:
   - About page (expand founder section)
   - Features page (detailed feature breakdown)
   - Help/FAQ page
   - Privacy & Terms pages

2. **Update sitemap.xml** when new pages are added

3. **Submit sitemap to**:
   - Google Search Console
   - Bing Webmaster Tools

4. **Add robots.txt** for SEO crawling rules

---

*Generated: 2026-02-24*
*Project: NLPvision Website*
*Framework: Next.js 15 (App Router)*
