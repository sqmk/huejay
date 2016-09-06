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

    try {
      SensorModel = require(`./${modelId}`);
    } catch (e) {
      SensorModel = require(`./Unknown`);
    }

    return new SensorModel;
  }
}

module.exports = Factory;
