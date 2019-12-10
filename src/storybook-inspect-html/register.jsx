/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import addons from '@storybook/addons';
import InspectHtml from './InspectHtml';

addons.register('storybook/inspecthtml', api => {
  addons.addPanel('storybook/inspecthtml/panel', {
    title: 'Inspect HTML',
    render: ({ active }) => {
      const channel = addons.getChannel();

      return (
        <InspectHtml
          channel={channel}
          api={api}
          active={active}
          key="inspect-html"
        />
      );
    },
  });
});
