const config = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
config.plugins.push(
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: 'css/[id].css',
  })
)
config['devtool'] = "source-map"
config['devServer'] = {
  contentBase: path.resolve(__dirname, '../dist'),
  compress: true,
  port: 8081,
  host: '0.0.0.0',
  inline: true,
  historyApiFallback: false,
  // proxy: { },
  // setup:function(app){}
}
config.module.rules.push({
  test: /\.(less|css)$/,
  use: [
    'style-loader',
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
      options: {
        javascriptEnabled: true
      }
    }
  ],
  // exclude: /node_modules/
}, )

module.exports = config