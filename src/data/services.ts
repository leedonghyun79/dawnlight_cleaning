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
    name: '입주·이사 청소',
    description: '새 집에 들어가기 전, 먼지와 묵은 때부터 깨끗이 비워 드립니다.',
    image: '/images/service-move-in.webp',
    items: ['창틀·몰딩·벽면', '주방·욕실 집중 청소', '세탁공간·현관'],
  },
  {
    id: 'residential',
    name: '거주 공간 청소',
    description: '매일 쓰는 공간을 구석구석, 먼지와 세균까지 정리합니다.',
    image: '/images/service-residential.webp',
    items: ['거실·방·주방·욕실', '먼지 제거 및 소독', '창틀·베란다'],
  },
  {
    id: 'commercial',
    name: '사무실·상업 공간 청소',
    description: '업무에 지장 없이 마감 후에 작업해, 다음 날 깨끗하게 출근하실 수 있습니다.',
    image: '/images/service-commercial.webp',
    items: ['바닥·유리', '책상·진열대·집기', '화장실·탕비실 위생'],
  },
  {
    id: 'construction',
    name: '건축·준공 청소',
    description: '공사가 끝난 자리의 분진과 페인트 자국을 걷어내, 바로 쓸 수 있게 마무리합니다.',
    image: '/images/service-construction.webp',
    items: ['미세먼지·분진 제거', '시멘트·페인트 자국', '창호·유리'],
  },
];
