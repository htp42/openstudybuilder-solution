import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    vue(),
    vuetify({ styles: { configFile: 'src/styles/settings.scss' } }),
  ],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.173:5005',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
