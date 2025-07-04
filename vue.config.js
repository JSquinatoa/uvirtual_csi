const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        hostname: 'tu-nombre-de-codespace.github.dev', // 👈 pon aquí tu URL sin https://
        port: 443,
        protocol: 'wss'
      }
    }
  }
});
