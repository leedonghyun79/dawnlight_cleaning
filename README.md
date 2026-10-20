# 새벽빛 청소

청소 서비스 소개 웹사이트입니다. Next.js 14 App Router, TypeScript, Tailwind CSS를 사용합니다.

## 실행

```bash
npm ci
npm run dev
```

개발 서버: http://localhost:3000

## 검증 및 배포

```bash
npm run lint
npm run build
npm start
```

## 구성

- `src/app`: 메인, 회사 소개, 서비스, 작업 사례, 후기, FAQ, 문의 페이지
- `src/components`: 공통 UI 및 페이지 섹션
- `src/data`: 회사 정보, 서비스, 사례, 후기, FAQ
- `public/images`: 현재 웹사이트에서 사용하는 이미지와 아이콘
- `docs`: 설계 및 이미지 제작 기록

회사 정보와 콘텐츠는 `src/data`에서 수정합니다. Pretendard는 CDN에서 불러옵니다.

로그, 환경 변수 파일, 의존성 및 빌드 결과물은 Git에서 제외합니다.
