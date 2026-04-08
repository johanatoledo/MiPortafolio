
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Negro
        primary: '#00ffff', // Cian
        secundary:'#ffffff', // Blanco
        accent: '#ff003c', // Rojo
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};