/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        'blue-rgba': 'rgba(67, 114, 244)',
        'off-white': '#F5F5F4'
      },
    },
  },
  plugins: [],
};
