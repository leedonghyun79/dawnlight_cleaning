export type PortfolioCategory = 'all' | 'move-in' | 'residential' | 'commercial' | 'construction' | 'maintenance';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  size: string;
  duration: string;
  description: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: '1',
    title: '판교 신축 오피스 준공 청소',
    category: 'construction',
    image: '/images/portfolio-office.webp',
    size: '800평',
    duration: '2일',
    description: '공사 후 남은 분진과 잔여물을 정리했습니다.',
  },
  {
    id: '2',
    title: '하남 상가 건축 준공 청소',
    category: 'construction',
    image: '/images/portfolio-retail.webp',
    size: '120평',
    duration: '2일',
    description: '상가 오픈 전 공간 완성도를 높였습니다.',
  },
  {
    id: '3',
    title: '강동구 학원 정기 관리',
    category: 'maintenance',
    image: '/images/portfolio-academy.webp',
    size: '70평',
    duration: '주 2회',
    description: '학생들이 쓰는 공간을 위생 중심으로 관리합니다.',
  },
  {
    id: '4',
    title: '서초구 신축 아파트 입주 청소',
    category: 'move-in',
    image: '/images/portfolio-apartment.webp',
    size: '32평',
    duration: '1일',
    description: '새로운 시작을 위한 입주 공간을 준비했습니다.',
  },
];
