'use strict';

let Utils = require('./Utils');

/**
 * Save sensor state command
 *
 * Saves sensor state
 */
class SaveSensorState {
  /**
   * Constructor
   *
   * @param {Sensor} sensor Sensor
   */
  constructor(sensor) {
    Utils.validateSensor(sensor);

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
      path:   `api/${client.username}/sensors/${this.sensor.id}/state`,
      body:   this.sensor.state
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        return this.sensor;
      });
  }
}

module.exports = SaveSensorState;
