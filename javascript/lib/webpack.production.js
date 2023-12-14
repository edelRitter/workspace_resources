const path = require('path')
const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge');

const config = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: 'https://carservice.r10s.jp/',
    filename: 'js/[name].js',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
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
