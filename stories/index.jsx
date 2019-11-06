/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { text } from '@storybook/addon-knobs';
import ReXStories from './rex/stories';
import FormInputLabel from '../src/index';

const stories = ReXStories('FormInputLabel');

// Stories
stories.add('default', () => (
  <FormInputLabel label={text('Input Label', 'ラベル')} />
));
