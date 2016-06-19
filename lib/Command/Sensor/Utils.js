'use strict';

let Error  = require('../../Error');
let Sensor = require('../../Model/Sensor');

const SENSOR_ATTRIBUTES = [
  'id',
  'name',
  'type',
  'modelid',
  'manufacturername',
  'productid',
  'swversion',
  'swconfigid',
  'uniqueid',
];

/**
 * Sensor utils
 */
class Utils {
  /**
   * Validate sensor
   *
   * @param {mixed} sensor Sensor object
   *
   * @return {bool} True if valid
   */
  static validateSensor(sensor) {
    if (sensor instanceof Sensor) {
      return true;
    }

    throw new Error({
      message: 'Expecting Sensor'
    });
  }

  /**
   * Build sensor
   *
   * @param {Object} result Result
   *
   * @return {Sensor} Sensor
   */
  static buildSensor(result) {
    return new Sensor(
      this.mapSensorAttributes(result),
      this.mapSensorConfig(result.config),
      this.mapSensorState(result.state)
    );
  }

  /**
   * Map sensor attributes
   *
   * @param {Object} result Result
   *
   * @return {Object} Attributes
   */
  static mapSensorAttributes(result) {
    let attributes = {};

    if (result === undefined) {
      return attributes;
    }

    for (let key of SENSOR_ATTRIBUTES) {
      if (key in result) {
        attributes[key] = result[key];
      }
    }

    return attributes;
  }

  /**
   * Map sensor config
   *
   * @param {Object} config Config
   *
   * @return {Object} Config
   */
  static mapSensorConfig(config) {
    return Object.assign({}, config);
  }

  /**
   * Map sensor state
   *
   * @param {Object} state State
   *
   * @return {Object} State
   */
  static mapSensorState(state) {
    return Object.assign({}, state);
  }
}

module.exports = Utils;
