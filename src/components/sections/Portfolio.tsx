'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolio, type PortfolioCategory } from '@/data/portfolio';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('all');

  const tabs: { value: PortfolioCategory; label: string }[] = [
    { value: 'all', label: '전체' },
    { value: 'move-in', label: '입주·이사' },
    { value: 'residential', label: '거주 공간' },
    { value: 'commercial', label: '상업 공간' },
    { value: 'construction', label: '건축·준공' },
    { value: 'maintenance', label: '정기 관리' },
  ];

  const filteredPortfolio =
    activeTab === 'all' ? portfolio : portfolio.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gradient-to-br from-sky via-white to-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">18평부터 800평까지, 실제 작업으로 증명합니다</h2>
          <p className="text-[18px] text-text-muted">사진은 공간 이해를 돕기 위한 AI 생성 이미지입니다.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 rounded-full text-[18px] font-semibold transition-all duration-200 ${
                activeTab === tab.value
                  ? 'bg-navy text-white'
                  : 'bg-sky text-navy hover:bg-sky/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredPortfolio.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] bg-sky">
                <Image
                  src={item.image}
                  alt={`${item.title} 공간 예시`}
                  fill
                  sizes="(max-width: 767px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-h4 mb-2">{item.title}</h3>
                <p className="text-base text-text-muted leading-relaxed mb-4">{item.description}</p>
                <div className="flex gap-2">
                  <Badge>{item.size}</Badge>
                  <Badge variant="secondary">{item.duration}</Badge>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" asLink href="/contact">
            견적 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
}
