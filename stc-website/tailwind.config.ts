import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6f1",
          100: "#dcebe2",
          500: "#1a8a47",
          600: "#0f7a3a",
          700: "#0b6b30",
          800: "#085726",
          900: "#064420",
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
        cta: "0 8px 20px rgba(11,107,48,0.28)",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
