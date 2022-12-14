/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

// https://vitejs.dev/config/
export default defineConfig({
  base: '/popup-challenge/',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts']
  }
})
