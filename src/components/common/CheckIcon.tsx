interface CheckIconProps {
  className?: string;
}

// 원형 테두리 + 굵은 체크 + 왼쪽 위 포인트 곡선. 색은 currentColor(브랜드 네이비)를 따른다.
export default function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* 원형 테두리 (왼쪽 위 일부를 비워서 포인트 곡선과 자연스럽게 이어지게) */}
      <path d="M40 24a16 16 0 1 1-6.5-12.9" strokeWidth={3} />
      {/* 왼쪽 위 포인트 곡선 */}
      <path d="M9.5 18.5C11 12 16 8.5 22 7.5" strokeWidth={3} />
      {/* 체크 */}
      <path d="M17 25l6 6.5L33 16.5" strokeWidth={3.5} />
    </svg>
  );
}
