'use strict';

let Sensor = require('../Sensor');

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
      path:   `api/${client.username}/sensor/${this.sensor.id}/state`,
      body:   this.sensor.state
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        return this.sensor;
      });
  }
}

module.exports = SaveLightState;
