/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, color, select } from '@storybook/addon-knobs';
import Search from 'src/Search';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'Search',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => <Search />;

export const WithDynamicProps = () => {
  const sampleTitle = text('title', 'Dynamic Title');
  const sampleText = text('text', 'Dynamic Text');

  return (
    <Search title={sampleTitle}>
      <p>{sampleText}</p>
    </Search>
  );
};

/**
 * Custom Theme support
 * */

function Theme() {
  const themeText = color('Text', 'crimson', 'Theme Colors');
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
    '--rex-search-theme-text': themeText,
    '--rex-search-title-weight': themeTitleWeight,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, Search),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();

  return <Search style={customStyle} />;
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <Search />
    </>
  );
};
