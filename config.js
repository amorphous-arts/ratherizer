export default {
  mode: 'development',
  build: {
    rollupOptions: {
      external: new RegExp('/src/setup.js')
    }
  }
}
