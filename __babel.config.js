const presets = ['@babel/env', '@babel/react'];
const plugins = [
  '@babel/transform-runtime',
  '@babel/proposal-object-rest-spread',
  [
    'transform-react-remove-prop-types',
    {
      mode: 'remove',
      removeImport: true,
    },
  ],
  'add-react-displayname',
];

module.exports = { presets, plugins };
