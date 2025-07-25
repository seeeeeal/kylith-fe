import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,ts,tsx}", "./index.html"],
  darkMode: "class",
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
          success: {
            DEFAULT: "#10B981",
            light: "#D1FAE5",
            dark: "#047857",
          },
          error: {
            DEFAULT: "#EF4444",
            light: "#FEE2E2",
            dark: "#991B1B",
          },
          warning: {
            DEFAULT: "#F59E0B",
            light: "#FEF3C7",
            dark: "#B45309",
          },
          info: {
            DEFAULT: "#3B82F6",
            light: "#DBEAFE",
            dark: "#1E40AF",
          },
          border: "#D1D5DB",
          base: "#f3f4f6",
          gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
          },
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
