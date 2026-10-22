import InquiryForm from '@/components/sections/InquiryForm';
import Image from 'next/image';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 md:py-32">
      <Image
        src="/images/brand-team.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-[0.3]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/75 to-navy/85" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 text-white">
          <h2 className="text-h2 mb-4">청소 날짜가 정해졌다면, 견적부터</h2>
          <p className="text-lg text-white/80">
            공간 유형, 면적, 희망 일정 세 가지면 충분해요.<br />
            확인 후 맞춤 견적을 안내드립니다.
          </p>
        </div>

        <div id="inquiry-form" className="max-w-2xl mx-auto rounded-lg bg-white shadow-[0_12px_48px_rgba(30,58,95,0.06)]">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
