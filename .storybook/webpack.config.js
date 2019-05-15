const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      mode !== 'PRODUCTION' ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../'),
  });

  if(mode === 'PRODUCTION') {
    config.plugins.push(new CleanWebpackPlugin());
    config.plugins.push(new MiniCssExtractPlugin());
  }
  
  return config;
};