import path from 'path';
import { merge } from 'webpack-merge';
import { DefinePlugin } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import { webpackConfig } from './webpack.base.babel.js';

export default merge ( webpackConfig, {
  stats: 'errors-only',
  mode: 'production',
  devtool: 'false', //production 環境用 source-map、hidden-source-map、nosources-source-map
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
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
});