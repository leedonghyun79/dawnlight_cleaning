'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BrandLogo from '@/components/common/BrandLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // 맨 위에서는 투명하게 두고, 스크롤하면 흰 배경으로 바꾼다.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = [
    { label: '업체소개', href: '/about' },
    { label: '서비스', href: '/service' },
    { label: '작업사례', href: '/portfolio' },
    { label: '고객후기', href: '/review' },
    { label: 'FAQ', href: '/faq' },
    { label: '문의하기', href: '/contact' },
  ];

  const headerTone = scrolled
    ? 'bg-white border-b border-border shadow-sm'
    : 'bg-transparent border-b border-transparent';
  const textTone = scrolled ? 'text-text-dark hover:text-navy' : 'text-white hover:text-white/80';
  const iconTone = scrolled ? 'text-navy' : 'text-white';

  return (
    <header className={`fixed top-0 w-full z-40 transition-colors duration-300 ${headerTone}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="새벽빛 청소 홈">
          <BrandLogo size="lg" inverse={!scrolled} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex ml-auto gap-6 xl:gap-8 items-center">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-[18px] lg:text-[20px] font-medium transition-colors ${textTone}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (stub) */}
        <button className={`lg:hidden shrink-0 p-2 ${iconTone}`} aria-label="메뉴 열기">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
