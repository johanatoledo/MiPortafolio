
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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};