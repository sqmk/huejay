'use strict';

let Sensor = require('../Sensor');

const ATTRIBUTE_MAP = {
  'name':            'name',
  'type':            'type',
  'modelId':         'modelid',
  'manufacturer':    'manufacturername',
  'softwareVersion': 'swversion',
  'uniqueId':        'uniqueid',
};

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
      method: 'POST',
      path:   `api/${client.username}/sensors`,
      body:   {
        state:  this.sensor.state,
        config: this.sensor.config
      }
    };

    for (let key in this.sensor.attributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = this.sensor.attributes[key];
      }
    }

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        this.sensor.attributes.id = result.id;

        return this.sensor;
      });
  }
}

module.exports = CreateSensor;
