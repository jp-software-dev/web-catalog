import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Genera dist/404.html (copia de index.html): el servidor lo entrega con estado 404
// y la app muestra su página "no encontrada" para la ruta solicitada.
function spaNotFoundPage(): Plugin {
  let outDir = 'dist'
  return {
    name: 'spa-404-page',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), spaNotFoundPage()],
  // Rutas absolutas: necesarias para que /catalogo, /nosotros, etc. carguen sus assets correctamente
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
