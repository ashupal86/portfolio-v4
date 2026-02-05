import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from network
    port: 5173,
    open: true,
    strictPort: false,
    allowedHosts: [
      'localhost',
      'ashu.devinit.in',
      'eager-wildly-bug.ngrok-free.app',
    ],
    cors: {
      origin: [
        'http://localhost:5173',
        'http://ashu.devinit.in',
        'https://ashu.devinit.in',
        'https://eager-wildly-bug.ngrok-free.app',
      ],
      credentials: true,
    },
    hmr: {
      // This allows HMR to work through ngrok and other tunnels
      protocol: 'wss',
      host: undefined, // Will use the actual host from the request
      clientPort: 443, // ngrok uses 443 for HTTPS
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
