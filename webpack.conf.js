const HtmlWebpackPlugin = require('html-webpack-plugin')
const Path = require('path')
const resolve = p => Path.resolve(__dirname, p)
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: resolve('./dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new WorkboxWebpackPlugin.GenerateSW({  
      clientsClaim:true,
      skipWaiting:true
    })
  ]
}
