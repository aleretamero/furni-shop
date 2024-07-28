import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#23262F',
        secondary: '#286F6C',
      },
      backgroundImage: {
        hero: "url('/assets/images/bg-hero.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
