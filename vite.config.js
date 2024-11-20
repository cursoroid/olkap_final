import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/home/', // Adjust '/subpath/' based on your deployment
  plugins: [react()],
})
