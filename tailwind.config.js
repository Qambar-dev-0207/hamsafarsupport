/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          bg: '#F0F4F1',        // Soft sage-cream off-white
          plum: '#542437',      // Deep plum burgundy
          mauve: '#B8839F',     // Rose mauve
          coral: '#ED8584',     // Coral blush
          coralHover: '#E06F6E',
          cardBg: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.25rem', { lineHeight: '1.05' }],
        '8xl': ['5.5rem', { lineHeight: '1.02' }],
        '9xl': ['7rem', { lineHeight: '1' }],
      },
      spacing: {
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
