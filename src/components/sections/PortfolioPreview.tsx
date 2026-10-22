import Image from 'next/image';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import { portfolio } from '@/data/portfolio';

export default function PortfolioPreview() {
  const items = portfolio.slice(0, 4);

  return (
    <section id="portfolio-preview" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">완료된 작업 사례</h2>
          <p className="text-[18px] text-text-muted">사례마다 공간 크기와 작업 기간을 함께 정리했어요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 mb-12">
          {items.map((item) => (
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
          <Button variant="secondary" size="md" asLink href="/portfolio">
            작업 사례 전체 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
