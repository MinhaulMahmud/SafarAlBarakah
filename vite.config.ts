import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // This allows external connections
    allowedHosts: ['db9f-103-115-24-65.ngrok-free.app']
  }
})