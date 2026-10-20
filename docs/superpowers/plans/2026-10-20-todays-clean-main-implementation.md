# 오늘의 청소 메인 페이지 | Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully functional, responsive cleaning service homepage with 10 sections (Hero, Service, WhyToday, Process, Portfolio, Review, BrandStory, FAQ, CTA, Footer) in Next.js with GSAP animations and Tailwind styling.

**Architecture:**
- Component-driven with 10 section components + 7 common UI components (Header, Footer, Button, Card, Badge, Modal, Accordion)
- Static data (services, portfolio, reviews, FAQs, company info) in `src/data/`
- Tailwind CSS for styling + GSAP for scroll animations
- Mobile-first responsive design (320px → 1440px)
- Three-phase delivery: structure → sections → animations/polish

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, GSAP, React (hooks for state)

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout + Header
│   ├── page.tsx                # Main page (sections assembly)
│   └── globals.css             # Base styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with video + CTA
│   │   ├── Service.tsx         # 4-card grid + maintenance banner
│   │   ├── WhyToday.tsx        # 3-point value props
│   │   ├── Process.tsx         # 5-step timeline
│   │   ├── Portfolio.tsx       # Tab filter + card grid
│   │   ├── Review.tsx          # Stats + review cards
│   │   ├── BrandStory.tsx      # Image + text (2-col layout)
│   │   ├── FAQ.tsx             # Accordion
│   │   ├── CTA.tsx             # Final CTA banner
│   │   └── MobileFixedButtons.tsx # Mobile-only fixed buttons
│   └── common/
│       ├── Header.tsx          # Fixed top nav
│       ├── Footer.tsx          # Footer with info/links
│       ├── Button.tsx          # Reusable button component
│       ├── Card.tsx            # Generic card wrapper
│       ├── Badge.tsx           # Tag/badge component
│       ├── Modal.tsx           # Inquiry form modal (stub)
│       └── Accordion.tsx       # FAQ accordion item
├── data/
│   ├── services.ts             # Service card data
│   ├── portfolio.ts            # Portfolio case data
│   ├── reviews.ts              # Review data
│   ├── faqs.ts                 # FAQ data
│   └── company.ts              # Company contact info
├── lib/
│   └── utils.ts                # Utility functions (classNames, etc.)
└── styles/
    └── variables.css           # Color/spacing Tailwind variables
```

---

## PHASE 1: 기본 구조 (Day 1~2)

### Task 1: Next.js 프로젝트 초기화 + Tailwind/GSAP 설정

**Files:**
- Create: `package.json` (updated with dependencies)
- Create: `tsconfig.json`
- Create: `next.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `.env.local` (stub)

**Setup:**

- [ ] **Step 1: Initialize Next.js project with TypeScript**

```bash
cd "D:\작업실\study\자작"
npx create-next-app@latest . --typescript --tailwind --app --eslint --import-alias "@/*" --skip-git
```

Expected output: Files created (package.json, tsconfig.json, next.config.js, tailwind.config.js, etc.)

- [ ] **Step 2: Install additional dependencies (GSAP, strict versions)**

```bash
npm install --save-exact gsap@3.12.2
npm install --save-exact --save-dev @types/node@20.10.0 @types/react@18.2.37
```

Verify: `npm list gsap` shows 3.12.2

- [ ] **Step 3: Verify dev server runs**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json tsconfig.json next.config.js tailwind.config.js postcss.config.js .eslintrc.json
git commit -m "chore: initialize Next.js 15 + Tailwind + GSAP"
```

---

### Task 2: 색상/타이포그래피 Tailwind 변수 설정

**Files:**
- Create: `src/styles/variables.css`
- Modify: `tailwind.config.js` (theme extension)

- [ ] **Step 1: Create Tailwind color variables**

Create `src/styles/variables.css`:
```css
@layer base {
  :root {
    --color-white: #FFFFFF;
    --color-navy: #1E3A5F;
    --color-sky: #E8F0F7;
    --color-text-dark: #2C3E50;
    --color-text-muted: #8B95A5;
    --color-border: #E0E8F0;
  }
}

@layer components {
  .text-h1 {
    @apply text-4xl md:text-5xl lg:text-6xl font-bold leading-tight;
  }

  .text-h2 {
    @apply text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight;
  }

  .text-h3 {
    @apply text-xl md:text-2xl font-semibold leading-relaxed;
  }

  .text-h4 {
    @apply text-lg font-semibold leading-relaxed;
  }

  .text-body {
    @apply text-base leading-relaxed;
  }

  .text-caption {
    @apply text-sm leading-relaxed;
  }

  .text-small {
    @apply text-xs leading-relaxed;
  }
}
```

- [ ] **Step 2: Extend tailwind.config.js with custom theme**

Modify `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A5F',
        sky: '#E8F0F7',
        'text-dark': '#2C3E50',
        'text-muted': '#8B95A5',
        border: '#E0E8F0',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 3: Import variables in globals.css**

Modify `src/app/globals.css`:
```css
@import '../styles/variables.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-text-dark;
}

a {
  @apply text-navy hover:text-navy/80 transition-colors duration-200;
}
```

- [ ] **Step 4: Commit**

```bash
git add src/styles/variables.css tailwind.config.js src/app/globals.css
git commit -m "style: add Tailwind color/typography system"
```

---

### Task 3: 폴더 구조 생성 + 유틸리티 함수

**Files:**
- Create: `src/lib/utils.ts`
- Create: `src/data/company.ts`
- Create: Empty directories

- [ ] **Step 1: Create utility functions**

Create `src/lib/utils.ts`:
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatPercentage(num: number): string {
  return Math.round(num) + '%';
}
```

Install clsx and tailwind-merge:
```bash
npm install --save-exact clsx@2.0.0 tailwind-merge@2.2.0
```

- [ ] **Step 2: Create company data file**

Create `src/data/company.ts`:
```typescript
export const company = {
  name: '오늘의 청소',
  representative: '김오늘',
  phone: '010-1234-5678',
  email: 'todaysclean@abc.com',
  address: '서울특별시 강남구 테헤란로 123',
  businessHours: '평일 09:00 ~ 18:00 (주말 상담)',
  businessRegistration: '123-45-67890',
  socialLinks: {
    facebook: 'https://facebook.com/todaysclean',
    instagram: 'https://instagram.com/todaysclean',
    naver: 'https://blog.naver.com/todaysclean',
  },
} as const;
```

- [ ] **Step 3: Create folder structure**

```bash
mkdir -p src/components/sections
mkdir -p src/components/common
mkdir -p src/data
mkdir -p src/lib
mkdir -p src/styles
mkdir -p public/images
mkdir -p public/videos
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/utils.ts src/data/company.ts
git commit -m "feat: add utility functions and company data"
```

---

### Task 4: Header 컴포넌트

**Files:**
- Create: `src/components/common/Header.tsx`

- [ ] **Step 1: Create Header component**

Create `src/components/common/Header.tsx`:
```typescript
'use client';

import Link from 'next/link';
import { company } from '@/data/company';
import Button from './Button';

export default function Header() {
  const menuItems = ['About', 'Service', 'Portfolio', 'Review', 'FAQ', 'Contact'];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-border z-40 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg text-navy">
          {company.name}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-sm text-text-dark hover:text-navy transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button variant="primary" size="sm" onClick={() => window.location.href = '#contact'}>
          무료 견적
        </Button>

        {/* Mobile Menu (stub) */}
        <button className="md:hidden p-2 text-navy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/Header.tsx
git commit -m "feat: create Header component with navigation"
```

---

### Task 5: Button 컴포넌트 (재사용)

**Files:**
- Create: `src/components/common/Button.tsx`

- [ ] **Step 1: Create Button component**

Create `src/components/common/Button.tsx`:
```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asLink = false,
  href = '#',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all duration-200 rounded-md inline-block';

  const variantStyles = {
    primary: 'bg-navy text-white hover:bg-navy/90 active:scale-95',
    secondary: 'bg-sky text-navy hover:bg-sky/80',
    ghost: 'text-navy hover:bg-sky/50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (asLink) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/Button.tsx
git commit -m "feat: create reusable Button component"
```

---

### Task 6: Footer 컴포넌트

**Files:**
- Create: `src/components/common/Footer.tsx`

- [ ] **Step 1: Create Footer component**

Create `src/components/common/Footer.tsx`:
```typescript
import Link from 'next/link';
import { company } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{company.name}</h3>
            <p className="text-sm text-white/80 mb-2">대표: {company.representative}</p>
            <p className="text-sm text-white/80 mb-2">주소: {company.address}</p>
            <p className="text-sm text-white/80 mb-2">영업시간: {company.businessHours}</p>
            <p className="text-sm text-white/80">연락처: {company.phone}</p>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-semibold mb-4">메뉴</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">회사소개</a></li>
              <li><a href="#service" className="text-white/80 hover:text-white transition-colors">서비스</a></li>
              <li><a href="#portfolio" className="text-white/80 hover:text-white transition-colors">작업사례</a></li>
              <li><a href="#review" className="text-white/80 hover:text-white transition-colors">고객후기</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* SNS & Legal */}
          <div>
            <h4 className="font-semibold mb-4">연결</h4>
            <div className="flex gap-4 mb-8">
              <a href={company.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                Facebook
              </a>
              <a href={company.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                Instagram
              </a>
              <a href={company.socialLinks.naver} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                Naver
              </a>
            </div>
            <div className="text-xs space-y-1 text-white/60">
              <p><a href="#" className="hover:text-white transition-colors">이용약관</a> · <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></p>
              <p>사업자등록번호: {company.businessRegistration}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>Copyright 2026 {company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/Footer.tsx
git commit -m "feat: create Footer component with company info"
```

---

### Task 7: Root Layout + Main Page 뼈대

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/app/page.tsx`

- [ ] **Step 1: Update root layout with Header**

Modify `src/app/layout.tsx`:
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '오늘의 청소 | 청소 서비스',
  description: '어떤 공간이든, 끝은 같은 기준으로. 18평부터 800평까지 맡겨주세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Create main page skeleton**

Create `src/app/page.tsx`:
```typescript
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      {/* Sections will be added here in Phase 2 */}
      <section id="hero" className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-h2">개발 중입니다</h1>
          <p className="text-text-muted mt-4">메인 페이지 섹션들이 추가됩니다.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Test dev server**

```bash
npm run dev
```

Expected: Page loads with Header + skeleton content + Footer

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: setup root layout and main page skeleton"
```

---

## PHASE 2: 주요 섹션 (Day 3~7)

### Task 8: 데이터 파일들 생성 (services, portfolio, reviews, faqs)

**Files:**
- Create: `src/data/services.ts`
- Create: `src/data/portfolio.ts`
- Create: `src/data/reviews.ts`
- Create: `src/data/faqs.ts`

- [ ] **Step 1: Create services data**

Create `src/data/services.ts`:
```typescript
export interface Service {
  id: string;
  name: string;
  description: string;
  image: '/images/service-move-in.jpg'; // Placeholder
  items: string[];
}

export const services: Service[] = [
  {
    id: 'move-in',
    name: '입주·이사 청소',
    description: '새 출발 전에, 실내 전체 먼지와 오염부터 비웁니다.',
    image: '/images/service-move-in.jpg',
    items: ['창틀·몰딩·벽면', '주방·욕실 집중 청소', '세탁공간·현관'],
  },
  {
    id: 'residential',
    name: '거주 공간 청소',
    description: '살고 있는 그대로, 구석 미세먼지까지 소독합니다.',
    image: '/images/service-residential.jpg',
    items: ['거실·방·주방·욕실', '먼지 제거 및 소독', '창틀·베란다'],
  },
  {
    id: 'commercial',
    name: '사무실·상업 공간 청소',
    description: '영업과 업무에 방해 없이, 마감 후 정리합니다.',
    image: '/images/service-commercial.jpg',
    items: ['바닥·유리', '책상·진열대·집기', '화장실·탕비실 위생'],
  },
  {
    id: 'construction',
    name: '건축·준공 청소',
    description: '공사가 끝난 자리에서 분진과 페인트 자국을 지웁니다.',
    image: '/images/service-construction.jpg',
    items: ['미세먼지·분진 제거', '시멘트·페인트 자국', '창호·유리'],
  },
];
```

- [ ] **Step 2: Create portfolio data**

Create `src/data/portfolio.ts`:
```typescript
export type PortfolioCategory = 'all' | 'move-in' | 'residential' | 'commercial' | 'construction' | 'maintenance';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  size: string;
  duration: string;
  description: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: '1',
    title: '판교 신축 오피스 준공 청소',
    category: 'construction',
    image: '/images/portfolio-1.jpg',
    size: '800평',
    duration: '2일',
    description: '공사 후 남은 분진과 잔여물을 정리했습니다.',
  },
  {
    id: '2',
    title: '하남 상가 건축 준공 청소',
    category: 'construction',
    image: '/images/portfolio-2.jpg',
    size: '120평',
    duration: '2일',
    description: '상가 오픈 전 공간 완성도를 높였습니다.',
  },
  {
    id: '3',
    title: '강동구 학원 정기 관리',
    category: 'maintenance',
    image: '/images/portfolio-3.jpg',
    size: '70평',
    duration: '주 2회',
    description: '학생들이 쓰는 공간을 위생 중심으로 관리합니다.',
  },
  {
    id: '4',
    title: '서초구 신축 아파트 입주 청소',
    category: 'move-in',
    image: '/images/portfolio-4.jpg',
    size: '32평',
    duration: '1일',
    description: '새로운 시작을 위한 입주 공간을 준비했습니다.',
  },
];
```

- [ ] **Step 3: Create reviews data**

Create `src/data/reviews.ts`:
```typescript
export type ReviewTag = 'maintenance' | 'commercial' | 'office';

export interface Review {
  id: string;
  title: string;
  tag: ReviewTag;
  content: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    title: '더 안심되는 병원 대기 공간',
    tag: 'maintenance',
    content: '환자분들이 이용하는 공간이라 위생이 가장 중요했는데, 꾸준히 관리받으니 안심이 됩니다.',
  },
  {
    id: '2',
    title: '작지만 더 쾌적해진 카페 공간',
    tag: 'commercial',
    content: '바닥과 테이블, 카운터 주변까지 정리되어 손님이 머무는 공간에 대한 부담이 줄었습니다.',
  },
  {
    id: '3',
    title: '깔끔하게 정돈된 회의실',
    tag: 'office',
    content: '유리문과 창가 주변까지 정리되어 방문객 응대 공간으로도 적합해졌습니다.',
  },
];

export const reviewStats = {
  satisfaction: 99,
  totalServices: 12000,
  reuseRate: 98,
};
```

- [ ] **Step 4: Create FAQs data**

Create `src/data/faqs.ts`:
```typescript
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: '어떤 공간을 맡길 수 있나요?',
    answer: '사무실, 상업 공간, 주거 공간, 입주·이사 공간, 준공 후 현장 등 다양한 공간을 청소합니다. 공간 유형과 특성에 맞춰 맞춤 서비스를 제공합니다.',
  },
  {
    id: '2',
    question: '견적은 어떻게 받나요?',
    answer: '공간 유형, 면적, 오염도, 희망 일정에 따라 견적이 달라집니다. 상담 요청을 남겨주시면 확인 후 맞춤 견적을 안내드립니다.',
  },
  {
    id: '3',
    question: '청소 시간은 얼마나 걸리나요?',
    answer: '공간 크기와 범위에 따라 다르지만, 소형 공간은 반나절, 중대형 공간은 하루 이상 걸릴 수 있습니다.',
  },
  {
    id: '4',
    question: '예약 변경이나 취소는 어떻게 하나요?',
    answer: '작업 일정 전까지 상담 채널로 요청하실 수 있습니다. 일정이 임박한 경우 별도 안내가 필요할 수 있습니다.',
  },
  {
    id: '5',
    question: '청소 후 불만족스러우면요?',
    answer: '확인 과정에서 미흡한 부분이 있으면 기준에 따라 재확인하고 보완해 드립니다.',
  },
];
```

- [ ] **Step 5: Commit**

```bash
git add src/data/services.ts src/data/portfolio.ts src/data/reviews.ts src/data/faqs.ts
git commit -m "feat: create static data files (services, portfolio, reviews, FAQs)"
```

---

### Task 9: Card 컴포넌트 + Badge 컴포넌트

**Files:**
- Create: `src/components/common/Card.tsx`
- Create: `src/components/common/Badge.tsx`

- [ ] **Step 1: Create Card component**

Create `src/components/common/Card.tsx`:
```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: React.ReactNode;
}

export default function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-white p-6',
        hover && 'hover:shadow-lg hover:scale-102 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Create Badge component**

Create `src/components/common/Badge.tsx`:
```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outlined';
  children: React.ReactNode;
}

export default function Badge({ variant = 'primary', className, children, ...props }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-navy text-white',
    secondary: 'bg-sky text-navy',
    outlined: 'border border-navy text-navy',
  };

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-xs font-semibold',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/common/Card.tsx src/components/common/Badge.tsx
git commit -m "feat: create Card and Badge reusable components"
```

---

### Task 10: Hero 섹션

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `public/videos/hero.mp4` (placeholder)

- [ ] **Step 1: Create Hero component**

Create `src/components/sections/Hero.tsx`:
```typescript
'use client';

import { useEffect } from 'react';
import Button from '@/components/common/Button';
import { company } from '@/data/company';

export default function Hero() {
  useEffect(() => {
    // Fade-in animation handled by CSS
    const hero = document.getElementById('hero-content');
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transition = 'opacity 0.8s ease-in';
      setTimeout(() => {
        hero.style.opacity = '1';
      }, 100);
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div id="hero-content" className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          어떤 공간이든,<br />
          끝은 같은 기준으로
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/90">
          18평 오피스텔부터 800평 신축 오피스까지.<br />
          상담부터 사후 관리까지 5단계로 진행합니다.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            무료 견적 문의
          </Button>
          <a href={`tel:${company.phone}`} className="inline-block">
            <Button variant="secondary" size="lg">
              {company.phone} 전화 상담
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add placeholder video (stub)**

```bash
# Create placeholder video file reference
touch public/videos/hero.mp4
echo "Placeholder video file" > public/videos/.gitkeep
```

- [ ] **Step 3: Create hero poster image reference**

```bash
touch public/images/.gitkeep
```

- [ ] **Step 4: Update main page to include Hero**

Modify `src/app/page.tsx`:
```typescript
import Hero from '@/components/sections/Hero';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Other sections will be added here */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/Hero.tsx src/app/page.tsx
git commit -m "feat: create Hero section with video and CTA buttons"
```

---

### Task 11: Service 섹션

**Files:**
- Create: `src/components/sections/Service.tsx`

- [ ] **Step 1: Create Service component**

Create `src/components/sections/Service.tsx`:
```typescript
'use client';

import Image from 'next/image';
import { services } from '@/data/services';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

export default function Service() {
  return (
    <section id="service" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">맡기실 공간을 골라주세요</h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col overflow-hidden">
              {/* Placeholder for Image */}
              <div className="w-full h-48 bg-sky flex items-center justify-center mb-4 rounded">
                <span className="text-text-muted">이미지: {service.name}</span>
              </div>

              {/* Service Info */}
              <h3 className="text-h4 mb-2">{service.name}</h3>
              <p className="text-text-muted text-sm mb-4">{service.description}</p>

              {/* Service Items */}
              <ul className="space-y-2 text-sm">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-navy font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Maintenance Banner */}
        <div className="bg-sky rounded-lg p-8 mb-8 text-center">
          <p className="text-text-dark">
            <strong>정기 관리:</strong> 사무실, 매장, 학원은 주간·월간 정기 방문으로 맡기세요.
            공간에 맞춘 스케줄과 위생 점검이 함께 갑니다.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            우리 공간 작업 범위 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update main page**

Modify `src/app/page.tsx`:
```typescript
import Hero from '@/components/sections/Hero';
import Service from '@/components/sections/Service';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      {/* Other sections will be added here */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Service.tsx src/app/page.tsx
git commit -m "feat: create Service section with 4-card grid and maintenance banner"
```

---

### Task 12: WhyToday 섹션

**Files:**
- Create: `src/components/sections/WhyToday.tsx`

- [ ] **Step 1: Create WhyToday component**

Create `src/components/sections/WhyToday.tsx`:
```typescript
'use client';

export default function WhyToday() {
  const points = [
    {
      id: 'range',
      title: '공간마다 정해진 작업 범위',
      description:
        '집, 사무실, 매장, 공사 현장은 닦는 곳이 다릅니다. 공간 유형별로 정해진 항목을 빠짐없이 작업합니다.',
      icon: '✓', // Will be SVG icon
    },
    {
      id: 'inspection',
      title: '고객과 함께하는 최종 점검',
      description:
        '작업이 끝나면 담당자가 고객님과 함께 공간을 둘러보며 확인합니다.',
      icon: '🔍',
    },
    {
      id: 'followup',
      title: '끝난 뒤에도 사후 관리',
      description:
        '확인 과정에서 미흡한 부분이 있으면 기준에 따라 재확인하고 보완합니다.',
      icon: '🛡️',
    },
  ];

  return (
    <section id="why-today" className="py-20 bg-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">청소가 끝나도 책임은 끝나지 않습니다</h2>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point) => (
            <div key={point.id} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center text-3xl">
                  {point.icon}
                </div>
              </div>
              <h3 className="text-h4 mb-4">{point.title}</h3>
              <p className="text-text-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update main page**

Modify `src/app/page.tsx`:
```typescript
import Hero from '@/components/sections/Hero';
import Service from '@/components/sections/Service';
import WhyToday from '@/components/sections/WhyToday';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyToday />
      {/* Other sections will be added here */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/WhyToday.tsx src/app/page.tsx
git commit -m "feat: create WhyToday section with 3-point value props"
```

---

### Task 13: Process 섹션 (5단계 타임라인)

**Files:**
- Create: `src/components/sections/Process.tsx`

- [ ] **Step 1: Create Process component**

Create `src/components/sections/Process.tsx`:
```typescript
'use client';

import Button from '@/components/common/Button';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: '상담 및 견적',
      description: '공간 유형, 면적, 오염도, 희망 일정을 듣고 맞춤 견적을 드립니다.',
    },
    {
      number: '02',
      title: '일정 확정',
      description: '원하시는 날짜와 시간에 맞춰 예약을 확정합니다.',
    },
    {
      number: '03',
      title: '전문 청소 진행',
      description: '공간과 소재에 맞는 장비와 세제로 작업합니다.',
    },
    {
      number: '04',
      title: '검수 및 확인',
      description: '고객님과 함께 최종 점검합니다.',
    },
    {
      number: '05',
      title: '사후 관리',
      description: '작업 이후에도 피드백을 받아 품질을 이어갑니다.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">문의부터 사후 관리까지 5단계</h2>
        </div>

        {/* Timeline - Desktop (Horizontal) */}
        <div className="hidden md:block">
          <div className="flex items-center gap-4 relative">
            {/* Background Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-navy/20" />

            {/* Steps */}
            <div className="flex w-full gap-4 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex-1 text-center">
                  {/* Number Circle */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-h4 mb-2">{step.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile (Vertical) */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold">
                  {step.number}
                </div>
                {idx < steps.length - 1 && <div className="w-1 h-12 bg-navy/20 mt-2" />}
              </div>

              {/* Content */}
              <div className="pb-4">
                <h4 className="text-h4 mb-2">{step.title}</h4>
                <p className="text-sm text-text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            예약 가능한 일정 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update main page**

Modify `src/app/page.tsx`:
```typescript
import Hero from '@/components/sections/Hero';
import Service from '@/components/sections/Service';
import WhyToday from '@/components/sections/WhyToday';
import Process from '@/components/sections/Process';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyToday />
      <Process />
      {/* Other sections will be added here */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Process.tsx src/app/page.tsx
git commit -m "feat: create Process section with 5-step timeline (desktop & mobile)"
```

---

### Task 14: Portfolio 섹션 (탭 필터 + 카드)

**Files:**
- Create: `src/components/sections/Portfolio.tsx`

- [ ] **Step 1: Create Portfolio component with tab filtering**

Create `src/components/sections/Portfolio.tsx`:
```typescript
'use client';

import { useState } from 'react';
import { portfolio, type PortfolioCategory } from '@/data/portfolio';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('all');

  const tabs: { value: PortfolioCategory; label: string }[] = [
    { value: 'all', label: '전체' },
    { value: 'move-in', label: '입주·이사' },
    { value: 'residential', label: '주거' },
    { value: 'commercial', label: '상업' },
    { value: 'construction', label: '준공' },
    { value: 'maintenance', label: '정기 관리' },
  ];

  const filteredPortfolio =
    activeTab === 'all' ? portfolio : portfolio.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">18평부터 800평까지, 직접 확인하세요</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.value
                  ? 'bg-navy text-white'
                  : 'bg-sky text-navy hover:bg-sky/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredPortfolio.map((item) => (
            <Card key={item.id}>
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-sky flex items-center justify-center mb-4 rounded">
                <span className="text-text-muted">{item.title}</span>
              </div>

              {/* Content */}
              <h4 className="text-h4 mb-2">{item.title}</h4>

              {/* Badges */}
              <div className="flex gap-2 mb-4">
                <Badge>{item.size}</Badge>
                <Badge variant="secondary">{item.duration}</Badge>
              </div>

              <p className="text-sm text-text-muted">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            작업사례 전체 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update main page**

Modify `src/app/page.tsx`:
```typescript
import Hero from '@/components/sections/Hero';
import Service from '@/components/sections/Service';
import WhyToday from '@/components/sections/WhyToday';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyToday />
      <Process />
      <Portfolio />
      {/* Other sections will be added here */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Portfolio.tsx src/app/page.tsx
git commit -m "feat: create Portfolio section with tab filtering and card grid"
```

---

### Task 15: Review 섹션 (통계 + 후기)

**Files:**
- Create: `src/components/sections/Review.tsx`

- [ ] **Step 1: Create Review component**

Create `src/components/sections/Review.tsx`:
```typescript
'use client';

import { useEffect, useState } from 'react';
import { reviews, reviewStats } from '@/data/reviews';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';

export default function Review() {
  const [displayedStats, setDisplayedStats] = useState({
    satisfaction: 0,
    totalServices: 0,
    reuseRate: 0,
  });

  useEffect(() => {
    // Counter animation
    const animateCounter = (target: number, key: keyof typeof displayedStats, duration = 1500) => {
      const start = 0;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (target - start) * progress);

        setDisplayedStats((prev) => ({
          ...prev,
          [key]: current,
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    animateCounter(reviewStats.satisfaction, 'satisfaction');
    setTimeout(() => animateCounter(reviewStats.totalServices, 'totalServices'), 200);
    setTimeout(() => animateCounter(reviewStats.reuseRate, 'reuseRate'), 400);
  }, []);

  const tagColorMap = {
    maintenance: 'primary',
    commercial: 'secondary',
    office: 'secondary',
  } as const;

  return (
    <section id="review" className="py-20 bg-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">다시 맡기겠다는 분이 98%입니다</h2>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
              {displayedStats.satisfaction}%
            </div>
            <p className="text-text-muted">고객 만족도</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
              {displayedStats.totalServices.toLocaleString()}건
            </div>
            <p className="text-text-muted">누적 서비스</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
              {displayedStats.reuseRate}%
            </div>
            <p className="text-text-muted">재이용 의사</p>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <Card key={review.id}>
              <h4 className="text-h4 mb-3">{review.title}</h4>
              <Badge
                variant={tagColorMap[review.tag]}
                className="mb-4"
              >
                {review.tag === 'maintenance' && '정기 관리'}
                {review.tag === 'commercial' && '상업 공간'}
                {review.tag === 'office' && '사무실'}
              </Badge>
              <blockquote className="text-sm text-text-muted italic border-l-4 border-navy pl-4">
                "{review.content}"
              </blockquote>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            후기 전체 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update main page**

Modify `src/app/page.tsx`:
```typescript
import Hero from '@/components/sections/Hero';
import Service from '@/components/sections/Service';
import WhyToday from '@/components/sections/WhyToday';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Review from '@/components/sections/Review';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyToday />
      <Process />
      <Portfolio />
      <Review />
      {/* Other sections will be added here */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Review.tsx src/app/page.tsx
git commit -m "feat: create Review section with stats counter and review cards"
```

---

### Task 16: CTA 섹션

**Files:**
- Create: `src/components/sections/CTA.tsx`

- [ ] **Step 1: Create CTA component**

Create `src/components/sections/CTA.tsx`:
```typescript
'use client';

import Button from '@/components/common/Button';
import { company } from '@/data/company';

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-h2 mb-4">청소할 날이 정해졌다면, 견적부터</h2>
        <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
          공간 유형과 면적, 희망 일정만 알려주세요.<br />
          확인 후 맞춤 견적을 안내드립니다.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              // Modal would be opened here
              alert('견적 문의 모달이 열립니다. (구현 예정)');
            }}
          >
            무료 견적 문의
          </Button>
          <a href={`tel:${company.phone}`} className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              {company.phone} 전화 상담
            </Button>
          </a>
          <a href={`mailto:${company.email}`} className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              이메일로 문의하기
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update main page**

Modify `src/app/page.tsx`:
```typescript
import Hero from '@/components/sections/Hero';
import Service from '@/components/sections/Service';
import WhyToday from '@/components/sections/WhyToday';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Review from '@/components/sections/Review';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyToday />
      <Process />
      <Portfolio />
      <Review />
      <CTA />
      {/* Other sections will be added here */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CTA.tsx src/app/page.tsx
git commit -m "feat: create CTA section with final call-to-action buttons"
```

---

## PHASE 3: 마무리 (Day 8~10)

### Task 17: BrandStory 섹션

**Files:**
- Create: `src/components/sections/BrandStory.tsx`

- [ ] **Step 1: Create BrandStory component**

Create `src/components/sections/BrandStory.tsx`:
```typescript
'use client';

export default function BrandStory() {
  return (
    <section id="brand-story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="w-full aspect-square bg-sky rounded-lg flex items-center justify-center">
              <span className="text-text-muted">팀 사진 이미지</span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-h2 mb-6">오늘 맡긴 공간, 내일 바로 쓰도록</h2>
            <p className="text-base leading-relaxed text-text-dark mb-6">
              병원 대기실, 동네 카페, 학원 강의실, 막 공사를 끝낸 오피스.
              공간마다 쓰는 사람이 다르고, 깨끗해야 하는 이유도 다릅니다.
              오늘의 청소는 그 공간을 내일 쓸 사람을 먼저 떠올리고,
              그 사람이 불편해할 곳부터 닦습니다.
            </p>
            <a
              href="#"
              className="inline-block text-navy font-semibold hover:underline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              오늘의 청소 소개 보기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update main page**

Modify `src/app/page.tsx`:
```typescript
import Hero from '@/components/sections/Hero';
import Service from '@/components/sections/Service';
import WhyToday from '@/components/sections/WhyToday';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Review from '@/components/sections/Review';
import BrandStory from '@/components/sections/BrandStory';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyToday />
      <Process />
      <Portfolio />
      <Review />
      <BrandStory />
      <CTA />
      {/* FAQ section will be added here */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/BrandStory.tsx src/app/page.tsx
git commit -m "feat: create BrandStory section with image and brand narrative"
```

---

### Task 18: Accordion 컴포넌트 + FAQ 섹션

**Files:**
- Create: `src/components/common/Accordion.tsx`
- Create: `src/components/sections/FAQ.tsx`

- [ ] **Step 1: Create Accordion component**

Create `src/components/common/Accordion.tsx`:
```typescript
'use client';

import { useState } from 'react';

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ id, question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-border">
      <button
        className="w-full py-6 px-6 flex items-center justify-between hover:bg-sky/50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-h4 font-semibold text-left">{question}</span>
        <span className={`text-2xl text-navy transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-text-muted">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          {...item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create FAQ component**

Create `src/components/sections/FAQ.tsx`:
```typescript
'use client';

import { faqs } from '@/data/faqs';
import Accordion from '@/components/common/Accordion';
import Button from '@/components/common/Button';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">맡기기 전에 궁금한 것들</h2>
        </div>

        {/* Accordion */}
        <Accordion items={faqs} />

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            자주 묻는 질문 전체 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update main page**

Modify `src/app/page.tsx`:
```typescript
import Hero from '@/components/sections/Hero';
import Service from '@/components/sections/Service';
import WhyToday from '@/components/sections/WhyToday';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Review from '@/components/sections/Review';
import BrandStory from '@/components/sections/BrandStory';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyToday />
      <Process />
      <Portfolio />
      <Review />
      <BrandStory />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/common/Accordion.tsx src/components/sections/FAQ.tsx src/app/page.tsx
git commit -m "feat: create Accordion component and FAQ section"
```

---

### Task 19: GSAP 애니메이션 (Scroll Trigger)

**Files:**
- Create: `src/lib/animations.ts`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create animation utilities**

Create `src/lib/animations.ts`:
```typescript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateSectionFadeIn(selector: string) {
  const elements = gsap.utils.toArray(selector);

  elements.forEach((element: any) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 60%',
          scrub: false,
          markers: false,
        },
      }
    );
  });
}

export function animateStaggerCards(selector: string) {
  const cards = gsap.utils.toArray(selector);

  gsap.fromTo(
    cards,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        end: 'top 60%',
        scrub: false,
      },
    }
  );
}
```

- [ ] **Step 2: Add animations to main page**

Modify `src/app/page.tsx`:
```typescript
'use client';

import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Service from '@/components/sections/Service';
import WhyToday from '@/components/sections/WhyToday';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Review from '@/components/sections/Review';
import BrandStory from '@/components/sections/BrandStory';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/common/Footer';
import { animateSectionFadeIn, animateStaggerCards } from '@/lib/animations';

export default function Home() {
  useEffect(() => {
    // Animate all sections
    animateSectionFadeIn('[data-animate-section]');
    animateStaggerCards('[data-animate-cards]');
  }, []);

  return (
    <>
      <Hero />
      <div data-animate-section>
        <Service />
      </div>
      <div data-animate-section>
        <WhyToday />
      </div>
      <div data-animate-section>
        <Process />
      </div>
      <div data-animate-section>
        <Portfolio />
      </div>
      <div data-animate-section>
        <Review />
      </div>
      <div data-animate-section>
        <BrandStory />
      </div>
      <div data-animate-section>
        <FAQ />
      </div>
      <div data-animate-section>
        <CTA />
      </div>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/animations.ts src/app/page.tsx
git commit -m "feat: add GSAP scroll trigger animations to sections"
```

---

### Task 20: 모바일 고정 버튼 + 반응형 검증

**Files:**
- Create: `src/components/sections/MobileFixedButtons.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create MobileFixedButtons component**

Create `src/components/sections/MobileFixedButtons.tsx`:
```typescript
'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/common/Button';
import { company } from '@/data/company';

export default function MobileFixedButtons() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const { bottom } = hero.getBoundingClientRect();
        setIsHeroVisible(bottom > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-border grid grid-cols-2 gap-0 z-30 md:hidden transition-all duration-300 ${
        isHeroVisible ? 'translate-y-full' : 'translate-y-0'
      }`}
      style={{ height: '60px' }}
    >
      <button
        className="flex items-center justify-center text-navy font-semibold text-sm hover:bg-sky/50 transition-colors border-r border-border"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        무료 견적 문의
      </button>
      <a href={`tel:${company.phone}`} className="flex items-center justify-center">
        <button className="w-full h-full text-navy font-semibold text-sm hover:bg-sky/50 transition-colors">
          전화 상담
        </button>
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Add to layout**

Modify `src/app/layout.tsx`:
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import MobileFixedButtons from '@/components/sections/MobileFixedButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '오늘의 청소 | 청소 서비스',
  description: '어떤 공간이든, 끝은 같은 기준으로. 18평부터 800평까지 맡겨주세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <MobileFixedButtons />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Test responsive (320px, 768px, 1440px)**

```bash
npm run dev
# Open http://localhost:3000
# Test on mobile (DevTools 320px), tablet (768px), desktop (1440px)
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/MobileFixedButtons.tsx src/app/layout.tsx
git commit -m "feat: add mobile-only fixed buttons for CTA"
```

---

### Task 21: 성능 최적화 + 배포 준비

**Files:**
- Modify: `next.config.js`
- Create: `.env.example`

- [ ] **Step 1: Optimize Next.js config**

Modify `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
```

- [ ] **Step 2: Create .env.example**

Create `.env.example`:
```
# Company Info (Update with real values)
NEXT_PUBLIC_COMPANY_NAME=오늘의 청소
NEXT_PUBLIC_COMPANY_PHONE=010-1234-5678
NEXT_PUBLIC_COMPANY_EMAIL=todaysclean@abc.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=

# Deployment
VERCEL_URL=
```

- [ ] **Step 3: Build and test**

```bash
npm run build
npm start
```

Expected: Build succeeds without errors, site runs on http://localhost:3000

- [ ] **Step 4: Lighthouse check (optional)**

```bash
# Install lighthouse
npm install --save-dev lighthouse

# Run audit
npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json
```

Expected: LCP < 2.5s, CLS < 0.1, FID < 100ms

- [ ] **Step 5: Commit**

```bash
git add next.config.js .env.example
git commit -m "chore: optimize Next.js config and add env template"
```

---

## 실행 방식 선택

**Plan complete and saved to `docs/superpowers/plans/2026-10-20-todays-clean-main-implementation.md`.**

Two execution options:

**Option 1: Subagent-Driven (recommended)**
- Fresh subagent per task
- Parallel execution where possible
- Review checkpoints between phases
- Best for team workflow

**Option 2: Inline Execution (in current session)**
- Execute tasks sequentially in this conversation
- Real-time code review and adjustments
- Faster for single developer

**어떤 방식으로 진행할까?**

1. **Subagent-Driven** (추천) → 각 Task를 독립적으로 실행
2. **Inline Execution** → 이 세션에서 순차 실행
