/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#080F1E',
        forecast: {
          blue: '#2563EB',
          sky: '#60A5FA',
          amber: '#F59E0B',
          surface: '#F8FAFC',
          slate: '#1E293B',
          muted: '#64748B',
        },
      },
      fontFamily: {
        display: ['Cabinet Grotesk', 'sans-serif'],
        sans: ['DM\\ Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
