/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, color, select } from '@storybook/addon-knobs';
import Button from 'src/Button';
import withKnobs from '../../.storybook/withKnobs';

export default {
  title: 'Button',
  decorators: withKnobs,
};

export const defaultView = () => <Button />;

export const withThemeReact = () => {
  const themeText = color('Text', '#232361', 'Theme Colors');
  const themeTitleWeight = select(
    'Title Weight',
    {
      Weight300: 300,
      WeightNormal: 'normal',
      Weight500: 500,
      WeightBold: 'bold',
    },
    500,
    'Theme Props'
  );

  const customStyle = {
    '--rex-button-theme-text': themeText,
    '--rex-button-title-weight': themeTitleWeight,
  };

  return (
    <Button style={customStyle}>
      This is an example of Theme in React
    </Button>
  );
};

export const withThemeHTML = () => {
  const themeText = color('Text', '#232361', 'Theme Colors');
  const themeTitleWeight = select(
    'Title Weight',
    {
      Weight300: 300,
      WeightNormal: 'normal',
      Weight500: 500,
      WeightBold: 'bold',
    },
    500,
    'Theme Props'
  );

  const customStyle = `
    .rex-button {
      --rex-button-theme-text: ${themeText};
      --rex-button-title-weight: ${themeTitleWeight};
    }
  `;

  return (
    <>
      <style>{customStyle}</style>
      <Button>
        This is an example of Theme in HTML
      </Button>
    </>
  );
};
