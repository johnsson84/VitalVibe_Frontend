import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // to be directed straight to the login page.
  server: {
    open: '/login',
  }
})

