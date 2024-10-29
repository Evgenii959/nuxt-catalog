import { defineConfig } from 'vite';
import createVuePlugin from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: '/nuxt-catalog/',
  plugins: [createVuePlugin()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: false,
  },
});
