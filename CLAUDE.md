# Project Contract — 오늘의 청소 (Today's Clean) | 메인 페이지

## 1. Commands
```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm start        # 프로덕션 서버 실행
npm run lint     # ESLint 검사
npm test         # 테스트 실행
```

## 2. Stack
- **Framework**: Next.js 15 (App Router) + TypeScript
- **스타일링**: Tailwind CSS + GSAP (애니메이션)
- **DB**: 현재 정적 콘텐츠 (JSON/상수) / 향후 Neon PostgreSQL
- **배포**: Vercel
- **폰트**: Pretendard (한글) + Inter (영문)

## 3. Project Structure
```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css
├── components/
│   ├── sections/           # 메인 페이지 섹션들
│   │   ├── Hero.tsx
│   │   ├── Service.tsx
│   │   ├── WhyToday.tsx
│   │   ├── Process.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Review.tsx
│   │   ├── BrandStory.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   └── common/             # 재사용 컴포넌트 (Header, Footer, Button, Card 등)
├── data/                   # 정적 콘텐츠
│   ├── services.ts
│   ├── portfolio.ts
│   ├── reviews.ts
│   ├── faqs.ts
│   └── company.ts
├── lib/
│   └── utils.ts
└── styles/
    └── variables.css
```

## 4. Safety Rules
- `.env*` 파일은 절대 열거나 읽거나 수정하지 않는다.
- 이미지/영상 에셋은 `/public` 디렉토리에만 저장한다.
- 타입스크립트 strict 모드 유지 (`"strict": true`)
- 파일 삭제·외부 발송 등 실패 비용이 큰 작업은 실행 전 사람 승인을 받는다.

## 5. Design System
- **색상**:
  - 배경: #FFFFFF (흰색)
  - 강조: #1E3A5F (딥 네이비)
  - 보조: #E8F0F7 (연한 하늘색)
  - 텍스트: #2C3E50 (진회색)
- **타이포그래피**: H1 32-48px Bold / H2 24-32px SemiBold / Body 14-16px Regular
- **애니메이션**: GSAP Scroll 트리거, Hero 비디오 자동재생 (음소거)

## 6. Workflow Protocol
- **Plan First**: 섹션 작업 전에 데이터 구조·컴포넌트 Props 정리
- **Component-Driven**: 각 섹션 컴포넌트를 독립적으로 테스트 가능하게 작성
- **Mobile First**: 모바일 320px부터 시작, 데스크톱 1440px까지 대응
- **Verification**: 섹션 완성 후 항상 데스크톱/태블릿/모바일에서 검증

## 7. Phase Plan
1. **Phase 1**: 프로젝트 세팅, Header/Footer, 기본 레이아웃
2. **Phase 2**: Hero, Service, Process, Portfolio, Review, CTA
3. **Phase 3**: BrandStory, FAQ, 애니메이션 최적화, 모바일 완성도

## 8. Contacts (Brand Info)
- **회사명**: 오늘의 청소
- **대표**: 김오늘
- **전화**: 010-1234-5678
- **이메일**: todaysclean@abc.com
- **주소**: 서울특별시 [확인 필요]
- **영업시간**: [확인 필요]

## 9. See Also
- 설계 스펙: `/docs/superpowers/specs/`
- 구현 계획: 별도 작성 예정
