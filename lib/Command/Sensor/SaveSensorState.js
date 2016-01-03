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
      url:    `api/${client.username}/sensors/${this.sensor.id}/state`,
      data:   this.sensor.state.attributes.getChanged()
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        this.sensor.state.attributes.resetChanged();

        return this.sensor;
      });
  }
}

module.exports = SaveSensorState;
