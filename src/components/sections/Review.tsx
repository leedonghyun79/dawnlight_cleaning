'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { reviews, reviewStats, type ReviewTag } from '@/data/reviews';
import Card from '@/components/common/Card';

const tagLabels: Record<ReviewTag, string> = {
  maintenance: '정기 관리',
  commercial: '상업 공간',
  office: '사무실',
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex shrink-0 gap-0.5 text-base text-amber-400" aria-label={`별점 ${rating}점`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

interface ReviewProps {
  // 수치 띠는 홈 히어로 아래에 이미 있으므로 기본은 숨긴다. /review 페이지에서만 켠다.
  showStats?: boolean;
}

export default function Review({ showStats = false }: ReviewProps) {
  const [displayedStats, setDisplayedStats] = useState({
    satisfaction: 0,
    totalServices: 0,
    reuseRate: 0,
  });
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showStats) return;

    const animateCounter = (target: number, key: keyof typeof displayedStats, duration = 1500) => {
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor((target - 0) * progress);

        setDisplayedStats((prev) => ({
          ...prev,
          [key]: current,
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    animateCounter(reviewStats.satisfaction, 'satisfaction');
    setTimeout(() => animateCounter(reviewStats.totalServices, 'totalServices'), 200);
    setTimeout(() => animateCounter(reviewStats.reuseRate, 'reuseRate'), 400);
  }, [showStats]);

  // 5초마다 한 장씩 자동으로 넘긴다. 마우스·터치·포커스가 있으면 멈추고, 움직임 줄이기 설정이면 끈다.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || reviews.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let paused = false;
    const timer = window.setInterval(() => {
      if (paused) return;
      const card = track.firstElementChild as HTMLElement | null;
      if (!card) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: card.offsetWidth + 24, behavior: 'smooth' });
      }
    }, 5000);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', resume);
    track.addEventListener('focusin', pause);
    track.addEventListener('focusout', resume);

    return () => {
      window.clearInterval(timer);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
      track.removeEventListener('touchstart', pause);
      track.removeEventListener('touchend', resume);
      track.removeEventListener('focusin', pause);
      track.removeEventListener('focusout', resume);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section id="review" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">고객이 남긴 후기</h2>
        </div>

        {showStats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-[24px] font-bold text-navy mb-2">{displayedStats.satisfaction}%</div>
              <p className="text-[18px] text-text-muted">고객 만족도</p>
            </div>
            <div className="text-center">
              <div className="text-[24px] font-bold text-navy mb-2">
                {displayedStats.totalServices.toLocaleString()}건
              </div>
              <p className="text-[18px] text-text-muted">누적 청소 건수</p>
            </div>
            <div className="text-center">
              <div className="text-[24px] font-bold text-navy mb-2">{displayedStats.reuseRate}%</div>
              <p className="text-[18px] text-text-muted">재이용 의향</p>
            </div>
          </div>
        )}

        {/* Review Carousel */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => {
              const meta = [review.initial && `${review.initial}님`, review.region, review.size].filter(Boolean);

              return (
                <Card
                  key={review.id}
                  hover={false}
                  className="group relative snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col overflow-hidden p-8 border-0 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-6 top-6 z-10 font-serif text-[120px] leading-none text-navy/20 select-none"
                  >
                    &ldquo;
                  </span>

                  {review.photo && (
                    <div className="relative -mx-8 -mt-8 mb-6 aspect-[16/9] bg-sky">
                      <Image
                        src={review.photo}
                        alt={`${review.title} 작업 후 사진`}
                        fill
                        sizes="(min-width: 1024px) 33vw, 85vw"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="relative flex items-start justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-sky text-navy text-[18px] font-semibold">
                      {tagLabels[review.tag]}
                    </span>
                    {review.rating !== undefined && <Stars rating={review.rating} />}
                  </div>
                  <h3 className="relative text-[24px] font-bold mb-2">{review.title}</h3>
                  {meta.length > 0 && <p className="relative text-[18px] text-text-muted mb-4">{meta.join(' · ')}</p>}
                  <p className="relative text-[18px] text-text-dark leading-relaxed">{review.content}</p>
                </Card>
              );
            })}
          </div>

          {reviews.length > 1 && (
            <div className="flex justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="이전 후기"
                className="w-12 h-12 rounded-full bg-navy text-white text-2xl leading-none shadow-md hover:bg-navy/90 hover:-translate-y-0.5 transition-all"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="다음 후기"
                className="w-12 h-12 rounded-full bg-navy text-white text-2xl leading-none shadow-md hover:bg-navy/90 hover:-translate-y-0.5 transition-all"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
