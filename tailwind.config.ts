import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#0b0b0c",
        "secondary-color": "#ffffff",
        "primary-accent": "#B5179E",
        "secondary-accent": "#3a0ca3",
        "secondary-accent-variant": "rgba(58, 12, 163, 0.3)",
        "neutral-color": "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
