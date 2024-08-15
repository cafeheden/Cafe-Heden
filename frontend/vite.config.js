import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/food-menu': {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: true,
      },
    }
  }
})
