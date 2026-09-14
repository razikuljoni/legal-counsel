# System Architecture & Technical Specifications

## 1. Executive Summary

Legal Counsel platform delivers elite corporate legal consultation, practice area presentation, and AI-enabled legal query evaluation. Built on Next.js 15 App Router architecture, leveraging React 19 concurrent features, Tailwind CSS v4 styling engine, and Google Gemini AI API integration.

---

## 2. Technical Stack & Dependencies

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 15.4.9 (App Router) | SSR/SSG rendering, routing, font optimization |
| **Runtime** | React 19.2.1 | Component tree rendering, concurrent transition primitives |
| **Styling** | Tailwind CSS v4.1 | Utility-first styling with PostCSS 8 integration |
| **Type System** | TypeScript 5.9.3 | Strict type definitions and interfaces |
| **AI Integration** | Google Gemini API (`@google/genai`) | Natural language processing for legal context analysis |
| **Icons & Motion** | Lucide React, Motion | Vector icons and client-side micro-animations |

---

## 3. Application Design & Data Flow

```
[ User Client / Browser ]
        │
        ▼
[ Next.js 15 App Router Layout ] (app/layout.tsx)
   ├─► Font Subsetting (Cinzel, Playfair Display, Plus Jakarta Sans)
   ├─► Viewport Metadata Definition
   └─► Custom Cursor & Global Interactive Shell (components/CustomCursor.tsx)
        │
        ▼
[ Page View Layer ] (app/page.tsx)
   ├─► Navigation Shell (components/Navigation.tsx)
   ├─► Hero Section (components/HeroSection.tsx)
   ├─► Practice Areas Grid (components/PracticeAreas.tsx)
   ├─► Parallax Section (components/ParallaxQuoteSection.tsx)
   ├─► Masonry Insights (components/MasonryContentGrid.tsx)
   ├─► Contact Section (components/ContactSection.tsx)
   └─► Consultation Modal (components/ConsultationModal.tsx)
        │
        ▼ (Async API Call)
[ Google Gemini AI API Integration ]
```

---

## 4. Key Performance & Optimization Rules

1. **Font Loading**: `next/font/google` used with `display: swap` to prevent layout shifts.
2. **Image Optimization**: All images leverage `next/image` with unoptimized static path strategies for fast CDN asset delivery.
3. **Pure Rendering**: State updates isolated from render loops via lazy initialization and handler-bound state mutations.
4. **Responsive Layouts**: Breakpoint-based layouts tested across desktop, tablet, and mobile device viewports.
