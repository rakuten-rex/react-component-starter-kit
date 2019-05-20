/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

const { default: MyComponent } =
  process.env.NODE_ENV === 'production'
    ? require('../build/node_modules/@rakuten-rex/react-component-starter-kit')
    : require('../src/MyComponent');

const stories = storiesOf('MyComponent', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

// Stories
stories.add('default', () => <MyComponent />);
stories.add('with text', () => <MyComponent text="Welcome to React example" />);
stories.add('with className', () => (
  <MyComponent className="color-black active" />
));

stories.add('with onClick', () => {
  const onClickSample = action('clicked');

  return <MyComponent onClick={onClickSample} />;
});

stories.add('with children', () => (
  <MyComponent>
    <p>Hello World</p>
  </MyComponent>
));

stories.add('with dynamic props', () => {
  const textWelcome = text('text', 'Welcome to Dynamic React');

  return <MyComponent text={textWelcome} />;
});
