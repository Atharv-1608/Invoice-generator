/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // override only the ones you actually use
        blue: {
          700: "#1D4ED8", // used in Invoice title
          900: "#1E3A8A", // dark blue
        },
        pink: {
          700: "#BE185D", // submitted date
        },
        gray: {
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          900: "#111827",
        }
      }
    },
  },
  plugins: [],
}
