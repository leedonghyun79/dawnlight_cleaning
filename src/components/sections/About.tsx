import { company } from '@/data/company';
import Image from 'next/image';

export default function About() {
  const infoRows = [
    { label: '상호', value: company.name },
    { label: '대표', value: company.representative },
    { label: '사업자등록번호', value: company.businessRegistration },
    { label: '주소', value: company.address },
    { label: '영업시간', value: company.businessHours },
    { label: '연락처', value: company.phone },
    { label: '이메일', value: company.email },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro: 왼쪽 소개 문구 / 오른쪽 이미지 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div className="text-left">
            <h1 className="text-h2 mb-6 break-keep">공간마다 정해진 기준으로,<br />끝까지 챙깁니다</h1>
            <p className="text-[18px] text-text-muted leading-relaxed break-keep">
              집이든 사무실이든, 맡기는 공간은 늘 조심스럽죠.
              <br />
              32평 아파트부터 800평 오피스까지, 공간마다 정해진 체크 항목으로.
              <br />
              맡긴 뒤에도 마음 놓이도록, 불편해할 곳부터 꼼꼼하게 닦습니다.
            </p>
          </div>

          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sky">
              <Image
                src="/images/brand-team.webp"
                alt="실내 공간을 꼼꼼하게 관리하는 전문 청소 작업을 표현한 이미지"
                fill
                sizes="(max-width: 767px) calc(100vw - 32px), 576px"
                className="object-cover object-center"
              />
            </div>
          </figure>
        </div>

        {/* Company Info */}
        <div className="border border-border rounded-lg overflow-hidden">
          {infoRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] border-b border-border last:border-b-0 text-[18px]"
            >
              <div className="bg-sky px-6 py-4 font-semibold text-text-dark">{row.label}</div>
              <div className="px-6 py-4 text-text-dark break-keep">{row.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
