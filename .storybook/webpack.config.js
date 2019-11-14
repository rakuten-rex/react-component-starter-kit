const path = require('path');
const cssnano = require('cssnano');
// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const DiscardOverriddenCssPropsPlugin = require('../webpack-scripts/discard-overridden-css-props');

module.exports = function ({ config, mode }) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: true,
        },
      },
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

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  );

  config.plugins.push(
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAllButFirst: true,
            },
            cssDeclarationSorter: {
              order: 'alphabetically',
            },
          },
        ],
      },
    }),
  );

  config.plugins.push(
    new DiscardOverriddenCssPropsPlugin(),
  );

  const srcPath = (mode === 'DEVELOPMENT') ? '../src/' : '../node_modules/@rakuten-rex/react-component-starter-kit/';
  
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      src: path.resolve(__dirname, srcPath),
    }
  };

  return config;
};
