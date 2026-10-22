import Image from 'next/image';
import CheckIcon from '@/components/common/CheckIcon';
import { services } from '@/data/services';

export default function Service() {
  return (
    <section id="service" className="py-24 md:py-32 bg-gradient-to-br from-sky via-white to-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-h2 mb-4">새벽빛 청소 서비스</h2>
          <p className="text-[18px] text-text-dark break-keep">
            집이든 사무실이든 공사 현장이든, 맡기는 순간부터 끝까지 책임집니다.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <li
              key={service.id}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] bg-sky">
                <Image
                  src={service.image}
                  alt={`${service.name} 서비스 공간 예시`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 280px"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 px-3 py-1 rounded-full bg-navy text-white text-sm font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-[22px] font-bold text-navy mb-2 break-keep">{service.name}</h3>
                <p className="text-[18px] text-text-muted leading-relaxed break-keep mb-5">{service.description}</p>

                <ul className="mt-auto pt-5 border-t border-border space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[18px] text-text-dark">
                      <CheckIcon className="w-5 h-5 shrink-0 text-navy" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
