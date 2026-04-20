import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'golden-hour': '#D4A574',
        'blue-hour': '#4A6FA5',
        'neon-accent': '#00F5FF',
        'cinema-black': '#0A0A0B',
        'glass-white': 'rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4A574 0%, #F4E4C1 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1e3a8a 0%, #4A6FA5 100%)',
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(212,165,116,0.4)',
        'glass': '0 8px 32px 0 rgba(31,38,135,0.37)',
      },
      cursor: {
        'lens': 'url(/camera-cursor.svg), auto',
      },
    },
  },
  plugins: [],
}
export default config
