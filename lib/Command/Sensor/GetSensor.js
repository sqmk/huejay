'use strict';

let Utils = require('./Utils');

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
      url: `api/${client.username}/sensors/${this.sensorId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        result.id = this.sensorId;

        return Utils.buildSensor(result);
      });
  }
}

module.exports = GetSensor;
