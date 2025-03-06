import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/quotes': 'https://54c8dfcb-ed25-4c7d-9f75-fcfca328811c-00-272h8st32jy5s.riker.replit.dev', // Proxy the API request
    },
  },
})