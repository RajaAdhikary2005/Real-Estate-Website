/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontsize:{
        s:"0.75rem",
        b:"0.875rem",
        m:"0.1rem",
        l:"1.25rem",
        xl:"1.5rem",
        "2xl":"1.75rem",
        "3xl":"2.25rem",
      }
    },
  },
  plugins: [],
}

