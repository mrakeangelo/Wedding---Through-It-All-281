/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#b3cce5',
          300: '#8db3d8',
          400: '#6699cb',
          500: '#4080be',
          600: '#1a365d',
          700: '#2c5282',
          800: '#2a4365',
          900: '#1a202c',
        },
        sand: {
          50: '#fdf8f0',
          100: '#faf0e1',
          200: '#f5e1c3',
          300: '#f0d2a5',
          400: '#ebc387',
          500: '#e6b469',
          600: '#d4a054',
          700: '#b8873f',
          800: '#9c6e2a',
          900: '#805515',
        },
        burgundy: {
          50: '#fdf2f2',
          100: '#fce4e4',
          200: '#f9c9c9',
          300: '#f5adad',
          400: '#f29292',
          500: '#ef7777',
          600: '#8b2635',
          700: '#7a1e2b',
          800: '#691621',
          900: '#580e17',
        },
        olive: {
          50: '#f7f8f2',
          100: '#eff1e5',
          200: '#dfe3cb',
          300: '#cfd5b1',
          400: '#bfc797',
          500: '#afb97d',
          600: '#6b7c32',
          700: '#5e6d2c',
          800: '#515e26',
          900: '#444f20',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'draw-line': 'drawLine 2s ease-in-out forwards',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        drawLine: {
          '0%': { strokeDasharray: '0 100' },
          '100%': { strokeDasharray: '100 0' },
        },
      },
    },
  },
  plugins: [],
}