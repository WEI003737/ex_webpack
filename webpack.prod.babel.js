import path from 'path';
import { merge } from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseWebpackConfig from './webpack.base.babel.js';


export default merge ( baseWebpackConfig, {
  stats: 'errors-only',
  mode: 'production',
  devtool: 'false',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[
        { from: 'static', to: 'static' },
        { from: path.resolve(__dirname, 'php'), to: 'php', noErrorOnMissing: true}
      ]
    })
  ]
});