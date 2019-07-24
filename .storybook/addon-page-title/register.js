import addons from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';
import { name } from '../../package.json';
const packageName = name.replace('@rakuten-rex/', '');

addons.register('@rakuten-rex/addon-page-title', api => {
  
  api.on(STORY_RENDERED, () => {
    document.title = packageName + ' | ReX';
  })
});
