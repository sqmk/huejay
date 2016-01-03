'use strict';

let Utils = require('./Utils');

const ALLOWED_ATTRIBUTES = [
  'name',
  'type',
  'modelid',
  'manufacturername',
  'swversion',
  'uniqueid',
];

/**
 * Create sensor command
 *
 * Create a sensor
 */
class CreateSensor {
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
      method: 'POST',
      url:    `api/${client.username}/sensors`,
      data:   {
        config: this.sensor.config.attributes.getAll(),
        state:  this.sensor.state.attributes.getAll()
      }
    };

    let attributes = this.sensor.attributes.getAll();
    for (let key of ALLOWED_ATTRIBUTES) {
      if (key in attributes) {
        options.data[key] = attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.sensor.attributes.resetChanged();

        this.sensor.attributes.replace({
          id: result.id
        });

        return this.sensor;
      });
  }
}

module.exports = CreateSensor;
