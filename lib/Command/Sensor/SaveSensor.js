'use strict';

let Utils = require('./Utils');

const ATTRIBUTE_MAP = {
  'name': 'name',
};

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
    let promises = [];
    for (let key in this.sensor.attributes) {
      if (key in ATTRIBUTE_MAP) {
        promises.push(
          this.saveSensorAttribute(
            client,
            ATTRIBUTE_MAP[key],
            this.sensor.attributes[key]
          )
        );
      }
    }

    return Promise.all(promises)
      .then(() => {
        return true;
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
      path:   `api/${client.username}/sensors/${this.sensor.id}`,
      body:   {}
    };

    options.body[attribute] = value;

    return client.getTransport()
      .sendRequest(options);
  }
}

module.exports = SaveSensor;
