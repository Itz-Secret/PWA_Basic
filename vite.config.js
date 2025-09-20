import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/.*/i,  // API requests
        handler: 'NetworkFirst',   // Try internet first, fallback to cache
        options: {
          cacheName: 'api-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 // 1 day
          }
        }
      },{
        urlPattern:/^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler:'StaleWhileRevalidate',
        options:{
          cacheName:'fonts-cache'
        }
      }
    ]
  }
})

  ]
})
