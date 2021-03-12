import { merge } from 'webpack-merge';
import baseWebpackConfig from './webpack.base.babel.js';

export default merge (baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // hot: true, //開啟 HMR
    port: 8080,
    // open: true, //自動開啟,
    // watchContentBase: true,
    // contentBase: path.resolve(__dirname, 'src'),
  }
});