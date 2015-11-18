'use strict';

let Sensor = require('../Sensor');

/**
 * Get sensor command
 *
 * Get a sensor by id
 */
class GetSensor {
  /**
   * Constructor
   *
   * @param {int} sensorId Sensor Id
   */
  constructor(sensorId) {
    this.sensorId = Number(sensorId);
  }

  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      path: `api/${client.username}/sensors/${this.sensorId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        let state  = result.state;
        let config = result.config;

        delete result.state;
        delete result.config;

        return new Sensor(this.sensorId, result, state, config);
      });
  }
}

module.exports = GetSensor;
