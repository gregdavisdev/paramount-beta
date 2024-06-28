/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{html,js,svelte,ts}' ],
  theme: {
    extend: {}
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ]
};

