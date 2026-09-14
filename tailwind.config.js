/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090d',
        surface: {
          DEFAULT: '#0d1017',
          elevated: '#121722',
        },
        primary: '#f5f7fb',
        secondary: '#9ba4b5',
        muted: '#626b7d',
        accent: {
          DEFAULT: '#8b9cff',
          hover: '#9fadff',
          secondary: '#6ee7b7',
        },
        terminal: {
          green: '#7ee787',
          blue: '#79c0ff',
          yellow: '#e3b341',
          red: '#ff7b72',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
