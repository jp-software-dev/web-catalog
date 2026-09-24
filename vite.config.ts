import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Rutas absolutas: necesarias para que /catalogo, /nosotros, etc. carguen sus assets correctamente
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
