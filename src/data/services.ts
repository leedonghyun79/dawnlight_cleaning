export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  items: string[];
}

export const services: Service[] = [
  {
    id: 'move-in',
    name: '입주청소',
    description: '입주 전 묵은 때와 먼지까지 싹 정리해, 깨끗한 상태에서 바로 시작하세요.',
    image: '/images/service-move-in.webp',
    items: ['창틀·몰딩·벽면', '주방·욕실 집중 청소', '세탁공간·현관'],
  },
  {
    id: 'residential',
    name: '거주청소',
    description: '매일 머무는 집, 눈에 안 보이는 먼지와 세균까지 잡아 드려요.',
    image: '/images/service-residential.webp',
    items: ['거실·방·주방·욕실', '먼지 제거 및 소독', '창틀·베란다'],
  },
  {
    id: 'commercial',
    name: '사업장청소',
    description: '영업이 끝난 밤에 작업해, 다음 날 아침 쾌적한 공간에서 시작하세요.',
    image: '/images/service-commercial.webp',
    items: ['바닥·유리', '책상·진열대·집기', '화장실·탕비실 위생'],
  },
  {
    id: 'construction',
    name: '준공청소',
    description: '공사 후 남은 분진과 자국을 걷어내, 회사나 공장 입주 전 바로 쓸 수 있게 맞춰 드려요.',
    image: '/images/service-construction.webp',
    items: ['미세먼지·분진 제거', '시멘트·페인트 자국', '창호·유리'],
  },
];
