# Legal Counsel AI — Premium Corporate & Litigation Legal Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.4.9-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A modern, high-performance web platform designed for premier corporate legal counsel, litigation strategies, compliance management, and AI-powered legal document synthesis. Built with Next.js 15 App Router, React 19, Tailwind CSS v4, and Google Gemini AI integration.

---

## 🏛️ Features

- **Interactive Consultation Scheduling**: Custom multi-step legal inquiry modal with real-time field validation and context passing.
- **AI-Powered Legal Assistant**: Integrates Google Gemini AI (`@google/genai`) for instant legal query contextualization and analysis.
- **Interactive Practice Area Showcase**: Masonry and interactive card layout highlighting Corporate Governance, Commercial Litigation, M&A, Intellectual Property, and Regulatory Compliance.
- **Dynamic Case & Insights Grid**: Filterable legal insights, whitepapers, and landmark litigation summaries.
- **Custom UI System**: High-end typography (Cinzel, Playfair Display, Plus Jakarta Sans), smooth micro-interactions, responsive cursor controls, and accessible dark-themed aesthetics.
- **Production Ready**: Zero lint errors, full TypeScript type safety, optimal web vitals, and Next.js 15 font optimization.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.9 (App Router)
- **UI Library**: React 19.2.1 & React DOM 19.2.1
- **Styling**: Tailwind CSS v4 with PostCSS & `@tailwindcss/postcss`
- **Icons & Motion**: Lucide React (`lucide-react`) & Motion (`motion`)
- **AI Service**: `@google/genai` (Google Gemini 2.4 API)
- **Form & Validation**: `react-hook-form` & `@hookform/resolvers`
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`
- **Language**: TypeScript 5.9

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `>= 18.18.0` (LTS recommended)
- **Package Manager**: `pnpm`, `npm`, or `yarn`
- **Gemini API Key**: Obtain from [Google AI Studio](https://aistudio.google.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/legal-counsel.git
   cd legal-counsel
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local` and add your Gemini API Key:
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local`:
   ```env
   GEMINI_API_KEY="your_actual_gemini_api_key_here"
   APP_URL="http://localhost:3000"
   ```

4. **Run Development Server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `next dev` | Launches local development server on port 3000 |
| `build` | `next build` | Builds optimized production bundle |
| `start` | `next start` | Starts production HTTP server |
| `lint` | `eslint .` | Runs ESLint type & syntax check across codebase |
| `typecheck` | `tsc --noEmit` | Validates TypeScript types strictly |

---

## 📁 Architecture & Directory Layout

```
legal-counsel/
├── app/                  # Next.js App Router pages and global layout
│   ├── favicon.ico
│   ├── globals.css       # Tailwind CSS v4 directives & custom themes
│   ├── layout.tsx        # Main application root layout & google font configuration
│   └── page.tsx          # Homepage view composition
├── components/           # UI components
│   ├── ConsultationModal.tsx
│   ├── ContactSection.tsx
│   ├── CustomCursor.tsx
│   ├── HeroSection.tsx
│   ├── MasonryContentGrid.tsx
│   ├── Navigation.tsx
│   ├── ParallaxQuoteSection.tsx
│   └── PracticeAreas.tsx
├── hooks/                # Custom React hooks (e.g. use-mobile.ts)
├── lib/                  # Utility functions and shared helper modules
├── docs/                 # Documentation (ARCHITECTURE.md, DEPLOYMENT.md)
├── public/               # Static assets & images
├── .env.example          # Environment variable template
├── next.config.ts        # Next.js runtime configuration
└── package.json          # Project dependencies & scripts
```

---

## 🌐 Production Deployment

### Option A: Vercel (Recommended)

1. Push your repository to GitHub.
2. Import project into Vercel Dashboard.
3. Add `GEMINI_API_KEY` under Environment Variables in Project Settings.
4. Click **Deploy**.

### Option B: Cloud Run / Docker

1. Build container image:
   ```bash
   docker build -t legal-counsel .
   ```
2. Run container:
   ```bash
   docker run -p 3000:3000 -e GEMINI_API_KEY="your_api_key" legal-counsel
   ```

Refer to [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for detailed environment configuration and hosting guides.

---

## 📄 Governance & License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
