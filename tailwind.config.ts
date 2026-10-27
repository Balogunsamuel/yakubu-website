import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        navy: {
          DEFAULT: '#0a1520',
          light: '#0f2233',
          lighter: '#162a40',
        },
        brand: {
          red: {
            DEFAULT: '#e11d2e',
            hover: '#c91a28',
            light: '#ff3344',
          },
          teal: {
            DEFAULT: '#2a9bbf',
            glow: '#1f7a99',
            light: '#3bb8de',
          },
        },
        // Neutrals
        grey: {
          50: '#f8fafc',
          100: '#f4f7fa',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
        // Bullet colors (from flyer)
        bullet: {
          green: '#22c55e',
          white: '#ffffff',
          red: '#e11d2e',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
