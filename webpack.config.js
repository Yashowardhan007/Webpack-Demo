const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[new HtmlWebpackPlugin(
    { template: './src/template.html' }
  )],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{loader: "style-loader"},{loader: "css-loader"},{loader: "sass-loader"}]
      }
    ]
  }

  
}