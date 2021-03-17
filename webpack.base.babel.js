import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { DEV_ENV, NODE_ENV, PUBLICPATH } from './config';
import imgPath from './src/js/hbsHelpers/imgPath';

const pages = ['index', 'story'];

function HtmlWebpackPluginTemplate (page) {
  return {
    template: `./views/${page}.hbs`,
    filename: `${page}.html`,
    chunks: ['vendor', page]
    // excludeChunks: ['contact'], // 排除名為 contact 的 chunk
    // chunksSortMode: 'manual', // 將排序改為手動模式 (即根據 chunks 進行排序)
    // minify: NODE_ENV === 'production' ? true : false, //壓縮優化html，預設 production 啟用
  }
};

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: ['@babel/polyfill', './js/index.js'],
    story: ['@babel/polyfill', './js/story.js']
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
        test: /\.(handlebars|hbs)$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.resolve(__dirname, 'src/js/hbsHelpers'),
          partialDirs: [path.join(__dirname, 'src/views')],
          knownHelpers: [ // export function 的名字
            imgPath
          ]
        }
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css?[hash:8]',
      chunks: 'all',
      enforce: true,
    }),
    ...pages.map((page) => new HtmlWebpackPlugin(HtmlWebpackPluginTemplate(page))) //每個實例都代表一個 HTML 檔案，可針對各自的 HTML 依 chunk 載入不同的 entry 內容
  ]
}

export default webpackConfig;