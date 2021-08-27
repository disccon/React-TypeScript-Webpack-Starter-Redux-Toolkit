const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'static/js/[name].[contenthash:8].js',
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.jsx', '.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'static/images',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'static/svg',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'static/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
      favicon: path.resolve(__dirname, '..', './src/components/Root/favicon.ico'),
    }),
  ],
}
