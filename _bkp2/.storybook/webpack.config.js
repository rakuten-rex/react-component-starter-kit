const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.(svg)$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: `service/[name].[ext]`,
        publicPath: `http://localhost:8080/`,
      },
    }],
    include: path.resolve(__dirname, '../node_modules/rgm-global-header'),
  });

  // Return the altered config
  return config;
};