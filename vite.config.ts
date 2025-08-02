import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  css: {
    postcss,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  json: {
    stringify: false
  },
});
