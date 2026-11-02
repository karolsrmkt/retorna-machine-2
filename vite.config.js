import { defineConfig } from 'vite';

export default defineConfig({
  base: '/retorna-machine-2/',
  server: {
    port: 3000,
    open: false,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  }
});
