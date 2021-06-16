const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/modules/main.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'build'),
    libraryTarget: 'this',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader?cacheDirectory=true'],
      },
    ],
  },
}
