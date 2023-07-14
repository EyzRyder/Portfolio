/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
        alt: 'var(--font-cherry)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-main': '#430220',
        primary: '#FFD700',
        'primary-tint': '#E8A21F',
        secondary: '#6C162B',
        tertiary: '#B8522E',
      },
      keyframes: {
        sliding: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee: {
          '0%': { left: '0' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        marque: '5s marquee infinite linear',
        slide: '8s sliding infinite linear',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
