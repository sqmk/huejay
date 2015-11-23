'use strict';

let Sensor = require('../../Model/Sensor');

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
      path: `api/${client.username}/sensors`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(sensorId => {
          let state  = result[sensorId].state;
          let config = result[sensorId].config;

          delete result[sensorId].state;
          delete result[sensorId].config;

          return new Sensor(sensorId, result[sensorId], state, config);
        })
      });
  }
}

module.exports = GetSensors;
