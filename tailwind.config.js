/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroImg:
          "url('https://www.apple.com/v/home/be/images/heroes/iphone-15-pro/hero_iphone15pro_announce__c1coc7n3a0uq_medium_2x.jpg')",
      },
    },
  },
  plugins: [],
};
