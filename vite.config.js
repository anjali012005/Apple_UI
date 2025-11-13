import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jiwaji",
    project: "javascript-react"
  })],

  optimizeDeps: {
   include: ['@react-three/drei']
 },

  build: {
    sourcemap: true
  }
})