import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/models/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0F1419',
        'gray': '#5B7083',
        'pink': '#F4245E',
        'primaryBlue': '#1DA1F2',
        'liteGray' : '#EBEEF0' ,
      },
    },
  },
  plugins: [],
};
export default config;
