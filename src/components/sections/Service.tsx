import Image from 'next/image';
import CheckIcon from '@/components/common/CheckIcon';
import { services } from '@/data/services';

export default function Service() {
  return (
    <section id="service" className="pt-20 pb-32 bg-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-h2 mb-4">공간에 맞춘 작업 범위</h2>
          <p className="text-[18px] text-text-muted">
            소요시간과 견적은 공간 크기와 오염 상태에 따라 달라져요. 상담 시 맞춤으로 안내드립니다.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div key={service.id} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-white ${
                    reverse ? 'md:order-2' : ''
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.name} 서비스 공간 예시`}
                    fill
                    sizes="(max-width: 767px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>

                <div className={reverse ? 'md:order-1' : ''}>
                  <h3 className="text-[24px] font-bold mb-3">{service.name}</h3>
                  <p className="text-[18px] text-text-muted leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 text-base md:text-lg">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon className="mt-0.5 w-7 h-7 shrink-0 text-navy" />
                        <span className="text-text-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
