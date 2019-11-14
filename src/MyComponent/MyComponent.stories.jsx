/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, color, select } from '@storybook/addon-knobs';
import MyComponent from 'src/MyComponent';
import withKnobs from '../../.storybook/withKnobs';

export default {
  title: 'My Component',
  decorators: withKnobs,
};

export const defaultView = () => <MyComponent />;

export const withLink = () => (
  <MyComponent>
    <a href="/" target="_blank">
      Link
    </a>
  </MyComponent>
);

export const withCustomClassname = () => (
  <MyComponent className="rex-my-component elevation" />
);

export const withClickEvent = () => {
  const onClickSample = action('clicked');

  return <MyComponent onClick={onClickSample} />;
};

export const withDynamicProps = () => {
  const sampleTitle = text('title', 'Dynamic Title');
  const sampleText = text('text', 'Dynamic Text');

  return <MyComponent title={sampleTitle} text={sampleText} />;
};

export const withThemeReact = () => {
  const themeText = color('Text', '#232361', 'Theme Colors');
  const themeLink = color('Link', '#CC0070', 'Theme Colors');
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
    '--rex-my-component-theme-text': themeText,
    '--rex-my-component-theme-link': themeLink,
    '--rex-my-component-title-weight': themeTitleWeight,
  };

  return (
    <MyComponent style={customStyle}>
      <a href="/" target="_blank">
        Link
      </a>
    </MyComponent>
  );
};

export const withThemeHTML = () => {
  const themeText = color('Text', '#232361', 'Theme Colors');
  const themeLink = color('Link', '#CC0070', 'Theme Colors');
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
    .rex-my-component {
      --rex-my-component-theme-text: ${themeText};
      --rex-my-component-theme-link: ${themeLink};
      --rex-my-component-title-weight: ${themeTitleWeight};
    }
  `;

  return (
    <>
      <style>{customStyle}</style>
      <MyComponent>
        <a href="/" target="_blank">
          Link
        </a>
      </MyComponent>
    </>
  );
};
