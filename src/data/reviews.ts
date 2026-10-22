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

// 이 후기들은 가상 브랜드의 디자인 확인용 샘플이다. 후기 섹션 위에 안내 문구를 함께 보여준다.
// 실제 고객 후기로 바꾸면 false로 바꿔서 안내 문구를 끈다.
export const isSampleReviews = true;

export const reviews: Review[] = [
  {
    id: '1',
    title: '이사 후 욕실이 새것처럼',
    tag: 'maintenance',
    content: '줄눈 사이 물때까지 꼼꼼히 정리해 주셔서 입주 첫날부터 기분이 좋았어요.',
  },
  {
    id: '2',
    title: '오픈 전 매장 바닥이 반짝여요',
    tag: 'commercial',
    content: '공사 후 남은 먼지를 깔끔하게 정리해 주셔서 오픈 준비가 한결 수월했어요.',
  },
  {
    id: '3',
    title: '직원들이 먼저 알아본 사무실 변화',
    tag: 'office',
    content: '탕비실과 화장실까지 챙겨 주셔서 출근길 분위기가 달라졌다는 말이 나왔어요.',
  },
  {
    id: '4',
    title: '반려견이 있어도 걱정 없어요',
    tag: 'maintenance',
    content: '털이 많이 쌓이는 틈새까지 정리해 주셔서 매번 기다려지는 관리예요.',
  },
  {
    id: '5',
    title: '야간 작업이라 영업에 지장이 없었어요',
    tag: 'commercial',
    content: '영업이 끝난 뒤 작업해 주셔서 다음 날 아침 매장이 깨끗했어요.',
  },
  {
    id: '6',
    title: '회의실 유리창이 맑아졌어요',
    tag: 'office',
    content: '창틀과 유리를 함께 정리해 주셔서 외부 손님을 자신 있게 맞이할 수 있어요.',
  },
  {
    id: '7',
    title: '입주 전 마지막 점검까지 확실하게',
    tag: 'maintenance',
    content: '일정을 맞춰 주시고 마무리 점검까지 같이 해 주셔서 안심이 됐어요.',
  },
  {
    id: '8',
    title: '주방 후드 기름때가 사라졌어요',
    tag: 'commercial',
    content: '후드와 주변 기름때를 깨끗이 제거해 주셔서 주방 분위기가 달라졌어요.',
  },
  {
    id: '9',
    title: '정기 관리로 공간이 늘 일정해요',
    tag: 'office',
    content: '매주 같은 기준으로 정리해 주셔서 공간 상태가 항상 안정적이에요.',
  },
  {
    id: '10',
    title: '베란다 정리 후 이사 준비가 가벼웠어요',
    tag: 'maintenance',
    content: '배수구와 창틀까지 깨끗해져서 짐 정리에만 집중할 수 있었어요.',
  },
  {
    id: '11',
    title: '카페 테이블 틈새까지 깔끔하게',
    tag: 'commercial',
    content: '손님 눈에 잘 안 띄는 곳까지 정리해 주셔서 신경 쓰이던 부분이 해결됐어요.',
  },
  {
    id: '12',
    title: '방문객 응대 공간으로 손색없어요',
    tag: 'office',
    content: '로비와 응접 공간을 정리해 주셔서 방문하시는 분들이 먼저 칭찬해 주셨어요.',
  },
  {
    id: '13',
    title: '이사 나가기 전 깔끔하게 마무리',
    tag: 'maintenance',
    content: '싱크대 아래와 수납장 안쪽까지 정리해 주셔서 마무리가 확실했어요.',
  },
  {
    id: '14',
    title: '주말 작업도 친절하게 응대해 주셨어요',
    tag: 'commercial',
    content: '작업 전에 필요한 부분을 꼼꼼히 여쭤봐 주셔서 원하는 결과가 나왔어요.',
  },
  {
    id: '15',
    title: '사무실 바닥 광택이 살아났어요',
    tag: 'office',
    content: '바닥 얼룩을 정리하고 광택을 살려 주셔서 손님 응대 공간이 밝아졌어요.',
  },
  {
    id: '16',
    title: '거실 소파와 카펫 관리',
    tag: 'maintenance',
    content: '소파 틈과 카펫 먼지까지 깨끗하게 정리해 주셔서 집이 한결 쾌적해졌어요.',
  },
];

export const reviewStats = {
  satisfaction: 99,
  totalServices: 12000,
  reuseRate: 98,
};
