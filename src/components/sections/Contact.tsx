import { company } from '@/data/company';
import InquiryForm from '@/components/sections/InquiryForm';

// 지도 중심 좌표 (대략값). 실제 사무실 위치에 맞게 바꿔주세요.
const mapCenter = { lat: 37.5006, lng: 127.0364 };

export default function Contact() {
  const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;

  const infoRows = [
    { label: '상호', value: company.name },
    { label: '대표', value: company.representative },
    { label: '전화', value: company.phone },
    { label: '이메일', value: company.email },
    { label: '주소', value: company.address },
    { label: '영업시간', value: company.businessHours },
    { label: '사업자등록번호', value: company.businessRegistration },
  ];

  return (
    <section id="contact-page" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Intro */}
        <div className="lg:sticky lg:top-32">
          <h1 className="text-h2 mb-4">
            청소 날짜가 정해졌다면,
            <br />
            견적부터 받아보세요
          </h1>
          <p className="text-[18px] text-text-muted">
            공간 유형, 면적, 희망 일정 세 가지면 충분해요.
            <br />
            확인 후 맞춤 견적을 안내드립니다.
          </p>
        </div>

        {/* Inquiry Form */}
        <div id="inquiry-form" className="w-full rounded-lg bg-white shadow-[0_12px_48px_rgba(30,58,95,0.06)]">
          <InquiryForm />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* 업체 소개 */}
        <div className="bg-sky rounded-lg p-8 mb-20">
          <h2 className="text-h2 mb-8">업체 소개</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-6 gap-y-4 text-sm">
            {infoRows.map((row) => (
              <div key={row.label} className="contents">
                <dt className="font-semibold text-navy">{row.label}</dt>
                <dd className="text-text-dark break-keep">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 오시는 길 */}
        <div className="text-center">
          <h2 className="text-h2 mb-8">오시는 길</h2>
          <p className="text-text-muted mb-8">{company.address}</p>

          <div className="overflow-hidden rounded-lg border border-border">
            {mapKey ? (
              // Maps Embed API view 모드는 장소 정보 카드 없이 지도만 보여준다
              <iframe
                title={`${company.name} 위치 지도`}
                src={`https://www.google.com/maps/embed/v1/view?key=${mapKey}&center=${mapCenter.lat},${mapCenter.lng}&zoom=16`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-[360px] md:h-[420px] border-0"
              />
            ) : (
              <div className="flex h-[360px] md:h-[420px] items-center justify-center bg-sky">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-navy text-white rounded-md font-semibold hover:bg-navy/90 transition-colors"
                >
                  지도에서 위치 보기
                </a>
              </div>
            )}
          </div>

          {mapKey && (
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-semibold text-navy hover:underline"
            >
              지도 크게 보기
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
