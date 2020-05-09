const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, './dist'),
    path: outputPath,
    filename: 'bundle.js'
  },
  devServer:{
    // watchContentBase: true,
    // contentBase: path.resolve(__dirname, './'),
    contentBase: './',
    // contentBase: outputPath,
    open: true,
    // ブラウザからバンドルにアクセスする際のパス
    publicPath: '/src/',
    port: 9000,
  },
  module: {
    rules: [
      { test: /\.(sass|scss)$/,
        // use: ["style-loader", "css-loader", "sass-loader"]
        // 分離する場合はstyle-loaderは不要
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};