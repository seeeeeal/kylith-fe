import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        kylith: {
          DEFAULT: "#1f2937", // メインカラー
          light: "#3f4c6b",
          dark: "#111827",
        },
      },
    },
  },
} satisfies Config;
