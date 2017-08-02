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

  /**
   * Is user test?
   * 
   * @return {bool} True if user test mode, false if not
   */
  get userTest() {
    return this.attributes.get('usertest');
  }

  /**
   * Set user test
   * 
   * @param {bool} value True or false
   */
  set userTest(value) {
    this.attributes.set('usertest', Boolean(value));
  }

  /**
   * Get pending config
   * 
   * @return {array} List of configs pending change on device
   */
  get pending() {
    return this.attributes.get('pending');
  }

  /**
   * LED indication?
   * 
   * @return {bool} True if LED indication, false if not
   */
  get ledIndication() {
    return this.attributes.get('ledindication');
  }

  /**
   * Set LED indication
   * 
   * @param {bool} value True or false
   */
  set ledIndication(value) {
    this.attributes.set('ledindication', Boolean(value));
  }

  /**
   * Get battery level
   *
   * @return {int} Battery level
   */
  get battery() {
    return this.attributes.get('battery');
  }
}

module.exports = Config;
