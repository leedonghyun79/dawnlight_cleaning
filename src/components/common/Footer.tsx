import Link from 'next/link';
import { company } from '@/data/company';
import BrandLogo from '@/components/common/BrandLogo';

export default function Footer() {
  const menuItems = [
    { label: '업체소개', href: '/about' },
    { label: '서비스', href: '/service' },
    { label: '작업사례', href: '/portfolio' },
    { label: '고객후기', href: '/review' },
    { label: 'FAQ', href: '/faq' },
    { label: '문의하기', href: '/contact' },
  ];

  return (
    <footer className="bg-text-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="새벽빛 청소 홈">
              <BrandLogo inverse />
            </Link>
            <p className="text-sm text-white/80 mb-2">대표: {company.representative}</p>
            <p className="text-sm text-white/80 mb-2">주소: {company.address}</p>
            <p className="text-sm text-white/80 mb-2">영업시간: {company.businessHours}</p>
            <p className="text-sm text-white/80">연락처: {company.phone}</p>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-semibold mb-4">메뉴</h4>
            <ul className="space-y-2 text-sm">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS & Legal */}
          <div>
            <h4 className="font-semibold mb-4">
              링크
            </h4>
            <div className="flex gap-4 mb-8 text-white/80">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>Naver</span>
            </div>
            <div className="text-xs space-y-1 text-white/60">
              <p>
                <span>이용약관</span>
                {' · '}
                <span>개인정보처리방침</span>
              </p>
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
