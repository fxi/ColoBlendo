/* jshint esversion:6 */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : 'development',
  entry: './index.js',
  output: {
    path:path.resolve(__dirname,'../docs/blobs/'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : './index.html',
      title : 'Blob experiment'
    })
  ],
  module : {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              //bypassOnDebug: true, // webpack@1.x
              //disable: true, // webpack@2.x and newer
            },
          }
        ]
      }
    ]
  }
};
