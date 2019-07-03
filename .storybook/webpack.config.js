const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.devtool = (mode === 'DEVELOPMENT') ? 'inline-source-map' : false;
  config.performance = {
    hints: false
  };

  return config;
};
