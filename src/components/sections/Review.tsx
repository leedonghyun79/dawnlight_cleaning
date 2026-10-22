'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { isSampleReviews, reviews, type ReviewTag } from '@/data/reviews';
import Card from '@/components/common/Card';
import BrandLogo from '@/components/common/BrandLogo';

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
  // carousel: 홈에서 가로로 넘기는 방식. grid: 고객후기 페이지에서 3열로 전부 보여주는 방식.
  variant?: 'carousel' | 'grid';
}

const GRID_PAGE_SIZE = 8;

export default function Review({ variant = 'carousel' }: ReviewProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const isCarousel = variant === 'carousel';
  const totalPages = Math.ceil(reviews.length / GRID_PAGE_SIZE);
  const visibleReviews = isCarousel
    ? reviews
    : reviews.slice((page - 1) * GRID_PAGE_SIZE, page * GRID_PAGE_SIZE);

  // 5초마다 한 장씩 자동으로 넘긴다. 마우스·터치·포커스가 있으면 멈추고, 움직임 줄이기 설정이면 끈다.
  useEffect(() => {
    const track = trackRef.current;
    if (!isCarousel || !track || reviews.length < 2) return;
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
  }, [isCarousel]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  const listClass = isCarousel
    ? 'flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  const cardPosition = isCarousel
    ? 'snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'
    : 'w-full';

  return (
    <section id="review" className="py-24 md:py-32 bg-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isCarousel && (
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">고객이 남긴 후기</h2>
          </div>
        )}

        {isSampleReviews && (
          <p className="text-center text-[18px] text-text-muted mb-8">
            아래 후기는 디자인 확인용 샘플이며 실제 고객 후기가 아닙니다.
          </p>
        )}

        <div className="relative">
          {!isCarousel && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <div className="scale-[2.5] opacity-[0.07]">
                <BrandLogo size="lg" />
              </div>
            </div>
          )}
          <div ref={trackRef} className={listClass}>
            {visibleReviews.map((review) => {
              const meta = [`${review.initial ?? '○○○'} 대표님`, review.region, review.size].filter(Boolean);

              return (
                <Card
                  key={review.id}
                  hover={false}
                  className={`group relative ${cardPosition} flex flex-col overflow-hidden p-8 border-0 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
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
                  <p className="relative text-[18px] text-text-dark leading-relaxed">{review.content}</p>
                  {meta.length > 0 && <p className="relative mt-auto pt-4 text-[18px] text-text-muted">{meta.join(' · ')}</p>}
                </Card>
              );
            })}
          </div>

          {!isCarousel && totalPages > 1 && (
            <nav aria-label="후기 페이지" className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPage(num)}
                  aria-current={page === num ? 'page' : undefined}
                  className={`w-11 h-11 rounded-full font-semibold transition-colors ${
                    page === num ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-navy/10'
                  }`}
                >
                  {num}
                </button>
              ))}
            </nav>
          )}

          {isCarousel && reviews.length > 1 && (
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
