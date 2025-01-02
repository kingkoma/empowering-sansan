import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: 'webp',
        quality: '80',
        w: '1920'
      })
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: false, // Set to true if you want source maps in production
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          markdown: ['react-markdown']
        }
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true
  }
})
