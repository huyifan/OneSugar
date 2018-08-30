/**
 * Created by hugo on 2018/8/30.
 */
const workboxPlugin = require('workbox-webpack-plugin');
const swConfig = require('./workbox-config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: {
    bundle: './js/index.js',
  },
  output: {
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader'
      //   }
      // },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!postcss-loader!less-loader"
      },

    ]
  },
  plugins: [

    /*
     这里也可以使用 WorkboxPlugin.InjectManifest({}) 配置
     但是需要 配置 swSrc 指明模板 service-worker 文件
     WorkboxPlugin.GenerateSW({}) 可以直接生成 service-worker 文件
     */

    new workboxPlugin.GenerateSW(swConfig),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'webpack workBox',
      favicon: __dirname + '/image/favicon.png',
      hash: true,
      chunks: ["sw","bundle"]
    })
  ]
}
