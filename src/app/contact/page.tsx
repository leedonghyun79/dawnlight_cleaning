import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';
import SubPageHero from '@/components/common/SubPageHero';

export const metadata: Metadata = {
  title: '문의하기 | 새벽빛 청소',
  description: '전화 또는 이메일로 청소 견적과 일정을 문의하세요.',
};

export default function ContactPage() {
  return (
    <>
      <SubPageHero
        active="contact"
        title="Contact"
        subtitle="견적과 일정은 전화 또는 이메일로 문의하세요"
        image="/images/service-residential.webp"
        imageAlt="자연광이 들어오는 깨끗하고 정돈된 거실"
      />
      <Contact />
    </>
  );
}
