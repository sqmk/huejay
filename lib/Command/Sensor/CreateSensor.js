'use strict';

let Utils = require('./Utils');

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
      path:   `api/${client.username}/sensors`,
      body:   {
        state:  this.sensor.state,
        config: this.sensor.config
      }
    };

    let attributes = this.group.attributes.getAll();
    for (let key in attributes) {
      if (key in ATTRIBUTE_MAP) {
        options.body[ATTRIBUTE_MAP[key]] = attributes[key];
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
