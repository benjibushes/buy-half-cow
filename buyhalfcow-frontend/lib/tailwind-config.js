/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        deer: 'rgb(var(--color-deer) / <alpha-value>)',
        deepChampagne: 'rgb(var(--color-deep-champagne) / <alpha-value>)',
        sepia: 'rgb(var(--color-sepia) / <alpha-value>)',
        bistre: 'rgb(var(--color-bistre) / <alpha-value>)',
        antiqueWhite: 'rgb(var(--color-antique-white) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
