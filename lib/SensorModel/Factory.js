'use strict';

const SENSOR_MODEL_MAP = {
  'PHDL00':    'Phdl00',
  'RWL020':    'Rwl020',
  'RWL021':    'Rwl021',
  'ZGPSWITCH': 'Zgpswitch',
  '*':         'Unknown',
};

/**
 * Factory for Sensor Models
 */
class Factory {
  /**
   * Create sensor model
   *
   * @param {string} modelId Model Id
   *
   * @return {AbstractSensorModel} SensorModel
   */
  static createSensorModel(modelId) {
    if (!(modelId in SENSOR_MODEL_MAP)) {
      modelId = '*';
    }

    let SensorModel = require(`./${SENSOR_MODEL_MAP[modelId]}`);

    return new SensorModel;
  }
}

module.exports = Factory;
