'use strict';

let AbstractSensorConfig = require('../AbstractSensorConfig');

/**
 * Daylight sensor: Config
 */
class Config extends AbstractSensorConfig {
  /**
   * Get longitude
   *
   * @return {string} Longitude
   */
  get longitude() {
    return this.sensorConfig.get('longitude');
  }

  /**
   * Set longitude
   *
   * @param {string} value Longitude
   */
  set longitude(value) {
    this.sensorConfig.set('longitude', String(value));
  }

  /**
   * Get latitude
   *
   * @return {string} Latitude
   */
  get latitude() {
    return this.sensorConfig.get('latitude');
  }

  /**
   * Set latitude
   *
   * @param {string} value Latitude
   */
  set latitude(value) {
    this.sensorConfig.set('latitude', String(value));
  }

  /**
   * Get sunrise offset (minutes)
   */
  get sunriseOffset() {
    return this.sensorConfig.get('sunriseoffset');
  }

  /**
   * Set sunrise offset (minutes)
   *
   * @param {int} offset Offset in minutes
   */
  set sunriseOffset(offset) {
    this.sensorConfig.set('sunriseoffset', parseInt(offset));
  }

  /**
   * Get sunset offset (minutes)
   */
  get sunsetOffset() {
    return this.sensorConfig.get('sunsetoffset');
  }

  /**
   * Get sunset offset (minutes)
   *
   * @param {int} offset Offset in minutes
   */
  set sunsetOffset(offset) {
    this.sensorConfig.set('sunsetoffset', parseInt(offset));
  }
}

module.exports = Config;
