import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        xxs: ["clamp(10px,0.7vw,12px)"],
      },
      colors: {
        kui: {
          default: "#1f2937",
          primary: "#3B82F6",
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
          border: "#D1D5DB",
          base: "#f3f4f6",
        },
      },
      textColor: {
        kui: {
          default: "#1f2937",
          secondary: "#6B7280",
          tertiary: "#9CA3AF",
          disabled: "#9CA3AF",
          primary: "#3B82F6",
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
        },
      },
    },
  },
} satisfies Config;
