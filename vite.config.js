import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';



export default defineConfig({
  plugins: [react(),
  tailwindcss('./tailwind.config.js'),],
  optimizeDeps: {

  },
  define: {
    'process.env': process.env
  },
  server:{
    port:3000
  }


})
