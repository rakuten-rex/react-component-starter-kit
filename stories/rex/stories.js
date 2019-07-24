/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withInspectHtml } from '@rakuten-rex/storybook-inspecthtml';
import { withInspectJsx } from '@rakuten-rex/storybook-inspectjsx';

export default function ReXStories(name) {
  const stories = storiesOf(name, module);
  stories.addDecorator(withInspectHtml);
  stories.addDecorator(withInspectJsx);
  stories.addDecorator(withKnobs);
  stories.addDecorator(withA11y);

  return stories;
}
