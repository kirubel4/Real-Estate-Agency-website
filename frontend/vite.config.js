import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/detail': 'http://localhost:5000', // Proxy any /detail/* to Express
    },
  },
})
