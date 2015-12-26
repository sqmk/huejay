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
   * Create sensor type
   *
   * @param {string} type Type
   *
   * @return {AbstractSensorType} Sensor type
   */
  static createSensorType(type) {
    if (SUPPORTED_TYPES.indexOf(type) === -1) {
      type = 'Unknown';
    }

    let SensorType = require(`./${type}`);

    return new SensorType;
  }
}

module.exports = Factory;
