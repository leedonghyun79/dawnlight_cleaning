import InquiryForm from '@/components/sections/InquiryForm';
import Image from 'next/image';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20">
      <Image
        src="/images/brand-team.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-navy mb-3">CONTACT</p>
          <h2 className="text-h2 mb-4">청소 날짜가 정해졌다면,<br />견적부터</h2>
          <p className="text-lg text-text-muted">
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
