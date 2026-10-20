import { company } from '@/data/company';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-h2 mb-8">오시는 길</h2>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-navy hover:underline"
          >
            지도 크게 보기
          </a>
        </div>
        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <iframe
            title={`${company.name} 위치 지도`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full h-[360px] md:h-[420px] border-0"
          />
        </div>
      </div>
    </section>
  );
}
