'use strict';

module.exports = {
  version:  require('../package.json').version,
  discover: require('./Discovery').discoverBridges,
  Client:   require('./Client'),
  Group:    require('./Group'),
  Scene:    require('./Scene'),
  Schedule: require('./Schedule'),
  Sensor:   require('./Sensor'),
  Error:    require('./Error')
};
