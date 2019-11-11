import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import withKnobs from '../../.storybook/withKnobs';
import MyComponent from './MyComponent';

export default {
  title: 'My Component',
  decorators: withKnobs
};

export const withoutParams = () => <MyComponent />;

export const withText = () => (
  <MyComponent>Hello World</MyComponent>
);

export const withCustomClassname = () => (
  <MyComponent className="color-crimson active">Hello World</MyComponent>
);

export const withClickEvent = () => {
  const onClickSample = action('clicked');

  return <MyComponent onClick={onClickSample}>Hello World</MyComponent>
};

export const withChildrenHTML = () => (
  <MyComponent>
    <h2>Hello World</h2>
  </MyComponent>
);

export const withDynamicProps = () => {
  const textWelcome = text('text', 'Welcome to Dynamic React');

  return <MyComponent text={textWelcome} />;
};