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
        brand: {
          red: '#931F1D',    // Deep red
          green: '#D2E59E',  // Soft light green
          olive: '#918868',  // Grounded olive/grey
          orange: '#FF7F11', // Vibrant orange
        },
      },
      fontFamily: {
        // This adds a serif font option for that "editorial" look
        serif: ['ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;