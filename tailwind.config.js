/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{vue,ts,jsx,tsx,html,js}', './index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        full: '9999px'
      }
    }
  },
  plugins: []
}
