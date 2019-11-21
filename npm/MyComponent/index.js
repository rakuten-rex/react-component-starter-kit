'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = [
    require('./MyComponent.production.min.css'),
    require('./MyComponent.production.min.js')
  ];
} else {
  module.exports = [
    require('./MyComponent.development.css'),
    require('./MyComponent.development.js')
  ];
}
