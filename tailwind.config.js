/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        brush: ['"Kaushan Script"', '"Caveat Brush"', 'cursive'],
        paint: ['"Caveat Brush"', 'cursive'],
        marker: ['"Permanent Marker"', 'cursive'],
        bungee: ['"Bungee"', 'sans-serif'],
        surfer: ['"Original Surfer"', 'cursive'],
      },
      colors: {
        azure: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
        },
        sapphire: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
        },
        ember: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        sun: {
          400: '#facc15',
          500: '#eab308',
        },
        sunset: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        forest: {
          50: '#f0f7f0',
          100: '#d4ede4',
          200: '#a8d9c8',
          300: '#7ab87a',
          400: '#4a8c4a',
          500: '#2d6b2d',
          600: '#1a3d1a',
          700: '#0f1a0f',
          800: '#0a140a',
          900: '#060d06',
        },
        gold: {
          300: '#f0db7d',
          400: '#d4c47a',
          500: '#a89858',
        },
        sage: {
          300: '#c8d4c8',
          400: '#9ca89c',
          500: '#6b7a6b',
        },
        cream: {
          100: '#f5f0e8',
          200: '#f0ebe0',
        },
      },
    },
  },
  plugins: [],
};