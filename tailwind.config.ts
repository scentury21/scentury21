import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--color-obsidian)",
        charcoal: "var(--color-charcoal)",
        graphite: "var(--color-graphite)",
        smoke: "var(--color-smoke)",
        pearl: "var(--color-pearl)",
        cream: "var(--color-cream)",
        champagne: "var(--color-champagne)",
        rose: "var(--color-rose)",
        gold: "var(--color-gold)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
