const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, '')
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
  plugins: [new MiniCssExtractPlugin({
    filename: 'style.css',
  })],
};