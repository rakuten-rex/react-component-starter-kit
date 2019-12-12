import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withInspectHtml } from '../src/storybook-inspect-html';
import { withInspectJsx } from '@rakuten-rex/storybook-inspectjsx';

export default [
  withKnobs,
  withInspectHtml,
  withInspectJsx,
  withA11y,
];
