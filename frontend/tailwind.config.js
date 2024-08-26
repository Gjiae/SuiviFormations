/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],  theme: {
        fontSize: {
          '8xl': ['24px', {
            lineHeight: '33px',
            letterSpacing: '0%',
            fontWeight: 'Bold',
          }],
        },
    extend: {},
  },
  plugins: [],
}

