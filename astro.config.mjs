import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mastoholdings.com',
  outDir: './dist',
  publicDir: './public',
  srcDir: './src',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [],
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  compressHTML: true,
  output: 'static',
  trailingSlash: 'ignore'
});
