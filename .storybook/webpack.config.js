module.exports = function({ config }) {
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

  return config;
};
