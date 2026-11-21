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
          950: '#030611', // Ultra deep midnight
          900: '#060c1d', // Deep royal navy base
          850: '#0a1228', // Deep card background
          800: '#0f1a38', // Elevated card surface
          750: '#15244e', // Hover card surface
          700: '#1c2f64', // Subtle border
          600: '#273e80',
          500: '#3553a8',
        },
        dark: {
          950: '#030611',
          900: '#060c1d',
          850: '#0a1228',
          800: '#0f1a38',
          750: '#15244e',
          700: '#1c2f64',
          600: '#273e80',
        },
        gold: {
          50: '#fefdf9',
          100: '#fcf8ec',
          200: '#f7eccb',
          300: '#eed89a',
          400: '#e5c05d',
          500: '#d4af37', // Signature 24K Royal Gold
          600: '#ba9424',
          700: '#947217',
          800: '#775917',
          900: '#644818',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'card-hover': '0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 25px -5px rgba(212, 175, 55, 0.12)',
      }
    },
  },
  plugins: [],
}
