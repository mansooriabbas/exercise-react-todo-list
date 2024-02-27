import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/exercise-react-todo-list/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});