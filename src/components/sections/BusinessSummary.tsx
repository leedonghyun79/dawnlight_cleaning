import Button from '@/components/common/Button';
import CheckIcon from '@/components/common/CheckIcon';
import Image from 'next/image';

export default function BusinessSummary() {
  return (
    <section id="business-summary" className="py-24 md:py-32 bg-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-left">
          <h2 className="text-h2 mb-4 break-keep">
            12,000건의 공간을<br />같은 기준으로 맡아 왔습니다
          </h2>
          <p className="text-[18px] text-text-muted leading-relaxed mb-6 break-keep">
            원룸 같은 작은 집부터 800평 오피스, 공사 현장까지.<br />
            공간마다 정해진 체크 항목으로 작업하고,<br />
            맡기기 전 면적과 오염도를 확인해 견적을 드립니다.
          </p>
          <ul className="space-y-3 mb-8 text-[18px] text-text-dark">
            <li className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 w-7 h-7 shrink-0 text-navy" />
              <span className="break-keep">공간별 체크 항목으로 빠지는 곳 없이 작업합니다</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 w-7 h-7 shrink-0 text-navy" />
              <span className="break-keep">추가 비용은 작업 전에 먼저 알려 드립니다</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 w-7 h-7 shrink-0 text-navy" />
              <span className="break-keep">기준에 못 미치면 재청소, 파손은 배상보험으로 대비합니다</span>
            </li>
          </ul>
          <Button variant="primary" size="md" asLink href="/about">
            업체 소개
          </Button>
        </div>
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about-cabinet-cleaning-embroidered-v3.webp"
              alt="새벽빛 청소 로고와 업체명이 자수로 새겨진 작업복을 입고 주방 수납장 안쪽을 닦는 작업자의 모습을 표현한 이미지"
              fill
              sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 45vw, 576px"
              className="object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
