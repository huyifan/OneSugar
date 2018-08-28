var path = require('path');
module.exports = {
  bail: true,
  context: __dirname, //上下文
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!postcss-loader!less-loader"
      },
      {
        test: /\.(gif|jpg|png|svg|ttf|eot|woff|otf|ttc|woff2)$/,//(png|jpg|gif|svg)//同时处理有问题[建议将正常图片和内联图片分开处理]
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'//[path][name].[ext]?[hash]!./dir/file.png
        },
        include: path.resolve(__dirname, './image')
      }
    ]
  }
};