'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name'
];

/**
 * Save sensor command
 *
 * Saves sensor
 */
class SaveSensor {
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
    let attributes = this.sensor.attributes.getChanged();
    let promises   = [];

    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        promises.push(
          client,
          key,
          attributes[key]
        );
      }
    }

    return Promise.all(promises)
      .then(() => {
        return this.sensor;
      });
  }

  /**
   * Save sensor attribute
   *
   * @param {Client} client    Client
   * @param {string} attribute Attribute
   * @param {mixed}  value     Value
   *
   * @return {Promise} Promise for chaining
   */
  saveSensorAttribute(client, attribute, value) {
    let options = {
      method: 'PUT',
      url:    `api/${client.username}/sensors/${this.sensor.id}`,
      data:   {}
    };

    options.data[attribute] = value;

    return client.getTransport()
      .sendRequest(options);
  }
}

module.exports = SaveSensor;
