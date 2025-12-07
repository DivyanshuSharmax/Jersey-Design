/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Dark Slate
        secondary: "#1e293b", // Slate 800
        accent: "#38bdf8", // Sky 400
        "accent-hover": "#0ea5e9", // Sky 500
      },
      fontFamily: {
        sans: ['"Outfit"', "sans-serif"],
        mono: ['"Space Grotesk"', "monospace"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }
    },
  },
  plugins: [],
}