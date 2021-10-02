const path = require('path')
const common = require('../webpack.common')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'images/[name].[hash][ext][query]'
  },
  plugins:[
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. CSS -> Files
          'css-loader',   // 2. CSS -> CommonJS
          'sass-loader'   // 1. SASS -> CSS
        ]
      },
    ]
  },
})