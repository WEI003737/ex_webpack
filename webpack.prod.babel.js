import path from 'path';
import { merge } from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import { webpackConfig, pages } from './webpack.base.babel.js';


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

export default merge ( webpackConfig, {
  stats: 'errors-only',
  mode: 'production',
  devtool: 'nosources-source-map', //production 環境用 source-map、hidden-source-map、nosources-source-map
  optimization: { //載入優化或壓縮檔案的套件
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin({ //壓縮js
        // parallel: true, //speedup your build significantly
        terserOptions: {
          sourceMap: true,
          compress: {
            drop_console: true
          },
        }
      }),
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[
        { from: 'static', to: 'static' },
        { from: path.resolve(__dirname, 'php'), to: 'php', noErrorOnMissing: true}
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css?[hash:8]',
      chunks: 'all',
      enforce: true,
    }),
    ...pages.map((page) => new HtmlWebpackPlugin(HtmlWebpackPluginTemplate(page))) //每個實例都代表一個 HTML 檔案，可針對各自的 HTML 依 chunk 載入不同的 entry 內容
  ]
});