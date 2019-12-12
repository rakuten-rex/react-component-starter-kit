/* eslint-disable import/no-extraneous-dependencies */
/**
 * ReX React Components Starter kit
 * Project entry points for webpack (automated version)
 */

const entry = {
  'MyComponent/MyComponent': './src/MyComponent/MyComponent.jsx',
  'register/register': './src/register/register.jsx',
  'storybook-inspect-html/storybook-inspect-html':
    './src/storybook-inspect-html/index.jsx',
};

const npmFiles = {
  index: 'storybook-inspect-html',
  components: ['register', 'storybook-inspect-html', 'MyComponent'],
};

module.exports = {
  entry,
  npmFiles,
};
