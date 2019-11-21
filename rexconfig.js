/**
 * ReX React Components Starter kit
 * Project entry points for webpack
 */

// Entry points for React components
const entry = {
  'MyComponent/MyComponent': './src/MyComponent/MyComponent.jsx',
};

// Entry points for NPM distribution assets
const npmFiles = {
  index: 'MyComponent',
  components: ['MyComponent'],
};

// Export to webpack.config.js
module.exports = {
  entry,
  npmFiles,
};
