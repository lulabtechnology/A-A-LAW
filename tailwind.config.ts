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
          gold: "#CBAA8B",
          ivory: "#F6F3EE"
        }
      },
      boxShadow: {
        soft: "0 24px 56px rgba(40, 56, 73, 0.13)",
        glow: "0 0 0 1px rgba(203, 170, 139, 0.16), 0 22px 55px rgba(40, 56, 73, 0.18)"
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(90deg, rgba(40,56,73,0.92) 0%, rgba(40,56,73,0.74) 40%, rgba(40,56,73,0.34) 68%, rgba(40,56,73,0.08) 100%)",
        "hero-overlay-mobile": "linear-gradient(180deg, rgba(40,56,73,0.78) 0%, rgba(40,56,73,0.48) 40%, rgba(40,56,73,0.92) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
