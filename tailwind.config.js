/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: {
          DEFAULT: '#0a0a0a',
          elevated: '#121212',
        },
        primary: '#ffffff',
        secondary: '#a1a1aa',
        muted: '#52525b',
        accent: {
          DEFAULT: '#f0db7d',
          hover: '#f7e7a0',
          dim: '#c7b055',
          secondary: '#f4ede0',
        },
        terminal: {
          green: '#d4e09b',
          blue: '#e8dbb5',
          yellow: '#f0db7d',
          red: '#e07a5f',
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
