import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFileSync } from 'fs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'generate-redirect',
      closeBundle() {
        writeFileSync('./dist/_redirects', '/* /index.html 200')
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
