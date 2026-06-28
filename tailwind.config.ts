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
        primary: "#1a1a1a",
        accent: "#c0392b",
        bg: "#f5f4f0",
        card: "#ffffff",
        muted: "#6b7280",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        none: "0",
        full: "9999px",
      }
    },
  },
  plugins: [],
};
export default config;
