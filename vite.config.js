import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    open: '/login',
  },


  plugins: [react()],

  // to be directed straight to the login page.
 
})

