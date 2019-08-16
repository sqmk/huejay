'use strict';

module.exports = {
  version:    require('../package.json').version,
  discover:   require('./Discovery').discoverBridges,
  Client:     require('./Client'),
  OAuthToken: require('./OAuthToken'),
  Error:      require('./Error')
};
