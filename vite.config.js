import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
VitePWA({
  registerType: 'autoUpdate',
  workbox: {
   navigateFallback:'/offline.html'
  },
  includeAssets:['offline.html'],
  manifest:{
    name:'Vite React pwa',
    short_name:'Pwa',
    start_url:'/',
    background_color:'rgba(255, 0, 0, 0.53)',
    theme_color:'rgba(170, 255, 0, 1)',
    display:'standalone',
    icons:[
       { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  }
})

  ]
})
