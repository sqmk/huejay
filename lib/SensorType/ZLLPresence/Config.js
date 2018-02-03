'use strict';

let AbstractZLLSensorConfig = require('../AbstractZLLSensorConfig');

/**
 * ZLLPresence sensor: Config
 */
class Config extends AbstractZLLSensorConfig {
  /**
   * Get sensitivity
   *
   * @return {int} Sensitivity
   */
  get sensitivity() {
    return this.attributes.get('sensitivity');
  }

  /**
   * Get max sensitivity
   *
   * @return {int} Max sensitivity
   */
  get maxSensitivity() {
    return this.attributes.get('sensitivitymax');
  }
}

module.exports = Config;
