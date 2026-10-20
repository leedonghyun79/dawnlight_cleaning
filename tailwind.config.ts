import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1E3A5F",
        sky: "#E8F0F7",
        "text-dark": "#2C3E50",
        "text-muted": "#5F6B7A",
        border: "#E0E8F0",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
      // 최소 폰트 크기 15px: text-xs / text-sm 모두 15px로 상향, 본문(text-base) 18px
      fontSize: {
        xs: ["15px", { lineHeight: "1.5" }],
        sm: ["15px", { lineHeight: "1.5" }],
        base: ["18px", { lineHeight: "1.6" }],
      },
    },
  },
  plugins: [],
};
export default config;
