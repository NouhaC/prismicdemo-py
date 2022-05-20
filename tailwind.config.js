module.exports = {
  content: [
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './components/**/*.vue',
    './slices/**/*.vue',
    './nuxt.config.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10.5rem',
      },
    },
    extend: {
      borderRadius: {
        sm: '3px',
      },
      colors: {
        background: 'var(--background)',
        'background-alt': 'var(--background-alt)',
        'color-1': 'var(--color-1)',
        'color-2': 'var(--color-2)',
        'color-3': 'var(--color-3)',
        cta: 'var(--cta)',
        'cta-hover': 'var(--cta-hover)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
