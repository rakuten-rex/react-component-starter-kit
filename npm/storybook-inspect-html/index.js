'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./storybook-inspect-html.production.min.js');
} else {
  module.exports = require('./storybook-inspect-html.development.js');
}
