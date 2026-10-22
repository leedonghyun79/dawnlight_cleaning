'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  useEffect(() => {
    const hero = document.getElementById('hero-content');
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transition = 'opacity 0.8s ease-in';
      setTimeout(() => {
        hero.style.opacity = '1';
      }, 100);
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky to-white">
      <Image
        src="/images/hero-window-cleaning-vest-printed.webp"
        alt="새벽빛 청소 로고와 업체명이 프린팅된 네이비 조끼를 입고 창틀을 꼼꼼하게 닦는 작업자"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[85%_center] md:object-center"
        quality={85}
      />
      <div className="absolute inset-0 bg-navy/35 md:bg-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy/60 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="hero-content" className="text-left max-w-2xl">
          <h1 className="text-[clamp(1.75rem,8vw,3rem)] md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-sm break-keep">
            맡기는 순간부터<br />
            마음이 가벼워집니다
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-10 break-keep text-balance">
            누적 12,000건의 공간을 정돈해 왔습니다. 집이든 사무실이든 공사 현장이든, 맡겨 주신 공간을
            정해진 기준에 맞춰 끝까지 챙깁니다. 맡긴 뒤 걱정할 일이 없도록요.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-navy text-white rounded-md font-semibold hover:bg-navy/90 transition-colors text-lg"
            >
              견적 문의하기
            </button>
            <a href="/portfolio">
              <button className="px-8 py-4 bg-white text-navy rounded-md font-semibold hover:bg-sky transition-colors text-lg">
                작업 사례 보기
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
