const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(common, {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  },
  /*   plugins:[new HtmlWebpackPlugin(
      { template: './src/template.html' }
    )], */
  /*   module: {
      rules: [
        {
          test: /\.scss$/,
          use: [{loader: "style-loader"},{loader: "css-loader"},{loader: "sass-loader"}]
        }
      ]
    }
   */
  
});