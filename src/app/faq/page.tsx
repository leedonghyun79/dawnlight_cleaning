import type { Metadata } from 'next';
import FAQ from '@/components/sections/FAQ';
import SubPageHero from '@/components/common/SubPageHero';

export const metadata: Metadata = {
  title: '자주 묻는 질문 | 새벽빛 청소',
  description: '견적, 작업 시간, 예약 변경, 사후 관리 등 맡기기 전에 자주 묻는 질문을 모았습니다.',
};

export default function FAQPage() {
  return (
    <>
      <SubPageHero
        active="faq"
        title="FAQ"
        subtitle="맡기기 전에 가장 많이 묻는 질문"
        image="/images/service-move-in.webp"
        imageAlt="이사 후 정리된 실내 공간"
      />
      <FAQ />
    </>
  );
}
