const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = relatedPath => path.resolve(__dirname, relatedPath);

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: resolve('../index.js')
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:7].bundle.js',
    chunkFilename: '[name].[chunkhash].chuck.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'index.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        exclude: /\.modules\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          },
          "less-loader"
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:7].[ext]',
              limit: 1000, // size <= 1KB
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@src': resolve('../src'),
    }
  }
}
