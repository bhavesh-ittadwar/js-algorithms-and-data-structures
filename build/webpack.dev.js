const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'images/[name][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles to DOM
          'css-loader',   // 2. CSS -> CommonJS
          'sass-loader'   // 1. SASS -> CSS
        ]
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/template.html',
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    open: true,
  }
})