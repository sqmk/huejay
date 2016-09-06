'use strict';

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
    let SensorConfig = this.mapSensorType(type, 'Config');

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
    let SensorState = this.mapSensorType(type, 'State');

    return new SensorState(state);
  }

  /**
   * Map sensor type
   *
   * @param {string} type Type
   *
   * @return {string} Type
   */
  static mapSensorType(type, resource) {
    let SensorResource = null;

    try {
      SensorResource = require(`./${type}/${resource}`);
    } catch (e) {
      SensorResource = require(`./Unknown/${resource}`);
    }

    return SensorResource;
  }
}

module.exports = Factory;
