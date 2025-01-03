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
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          markdown: ['react-markdown']
        },
        assetFileNames: ({ type, source }) => {
          if (type === 'asset') {
            return 'assets/[name].[hash].[ext]';
          }
          return '[name].[hash].[ext]';
        }
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      overlay: true
    }
  },
  envPrefix: 'VITE_'
})
