/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'buksu-blue': '#0038a8', // Representing Bukidnon State University [cite: 77]
      },
    },
  },
  plugins: [],
}