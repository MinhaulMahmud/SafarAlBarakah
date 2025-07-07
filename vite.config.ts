import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // This allows external connections
    allowedHosts: ['0e1a-103-115-24-101.ngrok-free.app']
  }
})