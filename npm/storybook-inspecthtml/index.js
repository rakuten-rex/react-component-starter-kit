'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./storybook-inspecthtml.production.min.js');
} else {
  module.exports = require('./storybook-inspecthtml.development.js');
}
