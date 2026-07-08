/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        emerald: {
          50: '#f0fdf4',
          200: '#a7f3d0',
          600: '#059669',
        },
        amber: {
          50: '#fffbeb',
          200: '#fde68a',
          600: '#d97706',
        },
        red: {
          50: '#fef2f2',
          200: '#fecaca',
          600: '#ef4444',
        },
      },
      keyframes: {
        fadein: {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideup: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadein: 'fadein 0.2s ease',
        slideup: 'slideup 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};