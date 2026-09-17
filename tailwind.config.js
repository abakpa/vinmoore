/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColor: '#D71920',
        brandDark: '#111317',
        brandInk: '#1B1F24',
        brandMuted: '#667085',
        brandSoft: '#FFF1F1',
        brandLine: '#E6E8EC',
        brandTeal: '#0F766E',
        brandGold: '#C9972A',
        darkPurple: '#111317',
        darkGrayishBlue: '#667085',
        darkBlue: '#1B1F24',
        brightRed: '#D71920',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(17, 19, 23, 0.10)',
        lift: '0 24px 70px rgba(17, 19, 23, 0.16)',
      },
    },
  },
  plugins: [],
}
