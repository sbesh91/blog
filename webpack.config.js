const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    index: './src/index.js'    
  },  
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: './bundle-[hash].js',

  },
  devtool: 'source-map',
  watch: false,
  plugins: [
    new UglifyJSPlugin({ 
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.IgnorePlugin(/vertx/)
  ]
};