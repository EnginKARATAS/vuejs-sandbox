const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    proxy: {
        target: 'http://localhost:8080/',
        ws: true,
        changeOrigin: true
    }
  }
}
module.exports = defineConfig({
  transpileDependencies: true
})
