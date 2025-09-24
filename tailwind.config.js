/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'bounce-slow': 'bounce 3s infinite',
          'pulse-slow': 'pulse 3s infinite',
          'fade-in': 'fadeIn 0.5s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        backdropBlur: {
          xs: '2px',
        }
      },
    },
    plugins: [],
  }