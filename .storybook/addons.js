import '@storybook/addon-knobs/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-viewport/register';

if (process.env.NODE_ENV === 'production') {
  require('@storybook/addon-google-analytics/register');
  window.STORYBOOK_GA_ID = 'UA-139696530-2';
}
