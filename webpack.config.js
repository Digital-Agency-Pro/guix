const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path')
module.exports = (env) => ({
  // entry: './src/js/main.js',
  entry: path.resolve(__dirname, './src/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[сontenthash].js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(png|mp4|svg|jpg|jpeg|gif|ttf)$/i,
        type: 'asset/resource'
      },

      {
        test: [
          /\.scss$/i
        ],
        use: [
          // Creates `style` nodes from JS strings
          env.prod ? MiniCssExtractPlugin.loader : 'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GUIX Website',
      template: path.resolve(__dirname, 'src/index.html'), // файл шаблона
      // template: './src/index.html', // шаблон
      filename: 'index.html', // название выходного файла
      scriptLoading: 'defer',
      crossorigin: 'anonymous',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[сontenthash].css'
    }),
    new CleanWebpackPlugin(),
    new LinkTypePlugin({
      '**/*.css' : 'text/css'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
})
