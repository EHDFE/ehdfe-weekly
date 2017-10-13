if (process.env.NODE_ENV === 'production') {
  module.exports = require('./render.prod');
} else {
  module.exports = require('./render.dev');
}