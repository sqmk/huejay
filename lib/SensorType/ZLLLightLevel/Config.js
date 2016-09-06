'use strict';

let AbstractSensorConfig = require('../AbstractSensorConfig');

/**
 * ZLLLightLevel sensor: Config
 */
class Config extends AbstractSensorConfig {
  /**
   * Get dark threshold
   * 
   * @return {int} Dark threshold
   */
  get darkThreshold() {
    return this.attributes.get('tholddark');
  }

  /**
   * Set dark threshold
   * 
   * @param {int} Threshold
   */
  set darkThreshold(threshold) {
    this.attributes.set('tholddark', parseInt(threshold, 10));
  }

  /**
   * Get threshold offset
   * 
   * @return {int} Threshold offset
   */
  get thresholdOffset() {
    return this.attributes.get('tholdoffset');
  }

  /**
   * Set threshold offset
   * 
   * @param {int} Threshold
   */
  set thresholdOffest(threshold) {
    this.attributes.set('tholdoffset', parseInt(threshold, 10));
  }

  /**
   * Get battery level
   *
   * @return {int} Battery level
   */
  get battery() {
    return this.attributes.get('battery');
  }

  /**
   * Get reachable
   *
   * @return {bool} True if reachable, false if not
   */
  get reachable() {
    return this.attributes.get('reachable');
  }
}

module.exports = Config;
