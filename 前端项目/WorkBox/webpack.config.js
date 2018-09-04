/**
 * Created by hugo on 2018/8/30.
 */
const workboxPlugin = require('workbox-webpack-plugin');
const swConfig = require('./workbox-config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool:'eval-source-map',
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
      // {
      //   test: /\.(gif|jpg|png|svg|ttf|eot|woff|otf|ttc|woff2)$/,//(png|jpg|gif|svg)//同时处理有问题[建议将正常图片和内联图片分开处理]
      //   loader: 'file-loader',
      //   options: {
      //     name: '[path][name].[ext]'//[path][name].[ext]?[hash]!./dir/file.png
      //   },
      //   include: [__dirname+'/image']
      // },
      {
        test: /.(jpg|png|gif|svg)$/,
        loader: 'url-loader?limit=8192&name=[name].[ext]?[hash]'
      }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //配置热加载

    /*
     这里也可以使用 WorkboxPlugin.InjectManifest({}) 配置
     但是需要 配置 swSrc 指明模板 service-worker 文件
     WorkboxPlugin.GenerateSW({}) 可以直接生成 service-worker 文件
     */

    new workboxPlugin.GenerateSW(swConfig),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'webpack workBox',
      template:'html/index.html',
      favicon: __dirname + '/image/favicon.png',
      hash: true,
      chunks: ["sw","bundle"]
    })
  ],
  devServer:{
    host: 'localhost', //可选，ip
    port: 5566, //可选，端口
    contentBase:path.resolve(__dirname,'dist'), //可选，基本目录结构
    compress: true, //可选，压缩
    hot: true,

  }
}
