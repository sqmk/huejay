'use strict';

let Utils = require('./Utils');

/**
 * Get sensors command
 *
 * Get a list of sensors
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
      url: `api/${client.username}/sensors`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(sensorId => {
          result[sensorId].id = sensorId;

          return Utils.buildSensor(result[sensorId]);
        })
      });
  }
}

module.exports = GetSensors;
