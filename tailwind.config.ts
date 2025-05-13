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
        kylithAccent: "#3B82F6",
        kylithSuccess: "#10B981",
        kylithWarning: "#F59E0B",
        kylithAlert: "#EF4444",
      },
      textColor: {
        primary: "#1f2937",
        "primary-dark": "#F3F4F6",
        secondary: "#6B7280",
        "secondary-dark": "#D1D5DB",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#0EA5E9",
        disabled: "#9CA3AF",
      },
    },
  },
} satisfies Config;
