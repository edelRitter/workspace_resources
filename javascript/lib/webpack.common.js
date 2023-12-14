const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const files = glob.sync('public/**/*.html');

const config = {
  entry: {
    javascript: [path.resolve(__dirname, '../src/js/index.js')],
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules\/(?!(is-blob)\/).*/],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
    extensions: ['.css', '.scss', '.js', '.json', '.html'],
  },
}

files.forEach((filePath) => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: filePath.replace('public/', ''),
      template: path.join(__dirname, filePath),
      minify: false,
      inject: filePath.indexOf('/inc/') === -1,
    }),
  )
})

module.exports = config