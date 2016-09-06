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
    return this.attributes.get('battery');
  }

  /**
   * Get alert
   * 
   * @return {string} Alert value
   */
  get alert() {
    return this.attributes.get('alert');
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
