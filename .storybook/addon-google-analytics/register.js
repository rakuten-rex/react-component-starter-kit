/* eslint-disable import/no-extraneous-dependencies */
import { STORY_RENDERED } from '@storybook/core-events';
import addons from '@storybook/addons';
import { initialize, pageview } from 'react-ga';

addons.register('@rakuten-rex/addon-google-analytics', api => {
  initialize('UA-139696530-1');

  api.on(STORY_RENDERED, () => {
    const pathname = window.location.pathname.split('/')[1];
    const url = pathname + api.getUrlState().path;

    if(window.location.hostname !== 'localhost') {
      pageview(url);
    } else {
      console.log('addon-google-analytics: Not tracking in localhost ' + url);
    }
  });
});
