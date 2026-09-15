import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F7",
        foreground: "#111111",
        secondary: "#F4F3F0",
        surface: "#FFFFFF",
        "surface-hover": "#F9F8F6",
        border: "#E7E5E4",
        "border-light": "#EEEEEE",
        muted: "#666666",
        dark: {
          DEFAULT: "#0D0D0D",
          surface: "#141414",
          border: "#262626",
        },
        accent: {
          DEFAULT: "#B8FF3D", // Subtle lime
          dark: "#000000",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.15em",
        editorial: "0.25em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
