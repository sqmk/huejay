'use strict';

let AbstractSensorConfig = require('../AbstractSensorConfig');

/**
 * ZLLPresence sensor: Config
 */
class Config extends AbstractSensorConfig {
  /**
   * Get sensitivity
   *
   * @return {int} Sensitivity
   */
  get sensitivity() {
    return this.attributes.get('battery');
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
