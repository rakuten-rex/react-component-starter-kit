/* eslint-disable import/no-extraneous-dependencies */
import ReactDOMServer from 'react-dom/server';
import addons, { makeDecorator } from '@storybook/addons';

// eslint-disable-next-line import/prefer-default-export
export const withInspectHtml = makeDecorator({
  name: 'withInspectHtml',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context) => {
    const Story = getStory(context);
    const html = ReactDOMServer.renderToStaticMarkup(Story);
    const channel = addons.getChannel();

    channel.emit('storybook/inspecthtml/add_html', html);

    return Story;
  },
});
