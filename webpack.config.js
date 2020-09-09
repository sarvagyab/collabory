const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/collabory.js'
  },
  output: {
    globalObject: 'self',
    path: path.resolve(__dirname, './src/'),
    filename: 'collabory.bundle.js',
    publicPath: '/index/src/'
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    publicPath: '/src/'
  },
}
