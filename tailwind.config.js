/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#f9f3ea',
          200: '#f2e8d5',
          300: '#e9d8ba',
          400: '#dcc298',
          500: '#cba874',
        },
        clay: {
          400: '#c4956a',
          500: '#b07a4f',
          600: '#966340',
          700: '#7c4f34',
        },
        brown: {
          700: '#5c3a24',
          800: '#4a2e1c',
          900: '#3a2415',
          950: '#2a1810',
        },
        terracotta: {
          400: '#d4754e',
          500: '#c05a33',
          600: '#a84826',
        },
        sage: {
          400: '#8ba87a',
          500: '#6f8e5e',
          600: '#587148',
        },
        sand: {
          200: '#e8dcc8',
          300: '#ddcbb0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'scroll-x': 'scrollX 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
