import { sites } from '@openai/sites-vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ isSsrBuild }) => ({
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
