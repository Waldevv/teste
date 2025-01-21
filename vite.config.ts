import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/thinklib-documentation/', // Use o nome do seu repositório no GitHub
  plugins: [react()],
})
