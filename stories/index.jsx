/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import ReXText from '@rakuten-rex/core/text';
import ReXStories from './rex/stories';
import MyComponent from '../src/index';

const stories = ReXStories('MyComponent');

// Stories
stories.add('default', () => <MyComponent />);
stories.add('with text', () => <MyComponent text="Welcome to React example" />);
stories.add('with className', () => (
  <React.Fragment>
    <MyComponent className="color-black active" />
  </React.Fragment>
));

stories.add('with onClick', () => {
  const onClickSample = action('clicked');

  return <MyComponent onClick={onClickSample} />;
});

stories.add('with children', () => (
  <MyComponent>
    <ReXText>Hello World</ReXText>
  </MyComponent>
));

stories.add('with dynamic props', () => {
  const textWelcome = text('text', 'Welcome to Dynamic React');

  return <MyComponent text={textWelcome} />;
});
