import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './dist/client',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
})
