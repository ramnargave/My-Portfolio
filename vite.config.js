import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: true,      // PC ki IP / all hosts pe listen
    port: 5173,      // your dev server port
    strictPort: true,
    allowedHosts: [
      'ungothic-stormlessly-esther.ngrok-free.dev'  // Add your Ngrok host here
    ]
  }
})
