'use strict';

module.exports = {
  version:  require('../package.json').version,
  discover: require('./Discovery').discoverBridges,
  Client:   require('./Client'),
  Scene:    require('./Scene'),
  Error:    require('./Error')
};
