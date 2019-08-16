'use strict';

let Utils = require('./Utils');

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
      url:    `${client.username}/sensors/${this.sensor.id}/config`,
      data:   this.sensor.config.attributes.getChanged()
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => {
        this.sensor.config.attributes.resetChanged();

        return this.sensor;
      });
  }
}

module.exports = SaveSensorConfig;
