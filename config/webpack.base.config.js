const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/app.js'
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, "../dist")]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
      inject: 'body',
      hash: true,
      chunks: ['app']
    })
  ],
  externals: {
    'createjs': 'window.createjs'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[ext]'
          }
        }]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'application/font-woff',
            name: 'fonts/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 8192,
            mimetype: 'application/font-woff',
            name: 'fonts/[name].[ext]'
          }
        }]
      }
    ]
  }
}
module.exports = config