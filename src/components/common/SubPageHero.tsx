import Image from 'next/image';
import Link from 'next/link';

export const subPageTabs = [
  { key: 'about', href: '/about', label: '업체 소개' },
  { key: 'service', href: '/service', label: '서비스' },
  { key: 'portfolio', href: '/portfolio', label: '작업사례' },
  { key: 'review', href: '/review', label: '고객후기' },
  { key: 'faq', href: '/faq', label: '자주 묻는 질문' },
  { key: 'contact', href: '/contact', label: '문의하기' },
] as const;

export type SubPageKey = (typeof subPageTabs)[number]['key'];

interface SubPageHeroProps {
  active: SubPageKey;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export default function SubPageHero({ active, title, subtitle, image, imageAlt }: SubPageHeroProps) {
  return (
    <>
      <section className="relative h-[320px] md:h-[420px] flex items-center overflow-hidden bg-navy">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" quality={85} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-transparent" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-sm">{title}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 break-keep">{subtitle}</p>
        </div>
      </section>

      <nav aria-label="서브 메뉴" className="bg-sky border-b border-border">
        <ul className="max-w-7xl mx-auto flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {subPageTabs.map((tab) => {
            const isActive = tab.key === active;
            return (
              <li key={tab.key} className="flex-1 min-w-max">
                <Link
                  href={tab.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block border-2 px-6 py-5 text-center text-base font-semibold transition-colors ${
                    isActive ? 'bg-navy border-navy text-white hover:text-white' : 'border-transparent text-text-dark hover:border-navy'
                  }`}
                >
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
