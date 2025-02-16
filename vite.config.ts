import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': pathResolve('src/components'),
      '@constants': pathResolve('src/constants'),
      '@containers': pathResolve('src/containers'),
      '@hooks': pathResolve('src/hooks'),
      '@services': pathResolve('src/services'),
      '@utils': pathResolve('src/utils'),
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs'],
      strictRequires: true,
      transformMixedEsModules: true,
    },
  },
});
