import Button from '@/components/common/Button';
import Image from 'next/image';

export default function BusinessSummary() {
  return (
    <section id="business-summary" className="py-20 bg-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-left">
          <p className="text-sm font-bold tracking-widest text-navy mb-3">ABOUT</p>
          <h2 className="text-h2 mb-4 break-keep">공간을 쓸 사람을 먼저<br />생각하는 청소</h2>
          <p className="text-lg text-text-muted leading-relaxed mb-8 break-keep">
            32평 아파트부터 800평 신축 오피스까지, 같은 기준으로 맡습니다.
            <br />
            공간을 쓸 사람이 불편해할 곳부터 닦는 것, 그게 새벽빛 청소가 지키는 기준입니다.
          </p>
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
