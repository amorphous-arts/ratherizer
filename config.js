import {defineConfig} from "vite";

export default defineConfig({
  mode: 'development',
  build: {
    rollupOptions: {
      external: new RegExp('/src/setup.ts')
    }
  }
})
