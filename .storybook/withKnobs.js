import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withInspectHtml } from '@rakuten-rex/storybook-inspecthtml';
import { withInspectJsx } from '@rakuten-rex/storybook-inspectjsx';

export default [
  withKnobs,
  withInspectHtml,
  withInspectJsx,
  withA11y,
];
