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
    return this.attributes.get('long');
  }

  /**
   * Set longitude
   *
   * @param {string} value Longitude
   */
  set longitude(value) {
    this.attributes.set('long', String(value));
  }

  /**
   * Get latitude
   *
   * @return {string} Latitude
   */
  get latitude() {
    return this.attributes.get('lat');
  }

  /**
   * Set latitude
   *
   * @param {string} value Latitude
   */
  set latitude(value) {
    this.attributes.set('lat', String(value));
  }

  /**
   * Is configured?
   */
  get configured() {
    return this.attributes.get('configured');
  }

  /**
   * Get sunrise offset (minutes)
   */
  get sunriseOffset() {
    return this.attributes.get('sunriseoffset');
  }

  /**
   * Set sunrise offset (minutes)
   *
   * @param {int} offset Offset in minutes
   */
  set sunriseOffset(offset) {
    this.attributes.set('sunriseoffset', parseInt(offset, 10));
  }

  /**
   * Get sunset offset (minutes)
   */
  get sunsetOffset() {
    return this.attributes.get('sunsetoffset');
  }

  /**
   * Get sunset offset (minutes)
   *
   * @param {int} offset Offset in minutes
   */
  set sunsetOffset(offset) {
    this.attributes.set('sunsetoffset', parseInt(offset, 10));
  }
}

module.exports = Config;
