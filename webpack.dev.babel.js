import path from 'path';
import { merge } from 'webpack-merge';
import { webpackConfig } from './webpack.base.babel.js';

export default merge (webpackConfig, {
  stats: 'errors-only',
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // hot: true, //開啟 HMR
    port: 8080,
    // host: '0.0.0.0',
    // open: true, //自動開啟,
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'src'),
  }
});