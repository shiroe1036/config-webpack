const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
});
