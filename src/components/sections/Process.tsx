import type { CSSProperties } from 'react';

const steps = [
  {
    number: '01',
    title: '상담 및 견적',
    description: '공간 유형, 면적, 오염도, 희망 일정을 듣고 맞춤 견적을 드립니다.',
  },
  {
    number: '02',
    title: '일정 확정',
    description: '원하시는 날짜와 시간에 맞춰 예약을 확정합니다.',
  },
  {
    number: '03',
    title: '전문 청소 진행',
    description: '공간과 소재에 맞는 장비와 세제로 작업합니다.',
  },
  {
    number: '04',
    title: '검수 및 확인',
    description: '고객님과 함께 최종 점검합니다.',
  },
  {
    number: '05',
    title: '사후 관리',
    description: '작업 이후에도 피드백을 받아 품질을 이어갑니다.',
  },
];

export default function Process() {
  return (
    <section id="process" className="pt-[150px] pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-left text-center">
          <p className="text-sm font-bold tracking-widest text-navy mb-3">PROCESS</p>
          <h2 className="text-h2 mb-4">문의부터 사후 관리까지 5단계 진행</h2>
          <p className="text-base text-text-muted">단계마다 무엇을 하는지 미리 알려드려요.</p>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-x-6">
          {/* 가로 기준선 (데스크톱) */}
          <div className="hidden md:block absolute top-[5px] left-0 right-0 h-px bg-navy/20" aria-hidden="true" />

          {steps.map((step, idx) => (
            <li
              key={step.number}
              className="relative pl-8 pb-12 md:pl-0 md:pb-0 md:pt-10 border-l border-navy/20 last:border-transparent md:border-transparent"
            >
              {/* 점 (모바일은 세로선 위, 데스크톱은 가로선 위) */}
              <span
                className="absolute -left-[5px] top-1 md:left-0 md:top-0 w-2.5 h-2.5 rounded-full bg-navy ring-4 ring-white after:absolute after:inset-0 after:rounded-full after:bg-navy/30 motion-safe:after:animate-ping after:[animation-duration:2.4s] after:[animation-delay:var(--pulse-delay)]"
              style={{ '--pulse-delay': `${idx * 0.4}s` } as CSSProperties}
                aria-hidden="true"
              />
              <p className="text-5xl font-bold text-navy/15 leading-none mb-4">{step.number}</p>
              <h3 className="text-h4 mb-2">{step.title}</h3>
              <p className="text-base text-text-muted leading-relaxed break-keep">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
