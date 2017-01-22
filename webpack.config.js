const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      hash: true
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    historyApiFallback: true,
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
}