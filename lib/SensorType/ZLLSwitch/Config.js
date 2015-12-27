'use strict';

let AbstractSensorConfig = require('../AbstractSensorConfig');

/**
 * ZLLSwitch sensor: Config
 */
class Config extends AbstractSensorConfig {
  /**
   * Get battery level
   *
   * @return {int} Battery level
   */
  get battery() {
    return this.sensorConfig.get('battery');
  }

  /**
   * Get reachable
   *
   * @return {bool} True if reachable, false if not
   */
  get reachable() {
    return this.sensorConfig.get('reachable');
  }
}

module.exports = Config;
