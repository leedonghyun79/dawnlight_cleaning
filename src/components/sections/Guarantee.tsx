const icons = [
  // 공간별 체크 항목: 체크리스트
  <>
    <path d="M9 3h6v3H9z" />
    <path d="M7 5H6v16h12V5h-1" />
    <path d="M9 12l2 2 4-4" />
  </>,
  // 정직한 견적: 견적서
  <>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 8h6M9 12h6M9 16h4" />
  </>,
  // 재청소 보장: 순환 화살표
  <>
    <path d="M20 12a8 8 0 1 1-2.3-5.6" />
    <path d="M20 4v5h-5" />
  </>,
  // 배상보험: 방패
  <>
    <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </>,
];

// 아이콘마다 다른 색을 줘서 네 항목이 구분되도록 한다
const iconColors = ['text-[#1E3A5F]', 'text-[#2E7D8C]', 'text-[#4A7DB8]', 'text-[#C47F2C]'];

export default function Guarantee() {
  const reasons = [
    {
      title: '공간별 체크 항목',
      description: '집, 사무실, 매장, 공사 현장마다 정해진 항목으로 작업해요. 놓치는 곳 없이 끝까지 챙깁니다.',
    },
    {
      title: '정직한 견적',
      description: '공간 유형, 면적, 오염도를 확인한 뒤 산정하고, 추가 비용은 작업 전에 먼저 알려드려요.',
    },
    {
      title: '재청소 보장',
      description: '작업 결과가 기준에 미치지 못하면 재청소로 보완해 드려요.',
    },
    {
      title: '배상보험 가입',
      description: '작업 중 생길 수 있는 파손에 대비해 배상보험을 갖추고 있어요.',
    },
  ];

  return (
    <section id="guarantee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-navy mb-3">WHY US</p>
          <h2 className="text-h2 mb-4">새벽빛 청소를 선택해야 할 이유</h2>
          <p className="text-text-muted">맡기기 전에 드는 걱정, 네 가지로 덜어 드립니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className="bg-sky rounded-br-[80px] shadow-md p-10 text-center flex flex-col items-center"
            >
              <svg
                viewBox="0 0 24 24"
                className={`w-14 h-14 mb-8 ${iconColors[idx]}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[idx]}
              </svg>
              <h3 className="text-h4 mb-3">{reason.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed break-keep">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
