import { merge } from 'webpack-merge';
import baseWebpackConfig from './webpack.base.babel.js';

export default merge (baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map'
});