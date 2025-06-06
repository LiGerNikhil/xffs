/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ice-cold': 'var(--ice-cold)',
        'freeze-purple': 'var(--freeze-purple)',
        'medium-purple': 'var(--medium-purple)',
        'purple-pain': 'var(--purple-pain)',
        'heavy-purple': 'var(--heavy-purple)',
        'charcoal': 'var(--charcoal)',
      },
      transitionProperty: {
        'custom': 'var(--transition)',
        'custom-slow': 'var(--transition-slow)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--ice-cold), var(--medium-purple))',
      },
    },
  },
  plugins: [],
};