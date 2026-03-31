import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brown: '#5D4037',
          DEFAULT: '#5D4037',
        },
        secondary: {
          brown: '#795548',
          DEFAULT: '#795548',
        },
        dark: {
          brown: '#3E2723',
          DEFAULT: '#3E2723',
        },
        light: {
          brown: '#A1887F',
        },
        beige: '#D7CCC8',
        cream: '#EFEBE9',
        gold: '#C9A961',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
