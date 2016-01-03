'use strict';

/**
 * Delete sensor command
 *
 * Delete a sensor by id
 */
class DeleteSensor {
  /**
   * Constructor
   *
   * @param {string} sensorId Sensor Id or Sensor object
   */
  constructor(sensorId) {
    this.sensorId = String(sensorId);
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
      method: 'DELETE',
      url:    `api/${client.username}/sensors/${this.sensorId}`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(() => true);
  }
}

module.exports = DeleteSensor;
