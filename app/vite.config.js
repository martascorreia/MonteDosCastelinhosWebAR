import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/MonteDosCastelinhosWebAR/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return;
          }

          if (
            id.includes('three') ||
            id.includes('@react-three') ||
            id.includes('aframe') ||
            id.includes('@ar-js-org')
          ) {
            return 'ar-vr-vendor';
          }

          if (id.includes('@react-google-maps') || id.includes('google-map')) {
            return 'map-vendor';
          }

          if (
            id.includes('react-router') ||
            id.includes('/react/') ||
            id.includes('react-dom') ||
            id.includes('scheduler')
          ) {
            return 'react-vendor';
          }

          return 'vendor';
        },
      },
    },
  },
});
