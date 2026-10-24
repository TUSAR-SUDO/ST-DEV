import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#070709",
          surface: "#0e0e12",
          card: "rgba(18, 18, 24, 0.75)",
        },
        gold: {
          DEFAULT: "#FDE047",
          muted: "#ca8a04",
          bright: "#fef08a",
        },
        cyber: {
          cyan: "#38BDF8",
          dark: "#0284c7",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        sketch: ["var(--font-caveat)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
