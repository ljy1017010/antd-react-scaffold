

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 10000,
    open: true,
    hot: true,
    overlay: true,
    historyApiFallback: true,
    proxy: {
      '/user/': {
        target: 'https://www.user.com',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
