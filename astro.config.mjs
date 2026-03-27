import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Jvanduyn.github.io',
  base: '/5280-Construction',

  vite: {
    plugins: [tailwindcss()],
  },
});