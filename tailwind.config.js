/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: "rgb(var(--color-moss) / <alpha-value>)",
        forest: "rgb(var(--color-forest) / <alpha-value>)",
        coral: "rgb(var(--color-coral) / <alpha-value>)",
        blush: "rgb(var(--color-blush) / <alpha-value>)",
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        charcoal: "rgb(var(--color-charcoal) / <alpha-value>)",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
