const path = require('path')
const config = require('./config/webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
config['optimization'] = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true // set to true if you want JS source maps
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
}
config.mode = 'production'
config.plugins.push(
  new MiniCssExtractPlugin({
    filename: './css/[name].[hash].css',
    chunkFilename: './css/[id].[hash].css',
  })
)
config.module.rules.push({
  test: /\.(less|css)$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: false
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        config: {
          path: './config/postcss.config.js'
        }
      }
    },
    {
      loader: 'less-loader',
      options: { javascriptEnabled: true }
    }
  ],
  // exclude: /node_modules/
}, )

module.exports = config