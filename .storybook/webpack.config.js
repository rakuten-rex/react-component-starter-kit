const path = require('path');

module.exports = function({ config, mode }) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'javascript' },
      },
    ],
    enforce: 'pre',
  });

  config.devtool = (mode === 'DEVELOPMENT') ? 'inline-source-map' : false;
  config.performance = {
    hints: false
  };

  return config;
};
