import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://5280construction.local',

  vite: {
    plugins: [tailwindcss()],
  },
});