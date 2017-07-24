'use strict';

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
    let SensorModel = null;

    switch (modelId) {
      case 'PHDL00':
        SensorModel = require('./PHDL00');
        break;
      case 'RWL020':
        SensorModel = require('./RWL020');
        break;
      case 'RWL021':
        SensorModel = require('./RWL021');
        break;
      case 'SML001':
        SensorModel = require('./SML001');
        break;
      case 'ZGPSWITCH':
        SensorModel = require('./ZGPSWITCH');
        break;
      default:
      case 'Unknown':
        SensorModel = require('./Unknown');
        break;
    }

    return new SensorModel;
  }
}

module.exports = Factory;
