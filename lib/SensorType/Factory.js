'use strict';

const SUPPORTED_TYPES = [
  'CLIPGenericFlag',
  'CLIPGenericStatus',
  'CLIPHumidity',
  'CLIPOpenClose',
  'CLIPPresence',
  'CLIPSwitch',
  'CLIPTemperature',
  'Daylight',
  'ZGPSwitch',
  'ZLLSwitch',
  'Unknown',
];

/**
 * Factory for Sensor Types
 */
class Factory {
  /**
   * Create sensor config
   *
   * @param {string} type   Type
   * @param {Object} config Config
   *
   * @return {Object} Sensor config
   */
  static createSensorConfig(type, config) {
    type = this.mapSensorType(type);

    let SensorConfig = require(`./${type}/Config`);

    return new SensorConfig(config);
  }

  /**
   * Create sensor state
   *
   * @param {string} type  Type
   * @param {Object} state State
   *
   * @return {Object} Sensor state
   */
  static createSensorState(type, state) {
    type = this.mapSensorType(type);

    let SensorState = require(`./${type}/State`);

    return new SensorState(state);
  }

  /**
   * Map sensor type
   *
   * @param {string} type Type
   *
   * @return {string} Type
   */
  static mapSensorType(type) {
    return SUPPORTED_TYPES.indexOf(type) !== -1
      ? type
      : 'Unknown';
  }
}

module.exports = Factory;
