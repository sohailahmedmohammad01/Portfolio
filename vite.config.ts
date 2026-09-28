import { sites } from '@openai/sites-vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ isSsrBuild, mode }) => ({
  // GitHub Pages serves the site from /Portfolio/ (built with --mode github-pages).
  base: mode === 'github-pages' ? '/Portfolio/' : '/',
  plugins: [react(), sites()],
  build: isSsrBuild
    ? {
        rollupOptions: {
          output: {
            entryFileNames: 'server/index.js',
          },
        },
      }
    : undefined,
}))
