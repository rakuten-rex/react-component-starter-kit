import { configure, addParameters } from '@storybook/react';
import rexTheme from './theme/rexTheme';

addParameters({
  options: {
    theme: rexTheme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.jsx$/), module);
