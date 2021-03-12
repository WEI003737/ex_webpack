import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


import { DEV_ENV, PROD_ENV, NODE_ENV, PUBLICPATH } from './config';

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[hash].js'
  },
  module: {
    rules: [  
      {
        test: /\.s[ac]ss$/i,
        use: () => {
          const loaders = ['css-loader', 'resolve-url-loader', 'postcss-loader', 'sass-loader']
          return NODE_ENV === 'development'
            ? ['style-loader', ...loaders.map(el => el += '?sourceMap=true')]
            : DEV_ENV === 'cssextract'
            ? [MiniCssExtractPlugin.loader, ...loaders.map(el => el += '?sourceMap=true')]
            : [MiniCssExtractPlugin.loader, ...loaders]
        }
      },
      {
        test: /\.css$/i,
        use: () => 
          NODE_ENV === 'development'
          ? ['style-loader', 'css-loader?sourceMap=true', 'resolve-url-loader']
          : [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: NODE_ENV === 'production' ? PUBLICPATH + '/static/images/[name].[ext]': './static/images/[name].[ext]',
              limit: 1000,
              emitFile: false,
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: NODE_ENV === 'production' ? PUBLICPATH + '/static/images/[name].[ext]': './static/images/[name].[ext]',
              limit: 10000,
              emitFile: false,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css',
      chunks: 'all'
    }),
    new HtmlWebpackPlugin({ //每個實例都代表一個 HTML 檔案，可針對各自的 HTML 依 chunk 載入不同的 entry 內容
      template: `./index.html`,
      filename: `index.html`,
      // chunks: ['vendor', 'index'],
      // excludeChunks: ['contact'], // 排除名為 contact 的 chunk
      // chunksSortMode: 'manual', // 將排序改為手動模式 (即根據 chunks 進行排序)
      // minify: NODE_ENV === 'production' ? true : false, //壓縮優化html，預設 production 啟用
    })
  ]
}

export default webpackConfig;