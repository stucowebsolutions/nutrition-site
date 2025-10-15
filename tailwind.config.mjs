/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          600: "#059669",
          700: "#047857",
        },
      },
    },
  },
  plugins: [],
};
