/*
Webpack needs to know three things:
1) The starting point of your application, or your root JavaScript file.
2) Which transformations to make on your code.
3) To which location it should save the newly transformed code.
*/

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  // Step 1
  entry: [
    './app/index.js'
  ],
  // Step 2
  module: {
    loaders: [
      {test: /\.coffee$/, exclude: /node-modules/, loader: "coffee-loader"}
    ]
  },
  // Step 3
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
}
