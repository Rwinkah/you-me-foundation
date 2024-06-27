import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,html}',
  ],
  theme: {

    extend: {
      colors: {
        'primaryColor': '#FF1D15'
      },
      fontFamily : {
        'poppins' : ['"Poppins", "sans-serif"'],
        sans : ['"Rethink Sans", "sans-serif"'],
      }
    },
  },
  plugins: [],
} satisfies Config

