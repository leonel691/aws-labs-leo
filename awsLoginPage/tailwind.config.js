/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Assurez-vous que Tailwind analyse tous vos fichiers de composants
  ],
  theme: {
    extend: {
      // Définissez vos variables CSS ici si vous voulez les utiliser directement dans Tailwind
      colors: {
        'var-border-color': 'var(--border-color)',
        'var-bg-input': 'var(--bg-input)',
        'var-first-text-color': 'var(--first-text-color)',
        'var-bg-validation': 'var(--bg-validation)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Définissez la police Inter
      },
    },
  },
  plugins: [],
}
