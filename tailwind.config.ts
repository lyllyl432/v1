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
        "primary-color": "rgb(11, 11, 12)",
        "secondary-color": "rgb(255, 255, 255)",
        "primary-accent": "rgb(181, 23, 158)",
        "primary-accent-variant": "rgba(181, 23, 158, 0.3)",
        "secondary-accent": "rgb(58, 12, 163)",
        "secondary-accent-variant": "rgba(58, 12, 163, 0.3)",
        "neutral-color": "rgba(255, 255, 255, 0.5)",
        "neutral-color-variant": "rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
