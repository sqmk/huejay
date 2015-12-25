'use strict';

/**
 * Abstract sensor type
 */
class AbstractSensorType {
  /**
   * Constructor
   *
   * @param {Object} details Sensor type details
   */
  constructor(details) {
    this.details = Object.assign({}, details);
  }

  /**
   * Get writable config attributes
   *
   * @return {array} Writable config
   */
  getWritableConfigAttributes() {
    return this.details.config;
  }

  /**
   * Get writable state attributes
   *
   * @return {array} Writable state
   */
  getWritableStateAttributes() {
    return this.details.state;
  }
}

module.exports = AbstractSensorType;
