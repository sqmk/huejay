'use strict';

let AbstractZLLSensorConfig = require('../AbstractZLLSensorConfig');

/**
 * ZLLLightLevel sensor: Config
 */
class Config extends AbstractZLLSensorConfig {
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
}

module.exports = Config;
