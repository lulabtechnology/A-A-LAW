import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#283849",
          slate: "#52667D",
          mist: "#BDC5D4",
          pearl: "#D1CECA",
          gold: "#BDC5D4",
          ivory: "#F4F3EF"
        }
      },
      boxShadow: {
        soft: "0 24px 56px rgba(40, 56, 73, 0.13)",
        glow: "0 0 0 1px rgba(189, 197, 212, 0.22), 0 22px 55px rgba(40, 56, 73, 0.18)"
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(90deg, rgba(40,56,73,0.92) 0%, rgba(82,102,125,0.78) 42%, rgba(82,102,125,0.36) 70%, rgba(189,197,212,0.08) 100%)",
        "hero-overlay-mobile": "linear-gradient(180deg, rgba(40,56,73,0.82) 0%, rgba(82,102,125,0.52) 42%, rgba(40,56,73,0.94) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
