import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

import { DEV_ENV, NODE_ENV, PUBLICPATH } from './config';

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: ['@babel/polyfill', './main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].js?[hash:8]'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
          priority: 10
        }
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compiler: require('vue-template-compiler'), // 此為預設值
          compilerOptions: {
            whitespace: 'condense', // Vue CLI v3 預設選項
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
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
        test: /\.css$/,
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
              name: '[name].[ext]?[hash:8]',
              publicPath: NODE_ENV === 'production' ? PUBLICPATH + '/static/images' : './static/images',
              limit: 1000,
              emitFile: false, //預設true: 輸出檔案 / false: css路徑寫入publicPath，不輸出檔案
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
              name: '[name].[ext]?[hash:8]',
              publicPath: NODE_ENV === 'production' ? PUBLICPATH + '/static/images' : './static/images',
              limit: 10000,
              emitFile: false,
            },
          },
        ],
      },
    ]
  },
  resolve: {  
    extensions: ['.vue', '.mjs', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/static/images'),
      vue$: 'vue/dist/vue.runtime.esm.js', // 相比於 vue.esm.js 小 30% 左右
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: `./index.html`,
      filename: `index.html`,
      chunks: ['vendor', 'index']
      // excludeChunks: ['contact'], // 排除名為 contact 的 chunk
      // chunksSortMode: 'manual', // 將排序改為手動模式 (即根據 chunks 進行排序)
      // minify: NODE_ENV === 'production' ? true : false, //壓縮優化html，預設 production 啟用
    })
  ]
}

export {
  webpackConfig
};