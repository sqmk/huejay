'use strict';

let Sensor = require('../Sensor');

/**
 * Save sensor config command
 *
 * Saves sensor config
 */
class SaveSensorConfig {
  /**
   * Constructor
   *
   * @param {Sensor} sensor Sensor
   */
  constructor(sensor) {
    Sensor.validateSensor(sensor);

    this.sensor = sensor;
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
      method: 'PUT',
      path:   `api/${client.username}/sensors/${this.sensor.id}/config`,
      body:   this.sensor.config
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        return this.sensor;
      });
  }
}

module.exports = SaveSensorConfig;
