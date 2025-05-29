/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#646cff',
          dark: '#818cf8',
        },
        secondary: {
          light: '#535bf2',
          dark: '#6366f1',
        },
      },
    },
  },
  plugins: [],
}

