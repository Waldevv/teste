import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/testepage/', // Substitua pelo nome do seu repositório
  plugins: [react()],
});
