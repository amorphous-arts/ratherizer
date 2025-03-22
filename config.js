import {defineConfig} from "vite";

export default defineConfig({
  mode: 'development',
  build: {
    rollupOptions: {
      external: new RegExp('/src/setup.ts')
    }
  },
  server: {
    allowedHosts: ['50d3-2a0a-ef40-264-7e01-f1b-7b36-2112-d46b.ngrok-free.app'],
  }
})
