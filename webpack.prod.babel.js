import { merge } from 'webpack-merge';
import baseWebpackConfig from './webpack.base.babel.js';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default merge ( baseWebpackConfig, {
  stats: 'errors-only',
  mode: 'production',
  devtool: 'eval',
  plugins: [
    new CleanWebpackPlugin()
  ]
});