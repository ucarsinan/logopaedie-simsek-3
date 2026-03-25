import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss() as any],
  },
});
