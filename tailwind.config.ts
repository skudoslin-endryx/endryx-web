import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Endryx Brand Colors
        void: "#080808",      // 主背景：虚空黑
        signal: "#FF5A00",    // 强调色：信号橙
        tech: "#FFFFFF",      // 文字：科技白
        muted: "#888888",     // 辅助文字：灰色
      },
      fontFamily: {
        // 优先使用 Impact (极粗), Arial Black, 或系统默认黑体
        display: ["Impact", "Arial Black", "Heiti SC", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Heiti SC", "PingFang SC", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;