/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
      },
      borderRadius: {
        '4xl': '8px',
      },
      colors: {
        back: '#151122',
        primary: '#00ffce',
        accent: '#ffff24',
        secondary: '#b100e8',
        main: '#1f1f2d',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
