/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'] },
      colors: {
        ink: '#04060f',
        panel: '#0a1230',
        line: '#16265a',
        muted: '#8b97c4',
        brand: { DEFAULT: '#2f6bff', light: '#5cb6ff' },
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        wheel: { '0%,100%': { transform: 'translateY(0)', opacity: 1 }, '50%': { transform: 'translateY(7px)', opacity: 0.3 } },
      },
      animation: { float: 'float 5s ease-in-out infinite', wheel: 'wheel 1.6s ease-in-out infinite' },
    },
  },
  plugins: [],
}
