import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0C2340",
          primary: "#0051A8",
          light: "#E6F0FA",
          accent: "#00A896"
        },
      },
    },
  },
  plugins: [],
};
export default config;