import React from 'react';
import { action } from '@storybook/addon-actions';
import MyComponent from './MyComponent';

export default {
  title: 'My Component',
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
