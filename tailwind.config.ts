import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem', screens: { '2xl': '1440px' } },
    extend: {
      colors: {
        background: '#f9faf3', foreground: '#1a1c18',
        primary: { DEFAULT: '#4F7302', foreground: '#ffffff', dark: '#022601', hover: '#3E5902' },
        secondary: { DEFAULT: '#799833', foreground: '#ffffff' },
        surface: '#ffffff', 'surface-soft': '#D6D979',
        border: '#E2E8F0', 'on-surface-variant': '#42493f', muted: '#eeeee7'
      },
      borderRadius: { sm: '4px', DEFAULT: '8px', lg: '8px', xl: '16px' },
      boxShadow: { ambient: '0px 4px 20px rgba(2, 38, 1, 0.08)' }
    }
  },
  plugins: []
} satisfies Config
