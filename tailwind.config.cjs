module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0ea5a4',
          dark: '#0b7170',
          light: '#7dd3d6'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      }
    },
  },
  plugins: [],
};
