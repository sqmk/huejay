'use strict';

module.exports = {
  version:  require('../package.json').version,
  discover: require('./Discovery').discoverBridges,
  Client:   require('./Client'),
  Error:    require('./Error')
};
