const path = require('path')

module.exports = {
  entry: {
    main:'./src/app.js',
    vendor:'./src/vendor.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  }
}