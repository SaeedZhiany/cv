import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cv/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'pdf': ['react-to-pdf'],
          'theme': ['./src/ThemeContext', './src/ThemeToggle'],
          'pdf-resume': ['./src/PDFResume']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
