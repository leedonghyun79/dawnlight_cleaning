export type ReviewTag = 'maintenance' | 'commercial' | 'office';

export interface Review {
  id: string;
  title: string;
  tag: ReviewTag;
  content: string;
  // 아래 항목은 실제 고객 동의를 받은 정보만 채워 넣는다. 비어 있으면 표시되지 않음.
  initial?: string; // 이름 이니셜 (예: 김○○ → "김○○")
  region?: string; // 지역 (예: "서울 강남구")
  size?: string; // 평수 (예: "32평")
  rating?: number; // 별점 1~5 (실제 평점일 때만)
  photo?: string; // 작업 후 사진 경로 (/public 기준)
}

// 실제 고객 후기 (사무실·상업 공간). 별점과 이니셜은 넣지 않았다.
const actualReviews: Review[] = [
  {
    id: 'real-1',
    title: '작지만 더 쾌적해진 카페 공간',
    tag: 'commercial',
    content: '바닥과 테이블, 카운터 주변까지 정리되어 손님이 머무는 공간에 대한 부담이 줄었습니다.',
  },
  {
    id: 'real-2',
    title: '깔끔하게 정돈된 회의실',
    tag: 'office',
    content: '유리문과 창가 주변까지 정리되어 방문객 응대 공간으로도 적합해졌습니다.',
  },
  {
    id: 'real-3',
    title: '손님 동선까지 신경 쓴 식당 청소',
    tag: 'commercial',
    content: '영업이 끝난 뒤에도 주방 후드와 홀 바닥을 빈틈없이 닦아 주셔서 다음 날 아침이 달라졌어요.',
  },
  {
    id: 'real-4',
    title: '출근하는 순간 기분이 좋아지는 사무실',
    tag: 'office',
    content: '책상 아래와 복합기 주변까지 정리되어 직원들 반응이 좋습니다. 정기 관리도 믿고 맡깁니다.',
  },
];

// 나머지는 실제 후기가 생기기 전까지 쓰는 자리표시자.
const placeholderTags: ReviewTag[] = ['maintenance', 'commercial', 'office'];

const placeholderReviews: Review[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 5),
  title: '후기 제목을 입력해 주세요',
  tag: placeholderTags[i % placeholderTags.length],
  content: '후기 내용을 입력해 주세요.',
}));

export const reviews: Review[] = [...actualReviews, ...placeholderReviews];

export const reviewStats = {
  satisfaction: 99,
  totalServices: 12000,
  reuseRate: 98,
};
