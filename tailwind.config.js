/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#080808',
          dark: '#111111',
          red: '#d71920',
          light: '#f4f1eb',
          cream: '#f7f4ee',
          white: '#ffffff',
        }
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}
