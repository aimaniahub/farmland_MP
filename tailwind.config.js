/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#3A6D3B',
        accent: '#F39C12',
        'dark-text': '#212529',
        'subtle-text': '#555555',
        'section-background': '#F8F9FA',
        'white-background': '#FFFFFF',
      },
      animation: {
        'fade-in-slide-up': 'fadeInSlideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
