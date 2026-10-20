import type { Metadata } from 'next';
import Service from '@/components/sections/Service';
import SubPageHero from '@/components/common/SubPageHero';

export const metadata: Metadata = {
  title: '서비스 | 새벽빛 청소',
  description: '입주·이사, 거주 공간, 사무실·상업 공간, 건축·준공 등 공간별 청소 범위를 확인하세요.',
};

export default function ServicePage() {
  return (
    <>
      <SubPageHero
        active="service"
        title="Service"
        subtitle="입주·이사부터 상업 공간, 준공 청소까지"
        image="/images/service-commercial.webp"
        imageAlt="상업 공간에서 진행 중인 청소 작업"
      />
      <Service />
    </>
  );
}
