'use strict';

const SUPPORTED_SENSORS = [
  'PHDL00',
  'RWL020',
  'RWL021',
  'ZGPSWITCH',
  'Unknown',
];

/**
 * Factory for Sensor Models
 */
class Factory {
  /**
   * Create sensor model
   *
   * @param {string} modelId Model Id
   *
   * @return {AbstractSensorModel} Sensor model
   */
  static createSensorModel(modelId) {
    if (SUPPORTED_SENSORS.indexOf(modelId) === -1) {
      modelId = 'Unknown';
    }

    let SensorModel = require(`./${modelId}`);

    return new SensorModel;
  }
}

module.exports = Factory;
