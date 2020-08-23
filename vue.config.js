module.exports = {
  publicPath: "./",
  baseUrl: './',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
      proxy: {
          '/': {
              target: 'api接口',
              secure: false,
              changeOrigin: true,
              pathRewrite: {
                  '^/': ''
              }
          }
      }
  }
}