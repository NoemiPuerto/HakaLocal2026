import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem', screens: { '2xl': '1440px' } },
    extend: {
      colors: {
        background: '#f9faf3',
        foreground: '#1a1c18',
        surface: '#f9faf3',
        'surface-dim': '#dadbd4',
        'surface-bright': '#f9faf3',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f4ed',
        'surface-container': '#eeeee7',
        'surface-container-high': '#e8e9e2',
        'surface-container-highest': '#e2e3dc',
        'on-surface': '#1a1c18',
        'on-surface-variant': '#42493f',
        'inverse-surface': '#2f312d',
        'inverse-on-surface': '#f1f1ea',
        outline: '#73796e',
        'outline-variant': '#c2c9bc',
        'surface-tint': '#426838',
        primary: '#4F7302',
        'primary-hover': '#3E5902',
        'primary-dark': '#022601',
        'on-primary': '#ffffff',
        secondary: '#799833',
        'surface-soft': '#D6D979',
        border: '#E2E8F0',
        muted: '#eeeee7'
      },
      borderRadius: { sm: '4px', DEFAULT: '8px', md: '12px', lg: '16px', xl: '24px' },
      boxShadow: { ambient: '0px 4px 20px rgba(2, 38, 1, 0.08)' }
    }
  },
  plugins: []
} satisfies Config
