'use strict';

let Sensors = require('../../CapabilityModel/Sensors');

/**
 * Get sensors command
 */
class GetSensors {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      url: `api/${client.username}/capabilities`,
      raw: true
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return new Sensors(result.sensors);
      });
  }
}

module.exports = GetSensors;
