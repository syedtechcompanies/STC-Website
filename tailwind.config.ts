import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0ea5e9",
          700: "#0ea5e9",
          800: "#0284c7",
          900: "#0369a1",
        },
        ink: {
          DEFAULT: "#0b1210",
          soft: "#4b5563",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,20,0.04), 0 8px 24px rgba(16,24,20,0.06)",
        cta: "0 8px 20px rgba(14,165,233,0.28)",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
