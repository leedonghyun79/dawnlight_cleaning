import type { Metadata } from 'next';
import Review from '@/components/sections/Review';
import SubPageHero from '@/components/common/SubPageHero';

export const metadata: Metadata = {
  title: '고객후기 | 새벽빛 청소',
  description: '실제 고객이 남긴 청소 후기와 누적 서비스 지표를 확인하세요.',
};

export default function ReviewPage() {
  return (
    <>
      <SubPageHero
        active="review"
        title="Review"
        subtitle="맡겨주신 분들이 남긴 이야기"
        image="/images/hero-lounge.webp"
        imageAlt="깔끔하게 정돈된 라운지 공간"
      />
      <Review variant="grid" />
    </>
  );
}
