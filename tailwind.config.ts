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
          ivory: "#F5F2EE"
        }
      },
      boxShadow: {
        soft: "0 25px 60px rgba(40, 56, 73, 0.12)",
        glow: "0 0 0 1px rgba(203, 170, 139, 0.15), 0 20px 50px rgba(40, 56, 73, 0.15)"
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(90deg, rgba(14,20,28,0.82) 0%, rgba(20,28,38,0.64) 36%, rgba(20,28,38,0.28) 62%, rgba(20,28,38,0.08) 100%)",
        "section-fade": "linear-gradient(180deg, rgba(245,242,238,0) 0%, rgba(245,242,238,0.96) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
