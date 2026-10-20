import type { Metadata } from 'next';
import About from '@/components/sections/About';
import SubPageHero from '@/components/common/SubPageHero';

export const metadata: Metadata = {
  title: '업체 소개 | 새벽빛 청소',
  description: '18평부터 800평까지, 공간을 내일 쓸 사람을 먼저 생각하며 청소하는 새벽빛 청소를 소개합니다.',
};

export default function AboutPage() {
  return (
    <>
      <SubPageHero
        active="about"
        title="About"
        subtitle="공간을 내일 쓸 사람을 먼저 생각하는 청소"
        image="/images/hero-peace-of-mind.webp"
        imageAlt="정돈된 실내 공간의 전경"
      />
      <About />
    </>
  );
}
