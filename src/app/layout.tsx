import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MobileCtaBar from "@/components/common/MobileCtaBar";

export const metadata: Metadata = {
  title: "새벽빛 청소 | 청소 서비스",
  description: "공간마다 정해진 기준으로, 끝까지 챙깁니다. 32평 아파트부터 800평 오피스까지 맡겨주세요.",
  icons: {
    icon: [{ url: "/images/logo-mark.svg?v=2", type: "image/svg+xml" }],
    shortcut: "/images/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <div className="pb-16 md:pb-0">
          <Footer />
        </div>
        <MobileCtaBar />
      </body>
    </html>
  );
}
