/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Mobile-first breakpoints
      'mobile': {'max': '767px'},
      'tablet': {'min': '768px', 'max': '1023px'},
      'desktop': {'min': '1024px'},
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        heading: ['DM Serif Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        // New Design System Colors
        'primary-green': '#006837',
        'light-green': '#EBF4F0',
        'creamy-white': '#FCFBF8',
        'interactive-blue': '#007BFF',
        'earthy-brown': '#3E2723',
        'text-dark': '#333333',

        // Primary Green Color Palette (updated)
        primary: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#5bb85b',
          500: '#006837', // Updated to match new primary-green
          600: '#005a2f',
          700: '#004d27',
          800: '#003f1f',
          900: '#003217',
          950: '#001a0c',
        },
        // Accent Orange Color Palette
        secondary: {
          50: '#fef9f0',
          100: '#fef5e0',
          200: '#fdecc4',
          300: '#fbd99c',
          400: '#f8c572',
          500: '#F39C12', // Main accent orange
          600: '#E67E22',
          700: '#D35400',
          800: '#A04000',
          900: '#7D3200',
          950: '#4A1E00',
        },
        // Earth Tones
        earth: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ebe6e0',
          300: '#ddd4c7',
          400: '#c9b99f',
          500: '#b5a082',
          600: '#9d8a6b',
          700: '#7d6b52',
          800: '#5d4f3e',
          900: '#3d342a',
          950: '#1f1c18',
        },
        // Sage Green for accents
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d2c7',
          300: '#9fb49f',
          400: '#7a927a',
          500: '#5f7a5f',
          600: '#4a614a',
          700: '#3c4f3c',
          800: '#324032',
          900: '#2a352a',
          950: '#161c16',
        },
        // Cream for backgrounds
        cream: {
          50: '#fefefe',
          100: '#fefcf8',
          200: '#fdf8f0',
          300: '#fbf2e3',
          400: '#f8e8d1',
          500: '#f4dbb8',
          600: '#ecc794',
          700: '#dfa968',
          800: '#c8884a',
          900: '#a06d3a',
          950: '#5a3c20',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'farm-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f0f9f0\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        // Legacy names (kept for backward compatibility)
        'fade-in': 'fadeIn 0.5s ease-in-out both',
        'slide-up': 'slideUp 0.6s ease-out both',
        'slide-down': 'slideDown 0.6s ease-out both',
        'slide-left': 'slideInLeft 0.7s ease-out both',
        'slide-right': 'slideInRight 0.7s ease-out both',
        'zoom-in': 'zoomIn 0.6s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out both',

        // New canonical names
        fadeIn: 'fadeIn 0.5s ease-in-out both',
        fadeInUp: 'fadeInUp 0.8s ease-out both',
        fadeInDown: 'fadeInDown 0.8s ease-out both',
        slideInLeft: 'slideInLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        slideInRight: 'slideInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        zoomIn: 'zoomIn 0.6s ease-out both',
        floatGentle: 'float 8s ease-in-out infinite',

        // New Design System Animations
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'count-up': 'count-up 2s ease-out forwards',
        'lift': 'lift 0.3s ease-out forwards',
        'pulse-interactive': 'pulse-interactive 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-24px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(24px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        zoomIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'lift': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-2px)' },
        },
        'pulse-interactive': {
          '0%, 100%': { 
            opacity: '1', 
            transform: 'scale(1)',
            boxShadow: '0 4px 15px rgba(0, 123, 255, 0.15)'
          },
          '50%': { 
            opacity: '0.9', 
            transform: 'scale(1.05)',
            boxShadow: '0 8px 25px rgba(0, 123, 255, 0.25)'
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
};
