import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';

function normaliseBase(value?: string) {
  const raw = value?.trim() || '/';
  const withLeading = raw.startsWith('/') ? raw : `/${raw}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

export default defineConfig({
  base: normaliseBase(process.env.VITE_BASE_PATH),
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/docs': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        schedule: resolve(__dirname, 'schedule/index.html'),
        materials: resolve(__dirname, 'materials/index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
