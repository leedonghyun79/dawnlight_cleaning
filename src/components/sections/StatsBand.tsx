'use client';

import { useEffect, useRef, useState } from 'react';
import { reviewStats } from '@/data/reviews';

const stats = [
  { value: `${reviewStats.satisfaction}%`, label: '고객 만족도' },
  { value: `${reviewStats.totalServices}건`, label: '누적 청소 건수' },
  { value: `${reviewStats.reuseRate}%`, label: '재이용 의향' },
];

// 숫자가 화면에 들어오면 0에서 목표값까지 한 번 올라간다.
function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^([\d,]+)(.*)$/);
    if (!el || !match) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const target = Number(match[1].replace(/,/g, ''));
    const suffix = match[2];
    let frame = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${Math.round(target * eased).toLocaleString('ko-KR')}${suffix}`);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      setDisplay(`0${suffix}`);
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <dt ref={ref} className="text-3xl md:text-5xl font-bold text-navy tabular-nums">
      {display}
    </dt>
  );
}

export default function StatsBand() {
  return (
    <section className="bg-white border-b border-border py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <CountUp value={stat.value} />
              <dd className="text-base text-text-muted mt-3">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
