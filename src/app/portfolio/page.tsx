import type { Metadata } from 'next';
import Portfolio from '@/components/sections/Portfolio';
import SubPageHero from '@/components/common/SubPageHero';

export const metadata: Metadata = {
  title: '작업사례 | 새벽빛 청소',
  description: '18평부터 800평까지, 실제 청소 작업 사례를 공간 유형별로 확인하세요.',
};

export default function PortfolioPage() {
  return (
    <>
      <SubPageHero
        active="portfolio"
        title="Portfolio"
        subtitle="18평부터 800평까지, 공간 유형별 작업 사례"
        image="/images/portfolio-office.webp"
        imageAlt="청소가 끝난 사무실 공간"
      />
      <Portfolio />
    </>
  );
}
