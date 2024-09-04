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
        "primary-color": "#000000",
        "secondary-color": "#ffffff",
        "primary-accent": "#480ca8",
        "secondary-accent": "#3a0ca3",
        "neutral-color": "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
