import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": 'fadeIn .5s ease-in-out',
        "fade-out": 'fadeOut .5s ease-in-out',
        "pulse-long": 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
    }
  },
  plugins: [],
  darkMode: "class"
};
export default config;
