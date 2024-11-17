const { defineConfig } = require('@vue/cli-service');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gestor_tareas_vue/'
    : '/',
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip', // Algoritmo para comprimir (gzip es estándar)
        test: /\.(js|css|html|svg)$/, // Tipos de archivos que serán comprimidos
        threshold: 10240, // Tamaño mínimo en bytes para comprimir (10 KiB)
        minRatio: 0.8, // Relación mínima de compresión (80%)
      }),
    ],
  },
});
