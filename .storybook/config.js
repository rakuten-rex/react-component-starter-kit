import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import rexTheme from './theme/rexTheme';

addParameters({
  options: {
    theme: rexTheme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.jsx$/), module);
