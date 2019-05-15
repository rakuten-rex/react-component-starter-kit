const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

  config.plugins.push(new MiniCssExtractPlugin());

  return config;
};