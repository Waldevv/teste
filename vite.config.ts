import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/thinklib-documentation/', // Substitua pelo nome exato do repositório no GitHub
  plugins: [react()],
});
