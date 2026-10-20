'use client';

import Link from 'next/link';
import BrandLogo from '@/components/common/BrandLogo';

export default function Header() {
  const menuItems = [
    { label: '업체소개', href: '/about' },
    { label: '서비스', href: '/service' },
    { label: '작업사례', href: '/portfolio' },
    { label: '고객후기', href: '/review' },
    { label: 'FAQ', href: '/faq' },
    { label: '문의하기', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-border z-40 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="새벽빛 청소 홈">
          <BrandLogo size="lg" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex ml-auto gap-6 xl:gap-8 items-center">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-base lg:text-lg text-text-dark hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (stub) */}
        <button className="lg:hidden shrink-0 p-2 text-navy" aria-label="메뉴 열기">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
