const path = require('path')
const commonConfig = require('./webpack.common')
const CopyPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge');

const config = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
      watch: true,
    },
    host: '0.0.0.0',
    port: 8080,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public/**/*',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html?$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              sources: {
                urlFilter: (attribute, value) => {
                  if (value.startsWith('/')) {
                    return false
                  }
                  return true
                },
              },
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
}

// Merge commonConfig with prod config, priority to prod config
module.exports = merge(commonConfig, {
  ...config,
})