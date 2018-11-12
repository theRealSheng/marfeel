const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devtool: 'inline-source-map',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new CopyWebpackPlugin([{ 
        from: './src/data.json',
        to: __dirname + '/dist/data.json'
    }])
  ],
  devServer: {
      contentBase: './dist'
  },
  module: {
      rules: [{
          test: /\.css/,
          use: ['style-loader', 'css-loader']
      }]
  }
};