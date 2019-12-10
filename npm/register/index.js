'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./register.production.min.js');
} else {
  module.exports = require('./register.development.js');
}
