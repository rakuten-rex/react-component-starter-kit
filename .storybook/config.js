import { configure, addParameters } from '@storybook/react';
import rexTheme from './rexTheme';

// Option defaults.
addParameters({
  options: {
    theme: rexTheme,
  },
});

// automatically import all files ending in *.jsx
const req = require.context('../stories', true, /\.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
